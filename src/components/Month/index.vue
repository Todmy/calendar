<template>
  <div class="container">
    <div class="header row">
      <div
        v-for="(weekDay, weekDayIndex) in weekDays"
        :key="weekDayIndex"
        class="col"
      >
        {{ weekDay }}
      </div>
    </div>
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
          @click.native="setDetalization('day', day.rawDate)"
          :options="day"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { startOfMonth, getCalendarMonthData, format, isIntervalsIntersect } from '../date-helpers'
import Cell from './Cell';

export default {
  name: 'Month',
  components: { Cell },
  props: {
    options: {
      type: Object,
      default: () => ({ date: startOfMonth(new Date()) }),
    },
  },
  data() {
    return {
      pointerDate: this.options.date,
    }
  },
  computed: {
    month() {
      return getCalendarMonthData({ date: this.pointerDate })
        .map(week => week.map(this.mergeWithContent));
    },
    weekDays() {
      const days = this.month[0];
      return days.map(day => format(day.rawDate, 'E'));
    },
  },
  methods: {
    setDetalization(type, date = new Date()) {
      this.$emit('typeChange', { type, typeData: { date } });
    },
    mergeWithContent(day) {
      const payload = this.options.content
        .filter(item => isIntervalsIntersect(day.rawDate, item.date))
        .map(item => item.payload);
      return Object.assign(day, { payload })
    }
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

  .header .col {
    text-align: center;
  }
}
</style>

