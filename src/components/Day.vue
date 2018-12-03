<template>
  <div>
    <button @click="$emit('typeChange', { type: 'month', typeData: { date: day } })">to month</button>
  </div>
</template>

<script>
export default {
  name: 'Day',
  props: {
    withHeader: {
      type: Boolean,
      default: true,
    },
    options: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      today: new Date(),
      pointerDate: this.options.date,
    }
  },
};
</script>
