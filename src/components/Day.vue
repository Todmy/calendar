<template>
  <div class="day">
    <Header :day="pointerDate" @dayChange="setDate" v-if="withHeader" />
    <DaySheet :day="pointerDate" />
  </div>
</template>

<script>
import { startOfMonth, getCalendarMonthData, getPointerDate } from './date-helpers'
import Header from './DayHeader'
import DaySheet from './DaySheet'

export default {
  name: 'Day',
  components: {
    Header,
    DaySheet,
  },
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
  methods: {
    setDate({ offset = 0 }) {
      if (offset !== 0) {
        this.pointerDate = getPointerDate({
          pivot: this.pointerDate,
          offset,
          range: 'day'
        });
        return;
      }

      this.$emit('typeChange', {
        type: 'month',
        typeData: { date: this.pointerDate }
      })
    },
    arrowListener({ code }) {
      if (!['ArrowRight', 'ArrowLeft'].includes(code)) return;
      const offset = code === 'ArrowRight' ? +1 : -1;
      this.setDate({ offset });
    },
  },
  mounted() {
    window.addEventListener('keyup', this.arrowListener)
  },
  destroyed() {
    window.removeEventListener('keyup', this.arrowListener)
  },
};
</script>

<style lang="scss" scoped>
.day {
  height: 100%;
}
</style>
