using System;

namespace Raven.Abstractions.TimeSeries.Notifications
{
    public class KeyChange : TimeSeriesChange
    {
        public string Type { get; set; }

        public string Key { get; set; }

        public TimeSeriesChangeAction Action { get; set; }

        public DateTimeOffset At { get; set; }
        
        public double[] Values { get; set; }

        public DateTimeOffset Start { get; set; }

        public DateTimeOffset End { get; set; }
    }

    public class RangeKeyChange : KeyChange
    {
        
    }

    public enum TimeSeriesChangeAction
    {
        None,
        Append,
        Delete,
        DeleteInRange
    }
}
