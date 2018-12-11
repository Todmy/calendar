<template>
  <div class="time-pannel">
    <div
      v-for="(time, timeIndex) in hours"
      :key="timeIndex"
      class="row"
    >
      <div class="time">{{ time | toTimeFormat }}</div>
    </div>
  </div>
</template>

<script>
import { getDayHours, format } from './date-helpers';

export default {
  name: 'SheetHours',
  props: {
    day: {
      type: Date,
      required: true,
    },
  },
  computed: {
    hours() {
      return getDayHours(this.day)
        .reduce((acc, h) => acc.concat(h, null), [])
    },
  },
  filters: {
    toTimeFormat(value) {
      return value ? format(value, 'h:mm a') : null;
    }
  }
}
</script>


<style lang="scss" scoped>
.time-pannel {
  min-width: 70px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #ccc;
  text-align: center;
}

.row {
  min-height: 2em;
  border-bottom: 1px solid #ccc;

  &:last-of-type {
    border-bottom: none;
  }
}
</style>
