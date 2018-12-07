import Calendar from './Calendar';
import Day from './Day';
import DefaultDayHeader from './Day/Header';
import DefaultDaySheet from './Day/Sheet';
import Month from './Month';
import DefaultMonthHeader from './Month/Header';
import DefaultMonthCell from './Month/Cell';

function init(config = {}) {
  const {
    DayHeader = DefaultDayHeader,
    DaySheet = DefaultDaySheet,
    MonthHeader = DefaultMonthHeader,
    MonthCell = DefaultMonthCell,
  } = config;

  const ConfiguredDay = Object.assign({}, Day, {
    components: {
      Header: DayHeader,
      Sheet: DaySheet,
    },
  });
  const ConfiguredMonth = Object.assign({}, Month, {
    components: {
      Header: MonthHeader,
      Cell: MonthCell,
    },
  });
  const ConfiguredCalendar = Object.assign({}, Calendar, {
    components: {
      Day: ConfiguredDay,
      Month: ConfiguredMonth,
    },
  });

  return ConfiguredCalendar;
}

export default { init };
