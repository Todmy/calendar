import Calendar from './components/Calendar';
import calendarFactory from './components/calendarFactory';
import DayHeader from './components/Day/Header';
import DaySheet from './components/Day/Sheet';
import MonthCell from './components/Month/Cell';
import MonthHeader from './components/Month/Header';

const LibraryModule = {
  Calendar,
  calendarFactory,
  DayHeader,
  DaySheet,
  MonthCell,
  MonthHeader,

  // TODO: improve this after refactoring
  install(Vue) {
    Vue.component('Calendar', Calendar);
  },
};

export default LibraryModule;
export {
  Calendar,
  calendarFactory,
  DayHeader,
  DaySheet,
  MonthCell,
  MonthHeader,
};
