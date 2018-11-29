<template>
  <div class="cell">{{ data }}</div>
</template>

<script>
export default {
  name: "Cell",
  props: ["data"]
};
</script>

<style lang="scss" scoped>
  .cell {
    border: 1px solid black;
    padding: 3px;
    margin: 2px;
  }
</style>
