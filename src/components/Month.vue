<template>
  <div class="container">
    <Header :month="month" @monthChange="setMonth" v-if="withHeader" />
    <div
      v-for="(week, weekIndex) in month.weeks"
      :key="weekIndex"
      class="row"
    >
      <div
        v-for="(day, dayIndex) in week"
        :key="dayIndex"
        class="col"
      >
        <Cell
          @click.native="$emit('typeChange', { type: 'day', typeData: { date: day.fullDate } })"
          :data="day"
        />
      </div>

    </div>
  </div>
</template>

<script>
import { startOfMonth, getCalendarMonthData, getPointerDate } from './date-helpers.js'
import Cell from './MonthCell';
import Header from './MonthHeader';

export default {
  name: 'Month',
  components: {
    Cell,
    Header,
  },
  data() {
    return {
      today: new Date(),
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
      default: () => ({
        date: startOfMonth(new Date())
      }),
    },
  },
  computed: {
    month() {
      return getCalendarMonthData({ date: this.pointerDate });
    },
  },
  methods: {
    setMonth({ offset = 0 }) {
      this.pointerDate = getPointerDate(this.pointerDate, offset);
    },
    arrowListener({ code }) {
      if (!['ArrowRight', 'ArrowLeft'].includes(code)) return;
      const offset = code === 'ArrowRight' ? +1 : -1;
      this.setMonth({ offset });
    },
  },
  mounted() {
    window.addEventListener('keyup', this.arrowListener)
  },
  destroyed() {
    window.removeEventListener('keyup', this.arrowListener)
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

