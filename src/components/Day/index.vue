<template>
  <div class="day">
    <Header
      :pointerDate="pointerDate"
      @periodChange="setPeriod"
      @today="gotoToday"
      @detalization="setDetalization"
      :forDay="true"
    />
    <Sheet :day="pointerDate" />
  </div>
</template>

<script>
import { startOfMonth, getPointerDate } from '../date-helpers';
import ArrowNavigationMixin from '../eventsNavigation.mixin';
import Header from '../Header';
import Sheet from './Sheet';

export default {
  name: 'Day',
  components: {
    Header,
    Sheet,
  },
  mixins: [ArrowNavigationMixin],
  props: {
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
    gotoToday() {
      this.pointerDate = new Date();
    },
    setDetalization(type, date = new Date()) {
      this.$emit('typeChange', { type, typeData: { date } })
    },
  },
};
</script>

<style lang="scss" scoped>
.day {
  height: 100%;
}
</style>
