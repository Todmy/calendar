<template>
  <div class="header">
    <div class="header-nav">
      <div>
        <button class="prev-month" @click="setMonth(-1)"></button>
      </div>
      <div class="title">{{ month.title }}</div>
      <div>
        <button class="next-month" @click="setMonth(+1)"></button>
      </div>
    </div>
    <div class="header-row">
      <div
        v-for="(weekDay, weekDayIndex) in month.weekDays"
        :key="weekDayIndex"
        class="header-col"
      >
        {{ weekDay }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MonthHeader',
  props: {
    month: {
      type: Object,
      required: true,
    },
  },
  methods: {
    setMonth(offset = 0) {
      this.$emit('monthChange', { offset })
    },
  },
}
</script>

<style lang="scss" scoped>

  .header-row {
    display: flex;

    .header-col {
      min-width: calc(100% / 7);
    }
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
