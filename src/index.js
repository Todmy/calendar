import Calendar from './components/Calendar';

const LibraryModule = {
  Calendar,

  install(Vue) {
    Vue.component('Calendar', Calendar);
  }
};

export default LibraryModule;
export { Calendar };
