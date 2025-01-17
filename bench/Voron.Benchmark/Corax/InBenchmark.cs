﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using BenchmarkDotNet.Analysers;
using BenchmarkDotNet.Attributes;
using BenchmarkDotNet.Columns;
using BenchmarkDotNet.Configs;
using BenchmarkDotNet.Diagnostics.Windows.Configs;
using BenchmarkDotNet.Environments;
using BenchmarkDotNet.Exporters;
using BenchmarkDotNet.Jobs;
using BenchmarkDotNet.Validators;
using Corax;
using Corax.Queries;
using Raven.Server.Documents.Queries.Parser;
using Sparrow.Server;
using Sparrow.Threading;


namespace Voron.Benchmark.Corax
{
    [DisassemblyDiagnoser]
    [InliningDiagnoser(logFailuresOnly: true, filterByNamespace: true)]
    public class InBenchmark
    {
        protected StorageEnvironment Env;
        public virtual bool DeleteBeforeSuite { get; protected set; } = true;
        public virtual bool DeleteAfterSuite { get; protected set; } = true;
        public virtual bool DeleteBeforeEachBenchmark { get; protected set; } = false;


        [Params(16, 64, 256, 1024)]
        public int BufferSize { get; set; }

        /// <summary>
        /// Path to store the benchmark database into.
        /// </summary>
        public const string Path = Configuration.Path;

        /// <summary>
        /// This is the job configuration for storage benchmarks. Changing this
        /// will affect all benchmarks done.
        /// </summary>
        private class Config : ManualConfig
        {
            public Config()
            {
                AddJob(new Job
                {
                    Environment =
                    {
                        Runtime = CoreRuntime.Core50,
                        Platform = BenchmarkDotNet.Environments.Platform.X64,
                        Jit = Jit.RyuJit
                    },
                    Run =
                    {
                        LaunchCount = 1,
                        WarmupCount = 1,
                        IterationCount = 1,
                        InvocationCount = 1,
                        UnrollFactor = 1
                    },
                    // TODO: Next line is just for testing. Fine tune parameters.
                });

                // Exporters for data
                AddExporter(GetExporters().ToArray());
                // Generate plots using R if %R_HOME% is correctly set
                AddExporter(RPlotExporter.Default);

                AddColumn(StatisticColumn.AllStatistics);

                AddValidator(BaselineValidator.FailOnError);
                AddValidator(JitOptimizationsValidator.FailOnError);

                AddAnalyser(EnvironmentAnalyser.Default);
            }
        }

        public InBenchmark()
        {
            if (DeleteBeforeSuite)
            {
                DeleteStorage();
            }

            if (!DeleteBeforeEachBenchmark)
            {
                Env = new StorageEnvironment(StorageEnvironmentOptions.ForPath(Path));
                GenerateData(Env);
            }
        }

        ~InBenchmark()
        {
            if (!DeleteBeforeEachBenchmark)
            {
                Env.Dispose();
            }

            if (DeleteAfterSuite)
            {
                DeleteStorage();
            }
        }

        private static void GenerateData(StorageEnvironment env)
        {
            using var bsc = new ByteStringContext(SharedMultipleUseFlag.None);
            Slice.From(bsc, "Name", ByteStringType.Immutable, out var nameSlice);
            Slice.From(bsc, "Family", ByteStringType.Immutable, out var familySlice);
            Slice.From(bsc, "Age", ByteStringType.Immutable, out var ageSlice);
            Slice.From(bsc, "Type", ByteStringType.Immutable, out var typeSlice);

            Span<byte> buffer = new byte[256];
            var fields = new IndexFieldsMapping(bsc)
                .AddBinding(0, nameSlice)
                .AddBinding(1, familySlice)
                .AddBinding(2, ageSlice)
                .AddBinding(3, typeSlice);
            using (var writer = new IndexWriter(env, fields))
            {
                {
                    var entryWriter = new IndexEntryWriter(buffer, fields);
                    entryWriter.Write(0, Encoding.UTF8.GetBytes("Arava"));
                    entryWriter.Write(1, Encoding.UTF8.GetBytes("Eini"));
                    entryWriter.Write(2, Encoding.UTF8.GetBytes(12L.ToString()), 12L, 12D);
                    entryWriter.Write(3, Encoding.UTF8.GetBytes("Dog"));
                    entryWriter.Finish(out var entry);

                    writer.Index("dogs/arava", entry);
                }

                {
                    var entryWriter = new IndexEntryWriter(buffer, fields);
                    entryWriter.Write(0, Encoding.UTF8.GetBytes("Phoebe"));
                    entryWriter.Write(1, Encoding.UTF8.GetBytes("Eini"));
                    entryWriter.Write(2, Encoding.UTF8.GetBytes(7.ToString()), 7L, 7D);
                    entryWriter.Write(3, Encoding.UTF8.GetBytes("Dog"));
                    entryWriter.Finish(out var entry);

                    writer.Index("dogs/phoebe", entry);
                }

                for (int i = 0; i < 10_000; i++)
                {
                    var entryWriter = new IndexEntryWriter(buffer, fields);
                    entryWriter.Write(0, Encoding.UTF8.GetBytes("Dog #" + i));
                    entryWriter.Write(1, Encoding.UTF8.GetBytes("families/" + (i % 1024)));
                    var age = i % 17;
                    entryWriter.Write(2, Encoding.UTF8.GetBytes(age.ToString()), age, age);
                    entryWriter.Write(3, Encoding.UTF8.GetBytes("Dog"));
                    entryWriter.Finish(out var entry);

                    writer.Index("dogs/" + i, entry);
                }

                writer.Commit();
            }
        }

        [GlobalSetup]
        public virtual void Setup()
        {
            if (DeleteBeforeEachBenchmark)
            {
                DeleteStorage();
                Env = new StorageEnvironment(StorageEnvironmentOptions.ForPath(Path));
                GenerateData(Env);
            }

            var parser = new QueryParser();
            parser.Init("from Dogs where Type = 'Dog' and (Age = '15' or Age = '16')");
            _queryOrFirst = new QueryDefinition("Name", parser.Parse());

            parser = new QueryParser();
            parser.Init("from Dogs where (Age = '15' or Age = '16') and Type = 'Dog'");
            _queryOrSecond = new QueryDefinition("Name", parser.Parse());

            parser = new QueryParser();
            parser.Init("from Dogs where Type = 'Dog' and Age in ('15', '16')");
            _queryInFirst = new QueryDefinition("Name", parser.Parse());

            parser = new QueryParser();
            parser.Init("from Dogs where Age in ('15', '16') and Type = 'Dog'");
            _queryInSecond = new QueryDefinition("Name", parser.Parse());

            _ids = new long[BufferSize];
        }

        protected QueryDefinition _queryOrFirst;
        protected QueryDefinition _queryOrSecond;
        protected QueryDefinition _queryInFirst;
        protected QueryDefinition _queryInSecond;

        [GlobalCleanup]
        public virtual void Cleanup()
        {
            if (DeleteBeforeEachBenchmark)
            {
                Env.Dispose();
            }
        }

        private void DeleteStorage()
        {
            if (!Directory.Exists(Path))
                return;

            for (var i = 0; i < 10; ++i)
            {
                try
                {
                    Directory.Delete(Path, true);
                    break;
                }
                catch (DirectoryNotFoundException)
                {
                    break;
                }
                catch (Exception)
                {
                    Thread.Sleep(20);
                }
            }
        }

        private long[] _ids;

        [Benchmark]
        public void InFirstRuntimeQuery()
        {
            using var indexSearcher = new IndexSearcher(Env);
            var typeTerm = indexSearcher.TermQuery("Type", "Dog");
            var ageTerm = indexSearcher.InQuery("Age", new() { "15", "16" });
            var query = indexSearcher.And(typeTerm, ageTerm);

            Span<long> ids = _ids;
            while (query.Fill(ids) != 0);
        }

        [Benchmark]
        public void InSecondRuntimeQuery()
        {
            using var indexSearcher = new IndexSearcher(Env);
            var typeTerm = indexSearcher.TermQuery("Type", "Dog");
            var ageTerm = indexSearcher.InQuery("Age", new() { "15", "16" });
            var query = indexSearcher.And(ageTerm, typeTerm);

            Span<long> ids = _ids;
            while (query.Fill(ids) != 0);
        }

        [Benchmark]
        public void OrFirstParserQuery()
        {
            using var indexSearcher = new IndexSearcher(Env);
            var evaluator = new CoraxQueryEvaluator(indexSearcher);
            var query = evaluator.Search(_queryOrFirst.Query.Where);

            Span<long> ids = _ids;
            while (query.Fill(ids) != 0)
                ;
        }

        [Benchmark]
        public void OrSecondParserQuery()
        {
            using var indexSearcher = new IndexSearcher(Env);
            var evaluator = new CoraxQueryEvaluator(indexSearcher);
            var query = evaluator.Search(_queryOrSecond.Query.Where);

            Span<long> ids = _ids;
            while (query.Fill(ids) != 0)
                ;
        }

        [Benchmark]
        public void InFirstParserQuery()
        {
            using var indexSearcher = new IndexSearcher(Env);
            var evaluator = new CoraxQueryEvaluator(indexSearcher);
            var query = evaluator.Search(_queryInFirst.Query.Where);

            Span<long> ids = _ids;
            while (query.Fill(ids) != 0)
                ;
        }

        [Benchmark]
        public void InSecondParserQuery()
        {
            using var indexSearcher = new IndexSearcher(Env);
            var evaluator = new CoraxQueryEvaluator(indexSearcher);
            var query = evaluator.Search(_queryInSecond.Query.Where);

            Span<long> ids = _ids;
            while (query.Fill(ids) != 0)
                ;
        }
    }
}
