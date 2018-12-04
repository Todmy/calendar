<template>
  <div class="container">
    <Header :month="month" @monthChange="setPeriod" v-if="withHeader" />
    <div
      v-for="(week, weekIndex) in month"
      :key="weekIndex"
      class="row"
    >
      <div
        v-for="(day, dayIndex) in week"
        :key="dayIndex"
        class="col"
      >
        <Cell
          @click.native="$emit('typeChange', { type: 'day', typeData: { date: day.rawDate } })"
          :data="day"
        />
      </div>

    </div>
  </div>
</template>

<script>
import { startOfMonth, getCalendarMonthData, getPointerDate } from '../date-helpers'
import ArrowNavigationMixin from '../eventsNavigation.mixin'
import Cell from './Cell';
import Header from './Header';

export default {
  name: 'Month',
  components: {
    Cell,
    Header,
  },
  mixins: [ArrowNavigationMixin],
  data() {
    return {
      pointerDate: this.options.date || startOfMonth(new Date()),
    }
  },
  props: {
    withHeader: {
      type: Boolean,
      default: true,
    },
    options: {
      type: Object,
      default: () => ({ date: startOfMonth(new Date()) }),
    },
  },
  computed: {
    month() {
      return getCalendarMonthData({ date: this.pointerDate });
    },
  },
  methods: {
    setPeriod({ offset = 0 }) {
      this.pointerDate = getPointerDate({ pivot: this.pointerDate, offset, range: 'month' });
    },
  },
};
</script>

<style lang="scss" scoped>
$cols-per-row: 7;

.container {
  display: flex;
  flex-direction: column;

  .row {
    display: flex;

    .col {
      min-width: calc(100% / 7);
    }
  }
}
</style>

