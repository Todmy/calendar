<template>
  <div class="sheet">
    <SheetHours :day="day"/>
    <SheetSlots :day="day" :content="content" />
  </div>
</template>

<script>
import SheetHours from './SheetHours';
import SheetSlots from './SheetSlots';

export default {
  name: 'DaySheet',
  components: {
    SheetHours,
    SheetSlots,
  },
  props: {
    day: {
      type: Date,
      default: () => new Date(),
    },
    content: {
      type: Array,
      default: () => ([]),
    },
  },
}
</script>

<style lang="scss" scoped>
  .sheet {
    display: flex;
    overflow: auto;
    height: 90%;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
</style>

