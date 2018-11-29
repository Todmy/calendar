import Month from './Month';

const CALENDAR_TYPES = {
  month: Month,
};

export default {
  functional: true,
  name: 'Calendar',
  props: {
    type: {
      type: String,
      default: 'month',
    },
  },
  render(h, { props }) {
    if (!props.type) {
      return null;
    }

    const Component = CALENDAR_TYPES[props.type];
    return Component ? h(Component, { props }) : null;
  },
};
