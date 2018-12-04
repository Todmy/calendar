<template>
  <div
    class="cell"
    :class="{
      'grayed': !data.isThisMonth
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

    &.grayed {
      color: gray
    }
  }
</style>
