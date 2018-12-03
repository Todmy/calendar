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
    options: Object,
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
      this.typeData = typeData;
    }
  }
};
</script>

