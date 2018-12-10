<template>
  <div
    class="cell"
    :class="{
      'another-month': !options.isThisMonth
    }"
  >{{ options.day }}</div>
</template>

<script>
export default {
  name: 'Cell',
  props: ['options']
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
