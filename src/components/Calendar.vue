<template>
  <div class="container">
    <div
      v-for="(week, weekIndex) in weeks"
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
import Cell from "./Cell";

export default {
  name: "Calendar",
  components: {
    Cell
  },
  data: () => ({
    weeks: [
      [1, 2, 3, 4, 5, 6, 7],
      [8, 9, 10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19, 20, 21],
      [22, 23, 24, 25, 26, 27, 28],
      [29, 30, 31, 0, 0, 0, 0]
    ]
  })
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

