<template>
  <div class="day">
    <Header
      :pointerDate.sync="pointerDate"
      @detalization="setDetalization"
      :forDay="true"
    />
    <Sheet :day="pointerDate" />
  </div>
</template>

<script>
import { getPointerDate } from '../date-helpers';
import Header from '../Header';
import Sheet from './Sheet';

export default {
  name: 'Day',
  components: {
    Header,
    Sheet,
  },
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
