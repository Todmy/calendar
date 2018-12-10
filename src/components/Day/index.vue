<template>
  <Sheet
    class="day"
    :day="pointerDate"
    :content="content"
  />
</template>

<script>
import { isIntervalsIntersect } from '../date-helpers';
import Sheet from './Sheet';

export default {
  name: 'Day',
  components: { Sheet },
  props: {
    options: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      pointerDate: this.options.date,
    };
  },
  computed: {
    content() {
      return this.options.content
        .filter(item => isIntervalsIntersect(this.pointerDate, item.date))
        .map(item => item.payload);
    }
  },
};
</script>

<style lang="scss" scoped>
.day {
  height: 100%;
}
</style>
