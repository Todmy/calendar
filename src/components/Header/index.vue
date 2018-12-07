<template>
  <div class="header">
    <div class="header-nav">
      <div class="title">{{ pointerDate | formatedTitle(forDay) }}</div>
      <Navigation @periodChange="setPeriod" />
      <DetailPrecision v-on="$listeners" />
    </div>
  </div>
</template>

<script>
import { format, getPointerDate } from '../date-helpers';
import Navigation from './HeaderNavigationBlock';
import DetailPrecision from './DetailPrecision';

export default {
  name: 'Header',
  components: {
    Navigation,
    DetailPrecision,
  },
  props: {
    pointerDate: {
      type: Date,
      required: true,
    },
    forDay: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    setPeriod(offset) {
      let date = new Date();
      if (offset !== 0) {
        const range = this.forDay ? 'day' : 'month';
        date = getPointerDate({ pivot: this.pointerDate, offset, range })
      }

      this.$emit('update:pointerDate', date)
    }
  },
  filters: {
    formatedTitle(value, isForDay) {
      const formatCode = isForDay ? 'dd MMMM uuuu' : 'MMMM uuuu';
      return format(value, formatCode);
    },
  },
}
</script>

<style lang="scss" scoped>
  .header-nav {
    display: flex;
    justify-content: space-between;
  }
</style>
