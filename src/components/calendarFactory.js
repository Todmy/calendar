import Calendar from './Calendar';
import Day from './Day';
import DefaultDaySheet from './Sheet';
import Month from './Month';
import DefaultHeader from './Header';
import DefaultMonthCell from './Cell';

function init(config = {}) {
  const {
    Header = DefaultHeader,
    DaySheet = DefaultDaySheet,
    MonthCell = DefaultMonthCell,
  } = config;

  const ConfiguredDay = Object.assign({}, Day, {
    components: {
      Sheet: DaySheet,
    },
  });
  const ConfiguredMonth = Object.assign({}, Month, {
    components: {
      Cell: MonthCell,
    },
  });
  const ConfiguredCalendar = Object.assign({}, Calendar, {
    components: {
      Header: Header,
      Month: ConfiguredMonth,
      Day: ConfiguredDay,
    },
  });

  return ConfiguredCalendar;
}

export default { init };
