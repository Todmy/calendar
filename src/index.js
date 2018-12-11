import Calendar from './components/Calendar';
import calendarFactory from './components/calendarFactory';
import DaySheet from './components/Sheet';
import MonthCell from './components/Cell';
import Header from './components/Header';

const LibraryModule = {
  Calendar,
  calendarFactory,
  Header,
  DaySheet,
  MonthCell,

  // TODO: improve this after refactoring(include extending)
  install(Vue) {
    Vue.component('Calendar', Calendar);
  },
};

export default LibraryModule;
export { Calendar, calendarFactory, Header, DaySheet, MonthCell };
