export default {
  methods: {
    arrowListener({ code }) {
      if (!['ArrowRight', 'ArrowLeft'].includes(code)) return;
      const offset = code === 'ArrowRight' ? +1 : -1;
      this.setPeriod({ offset });
    },
  },
  mounted() {
    window.addEventListener('keyup', this.arrowListener)
  },
  destroyed() {
    window.removeEventListener('keyup', this.arrowListener)
  },
};
