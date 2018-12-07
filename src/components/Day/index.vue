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
import { isIntervalsIntersect } from '../date-helpers';
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
      content: this.getContent(this.options),
    };
  },
  methods: {
    setDetalization(type, date = new Date()) {
      this.$emit('typeChange', { type, typeData: { date } })
    },
    getContent({ date, content }) {
      return content
        .filter(item => isIntervalsIntersect(date, item.date))
        .map(item => item.payload);
    },
  },
};
</script>

<style lang="scss" scoped>
.day {
  height: 100%;
}
</style>
