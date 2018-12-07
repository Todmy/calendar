<template>
  <div class="header">
    <div class="header-nav">
      <div class="title">{{ pointerDate | formatedTitle(forDay) }}</div>
      <Navigation v-on="$listeners" />
      <DetailPrecision v-on="$listeners" />
    </div>
  </div>
</template>

<script>
import { format } from '../date-helpers';
import Navigation from './HeaderNavigationBlock';
import DetailPrecision from './DetailPrecision';

export default {
  name: 'Header',
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
  components: {
    Navigation,
    DetailPrecision,
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
