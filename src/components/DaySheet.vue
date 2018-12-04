<template>
  <div class="grid">
    <div
      v-for="(time, timeIndex) in timerange"
      :key="timeIndex"
      class="grid-item"
    >
      <div class="time">
        <span>{{ time | toTimeFormat }}</span>
      </div>
      <div class="slot"></div>
    </div>
  </div>
</template>

<script>
import { getDayData, format } from './date-helpers'
export default {
  name: 'DaySheet',
  props: {
    day: {
      type: Date,
      // TODO: make it required if it will be importantly to know exact date
      default: () => new Date(),
    },
  },
  computed: {
    timerange() {
      return getDayData(this.day)
    },
  },
  filters: {
    toTimeFormat(value) {
      return format(value, 'h:m a');
    }
  }
}
</script>

<style lang="scss" scoped>
  .grid {
    display: flex;
    flex-direction: column;
    overflow: auto;
    height: 90%;
    border: 1px solid #ccc;
    border-radius: 5px;

    .grid-item:first-child .time span {
      color: transparent;
    }

    .grid-item:last-child .slot {
      border: none
    }

    .grid-item {
      min-height: 2em;
      display: flex;
      width: 100%;

      .time {
        flex-basis: 5%;
        min-width: 65px;
        margin-top: -0.6em;
        border-right: 1px solid #ccc;
        text-align: right;
        padding-right: 5px;
      }

      .slot {
        flex: 1;
        border-bottom: 1px solid #ccc;
      }
    }
  }
</style>

