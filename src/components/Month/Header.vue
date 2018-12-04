<template>
  <div class="header">
    <div class="header-nav">
      <div>
        <button class="prev-month" @click="setMonth(-1)"></button>
      </div>
      <div class="title">{{ month | formatedTitle }}</div>
      <div>
        <button class="next-month" @click="setMonth(+1)"></button>
      </div>
    </div>
    <div class="header-row">
      <div
        v-for="(weekDay, weekDayIndex) in weekDays"
        :key="weekDayIndex"
        class="header-col"
      >
        {{ weekDay }}
      </div>
    </div>
  </div>
</template>

<script>
import { format } from '../date-helpers';

export default {
  name: 'MonthHeader',
  props: {
    month: {
      type: Array,
      required: true,
    },
  },
  filters: {
    formatedTitle(value) {
      const monthDay = value[0].find(date => date.isThisMonth);
      return format(monthDay.rawDate, 'MMMM, uuuu');
    },
  },
  computed: {
    weekDays() {
      const days = this.month[0];
      return days.map(day => format(day.rawDate, 'E'));
    },
  },
  methods: {
    setMonth(offset = 0) {
      this.$emit('monthChange', { offset })
    },
  },
}
</script>

<style lang="scss" scoped>

  .header-row {
    display: flex;

    .header-col {
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
</style>
