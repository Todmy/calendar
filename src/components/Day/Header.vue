<template>
  <div class="header">
    <div class="header-nav">
      <div>
        <button
          class="prev-month"
          @click="setDay(-1)"
        ></button>
      </div>
      <div class="title" @click="setDay()">{{ day | formatedTitle }}</div>
      <div>
        <button
          class="next-month"
          @click="setDay(+1)"
        ></button>
      </div>
    </div>
  </div>
</template>

<script>
import { format } from '../date-helpers';

export default {
  name: 'DayHeader',
  props: {
    day: {
      type: Date,
      required: true,
    },
  },
  methods: {
    setDay(offset = 0) {
      this.$emit('dayChange', { offset })
    },
  },
  filters: {
    formatedTitle(value) {
      return format(value, 'EEEE, MMMM dd, uuuu')
    },
  },
}
</script>

<style lang="scss" scoped>
  .header {
    margin-bottom: 10px;
  }

  .header-nav {
    display: flex;
    justify-content: space-between;

    .next-month, .prev-month {
      border: none;
      background-color: #eee;
      border-radius: 5px;

      &:after {
        font-weight: 700;
        font-size: 200%;
      }
    }

    .next-month:after {
      content: "\203A";
    }

    .prev-month:after {
      content: "\2039";
    }
  }
</style>
