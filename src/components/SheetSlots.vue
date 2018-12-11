<template>
  <div class="sheet-slots">
      <div
        v-for="(time, timeIndex) in hours"
        :key="timeIndex"
        class="slot row"
      ></div>
    </div>
</template>

<script>
import { getDayHours } from './date-helpers';

export default {
  name: 'SheetSlots',
  props: {
    day: {
      type: Date,
      required: true,
    },
    content: {
      type: Array,
      default: () => ({}),
    }
  },
  computed: {
    hours() {
      return getDayHours(this.day)
        .reduce((acc, h) => acc.concat(h, null), [])
    },
  },
}
</script>


<style lang="scss" scoped>
.sheet-slots {
  flex: 1;
}

.row {
  min-height: 2em;
  border-bottom: 1px solid #ccc;

  &:last-of-type {
    border-bottom: none;
  }
}

.slot {
  min-width: 300px;
}
</style>
