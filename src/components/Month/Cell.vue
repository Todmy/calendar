<template>
  <div
    class="cell"
    :class="{
      'another-month': !data.isThisMonth
    }"
  >{{ data.day }}</div>
</template>

<script>
export default {
  name: 'MonthCell',
  props: ['data']
};
</script>

<style lang="scss" scoped>
  .cell {
    border: 1px solid black;
    padding: 3px;
    margin: 2px;
    min-height: 50px;

    &.another-month {
      color: gray
    }
  }
</style>
