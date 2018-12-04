<template>
  <div class="day">
    <Header :day="pointerDate" @dayChange="setPeriod" v-if="withHeader" />
    <Sheet :day="pointerDate" />
  </div>
</template>

<script>
import { startOfMonth, getPointerDate } from '../date-helpers';
import ArrowNavigationMixin from '../eventsNavigation.mixin';
import Header from './Header';
import Sheet from './Sheet';

export default {
  name: 'Day',
  components: {
    Header,
    Sheet,
  },
  mixins: [ArrowNavigationMixin],
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
      pointerDate: this.options.date,
    }
  },
  methods: {
    setPeriod({ offset = 0 }) {
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
  },
};
</script>

<style lang="scss" scoped>
.day {
  height: 100%;
}
</style>
