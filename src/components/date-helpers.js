import dfns, {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  getWeek,
  subDays,
  addDays,
  getDate,
  getMonth,
  getYear,
  format,
  startOfDay,
  setHours,
} from 'date-fns';
import { chain } from 'lodash';

function getCalendarMonthData(options = {}) {
  const { date = new Date() } = options;
  const start = startOfMonth(date);
  const end = endOfMonth(date);
  const allDays = eachDayOfInterval({ start, end });
  const formatedWeeks = chain(allDays)
    .groupBy(date => getWeek(date))
    .toPairs()
    // For meet edge cases of the end of a year
    .sortBy(([key]) => (key === '1' ? 100 : +key))
    .map(1)
    .map(weekRecord => weekRecord.map(date => ({ date, isThisMonth: true })))
    .map(fillEmptyDays)
    .map(formatDates)
    .value();

  return formMonthData(formatedWeeks);
}

function fillEmptyDays(week, index) {
  if (week.length === 7) {
    return week;
  }

  const missedDaysNumber = 7 - week.length;

  if (index === 0) {
    const firstDay = week[0];
    const start = subDays(firstDay.date, missedDaysNumber);
    const end = subDays(firstDay.date, 1);
    const missedDays = eachDayOfInterval({ start, end }).map(date => ({
      date,
      isThisMonth: false,
    }));

    return [].concat(...missedDays, ...week);
  } else {
    const lastDay = week[week.length - 1];
    const start = addDays(lastDay.date, 1);
    const end = addDays(lastDay.date, missedDaysNumber);
    const missedDays = eachDayOfInterval({ start, end }).map(date => ({
      date,
      isThisMonth: false,
    }));

    return [].concat(...week, ...missedDays);
  }
}

function formatDates(week) {
  return week.map(dateData => ({
    rawDate: dateData.date,
    day: getDate(dateData.date),
    month: getMonth(dateData.date),
    year: getYear(dateData.date),
    isThisMonth: dateData.isThisMonth,
  }));
}

function formMonthData(weeks) {
  return {
    title: getMonthTitle(weeks),
    weekDays: transformToWeekDays(weeks),
    weeks: weeks,
  };
}

function transformToWeekDays(weeks) {
  const days = weeks[0];
  return days.map(day => format(day.rawDate, 'E'));
}

function getMonthTitle(month) {
  const monthDay = [].concat(...month).find(date => date.isThisMonth);
  return format(monthDay.rawDate, 'MMMM, uuuu');
}

function getDayTitle(day) {
  return format(day, 'EEEE, MMMM dd, uuuu');
}

function getPointerDate({ pivot, offset, range = 'month' }) {
  const absOffset = Math.abs(offset);
  const fnSufix = range[0].toUpperCase() + range.slice(1) + 's';
  const fnPrefix = offset < 0 ? 'sub' : 'add';
  return dfns[`${fnPrefix}${fnSufix}`](pivot, absOffset);
}

function getDayData(date) {
  const numberOfHours = 24;

  return [...new Array(numberOfHours)]
    .map(() => startOfDay(date))
    .map((el, index) => setHours(el, index));
}

export {
  startOfMonth,
  getCalendarMonthData,
  getPointerDate,
  getDayTitle,
  getDayData,
  format,
};
