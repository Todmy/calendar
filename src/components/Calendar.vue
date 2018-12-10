<template>
  <div>
    <Header
      :type="calendarType"
      :pointerDate.sync="options.date"
      @detalization="toggleType"
    />

    <component
      :is="calendarType"
      @typeChange="toggleType"
      :options="typeData"
    />
  </div>
</template>

<script>
import Header from './Header';
import Month from './Month';
import Week from './Week';
import Day from './Day';

export default {
  name: 'Calendar',
  components: {
    Header,
    Month,
    Week,
    Day,
  },
  props: {
    type: {
      type: String,
      default: 'month',
    },
    options: {
      type: Object,
      default: () => ({
        date: new Date(),
        content: [{
          date: {
            start: new Date(2018, 11, 10, 11, 30),
            end: new Date(2018, 11, 10, 12, 0),
          },
          payload: {
            id: 1,
            name: 'hello world',
            user: {
              id: 2,
              name: 'John Doe',
              age: 42,
            }
          }
        }]
      })
    },
  },
  data() {
    return {
      calendarType: this.type,
      typeData: this.options,
    }
  },
  methods: {
    toggleType({ type, typeData = { date: new Date() } }) {
      this.calendarType = type;
      this.typeData = Object.assign(typeData, { content: this.options.content });
    },
  }
};
</script>

