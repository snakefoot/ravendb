﻿using FastTests;
using Raven.Client.Exceptions;
using SlowTests.Core.Utils.Entities;
using Voron.Impl.Paging;
using Xunit;

namespace SlowTests.Issues
{
    public class RavenDB_13163 : RavenTestBase
    {
        [Fact]
        public void ShouldThrowOnDocumentIdTooBig()
        {
            using (var store = GetDocumentStore())
            {
                using (var session = store.OpenSession())
                {
                    var longId = new string('z', AbstractPager.MaxKeySize);

                    session.Store(new User(), longId);

                    // should not throw
                    session.SaveChanges();
                }


                using (var session = store.OpenSession())
                {
                    var longerId = new string('z', AbstractPager.MaxKeySize + 1);

                    session.Store(new User(), longerId);

                    var ex = Assert.Throws<RavenException>(() => session.SaveChanges());

                    Assert.Contains($"Document ID cannot exceed {AbstractPager.MaxKeySize} bytes", ex.Message);
                }

            }

        }

        [Fact]
        public void ShouldThrowOnCounterNameTooBig()
        {
            using (var store = GetDocumentStore())
            {
                var longName = new string('z', AbstractPager.MaxKeySize);

                using (var session = store.OpenSession())
                {
                    session.Store(new User(), "users/1");
                    session.CountersFor("users/1").Increment(longName);

                    // should not throw
                    session.SaveChanges();
                }

                var longerName = new string('z', AbstractPager.MaxKeySize + 1);

                using (var session = store.OpenSession())
                {
                    session.CountersFor("users/1").Increment(longerName);

                    var ex = Assert.Throws<RavenException>(() => session.SaveChanges());

                    Assert.Contains($"Counter name cannot exceed {AbstractPager.MaxKeySize} bytes", ex.Message);
                }

            }

        }
    }
}