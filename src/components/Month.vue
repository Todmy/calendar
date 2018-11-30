<template>
  <div class="container">
    <div class="header" v-if="withHeader">
      <div class="header-nav">
        <div>
          <button class="prev-month" @click="setMonth(-1)"></button>
        </div>
        <div class="title">{{ month.title }}</div>
        <div>
          <button class="next-month" @click="setMonth(+1)"></button>
        </div>
      </div>
      <div class="header-row">
        <div
          v-for="(weekDay, weekDayIndex) in month.weekDays"
          :key="weekDayIndex"
          class="header-col"
        >
          {{ weekDay }}
        </div>
      </div>
    </div>
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
        <Cell :data="day"/>
      </div>

    </div>
  </div>
</template>

<script>
import { getCalendarMonthData, getPointerDate } from './date-helpers.js'
import Cell from './MonthCell';

export default {
  name: 'Calendar',
  components: {
    Cell
  },
  data() {
    return {
      today: new Date(),
      pointerDate: this.date,
    }
  },
  props: {
    withHeader: {
      type: Boolean,
      default: true,
    },
    date: {
      type: Date,
      default: () => new Date(),
    },
  },
  computed: {
    month() {
      return getCalendarMonthData({ date: this.pointerDate });
    },
  },
  methods: {
    setMonth(offset = 0) {
      this.pointerDate = getPointerDate(this.pointerDate, offset);
    },
    arrowListener({ code }) {
      if (!['ArrowRight', 'ArrowLeft'].includes(code)) return;
      const monthOffset = code === 'ArrowRight' ? +1 : -1;
      this.setMonth(monthOffset);
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

  .row, .header-row {
    display: flex;

    .col, .header-col {
      min-width: calc(100% / 7);
    }
  }

  .header-nav {
    display: flex;
    justify-content: space-between;

    .next-month, .prev-month {
      border: none;
      background-color: #eee;
      border-radius: 5px;

      &:after {
        font-weight: 700;
        font-size: 200%;
      }
    }

    .next-month:after {
      content: "\203A";
    }

    .prev-month:after {
      content: "\2039";
    }
  }
}
</style>

