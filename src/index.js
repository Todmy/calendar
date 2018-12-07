import Calendar from './components/Calendar';
import calendarFactory from './components/calendarFactory';
import DaySheet from './components/Day/Sheet';
import MonthCell from './components/Month/Cell';
import Header from './components/Header';

const LibraryModule = {
  Calendar,
  calendarFactory,
  Header,
  DaySheet,
  MonthCell,

  // TODO: improve this after refactoring
  install(Vue) {
    Vue.component('Calendar', Calendar);
  },
};

export default LibraryModule;
export { Calendar, calendarFactory, Header, DaySheet, MonthCell };
