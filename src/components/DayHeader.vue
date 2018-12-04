<template>
  <div class="header">
    <div class="header-nav">
      <div>
        <button class="prev-month" @click="setDay(-1)"></button>
      </div>
      <div class="title" @click="setDay()">{{ dayTitle }}</div>
      <div>
        <button class="next-month" @click="setDay(+1)"></button>
      </div>
    </div>
  </div>
</template>

<script>
import { getDayTitle } from './date-helpers';

export default {
  name: 'DayHeader',
  props: {
    day: {
      type: Date,
      required: true,
    },
  },
  computed: {
    dayTitle() {
      return getDayTitle(this.day);
    }
  },
  methods: {
    setDay(offset = 0) {
      this.$emit('dayChange', { offset })
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
