<template>
  <div class="container">
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
        <Cell :data="day"/>
      </div>

    </div>
  </div>
</template>

<script>
import { getMonth } from './date-helpers.js'
import Cell from './Cell';

export default {
  name: 'Calendar',
  components: {
    Cell
  },
  computed: {
    currentMonth() {
      return
    },
    month() {
      return getMonth();
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
}
</style>

