<template>
  <div class="navigation">
    <button class="nav-button prev-month" @click="goto(-1)"></button>
    <button class="nav-button" @click="$emit('today')">Today</button>
    <button class="nav-button next-month" @click="goto(+1)"></button>
  </div>
</template>

<script>
export default {
  name: 'MonthHeaderNavigation',
  methods: {
    goto(offset = 0) {
      this.$emit('periodChange', { offset })
    },
  }
}
</script>

<style lang="scss" scoped>
  .next-month, .prev-month {
    border-radius: 5px;

    &:after {
      font-weight: 700;
    }
  }

  .next-month:after {
    content: "\203A";
  }

  .prev-month:after {
    content: "\2039";
  }
</style>

