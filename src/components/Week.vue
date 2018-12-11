<template>
  <div class="week">
    <SheetHours class="sheet-hours" :day="week[0]" />
    <div class="body">
      <div
        class="day"
        v-for="(day, index) of week"
        :key="index"
      >
        <div class="header">
          {{ weekDay(day) }}
        </div>
        <SheetSlots
          class="sheet-slots"
          :day="day"
          :content="content"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { getWeekDays, isIntervalsIntersect, format } from './date-helpers';
import SheetHours from './SheetHours';
import SheetSlots from './SheetSlots';

export default {
  name: 'Week',
  components: {
    SheetHours,
    SheetSlots,
  },
  props: {
    options: {
      type: Object,
      required: true,
    },
  },
  computed: {
    pointerDate() {
      return this.options.date;
    },
    week() {
      return getWeekDays(this.options.date);
    },
    content() {
      return this.options.content
        .filter(item => isIntervalsIntersect(this.pointerDate, item.date))
        .map(item => item.payload);
    },
  },
  methods: {
    weekDay(day) {
      return format(day, 'E, dd');
    },
  },
};
</script>

<style lang="scss" scoped>
.week {
  display: flex;

  .header {
    line-height: 1.2em;
  }

  .body {
    display: flex;
    overflow: auto;
    width: 100%;
  }

  .day {
    height: 100%;
  }

  .sheet-hours {
    margin-top: 1.2em;
    border: 1px solid #ccc;
    width: 70px;
  }

  .sheet-slots {
    border: 1px solid #ccc;
    border-left: none;
  }
}
</style>
