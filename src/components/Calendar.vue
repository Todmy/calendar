<template>
  <component
    :is="calendarType"
    @typeChange="toggleType"
    :options="typeData"
  />
</template>

<script>
import Month from './Month';
import Day from './Day';

export default {
  name: 'Calendar',
  components: {
    Month,
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
            start: new Date(2018, 11, 1, 11, 30),
            end: new Date(2018, 11, 1, 12, 0),
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
    toggleType({ type, typeData }) {
      this.calendarType = type;
      this.typeData = Object.assign(typeData, { content: this.options.content });
    }
  }
};
</script>

