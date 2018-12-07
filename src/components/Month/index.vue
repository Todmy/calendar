<template>
  <div class="container">
    <Header
      :pointerDate.sync="pointerDate"
      @detalization="setDetalization"
    />
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
          :data="day"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { startOfMonth, getCalendarMonthData, getPointerDate, format } from '../date-helpers'
import Cell from './Cell';
import Header from '../Header';

export default {
  name: 'Month',
  components: {
    Cell,
    Header,
  },
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
      return getCalendarMonthData({ date: this.pointerDate });
    },
    weekDays() {
      const days = this.month[0];
      return days.map(day => format(day.rawDate, 'E'));
    },
  },
  methods: {
    setDetalization(type, date = new Date()) {
      this.$emit('typeChange', { type, typeData: { date } });
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

