import {
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
  subMonths,
  addMonths,
} from 'date-fns';
import { chain } from 'lodash';

function getCalendarMonthData(options = {}) {
  const { date = new Date() } = options;
  const start = startOfMonth(date);
  const end = endOfMonth(date);
  const allDays = eachDayOfInterval({ start, end });
  const formatedWeeks = chain(allDays)
    .groupBy(date => getWeek(date, options))
    .toPairs()
    .sortBy(0)
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
    fullDate: dateData.date,
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
  return days.map(day => format(day.fullDate, 'E'));
}

function getMonthTitle(month) {
  const monthDay = [].concat(...month).find(date => date.isThisMonth);
  return format(monthDay.fullDate, 'MMMM, uuuu');
}

function getPointerDate(date, offset) {
  const absOffset = Math.abs(offset);
  const monthFn = offset < 0 ? subMonths : addMonths;
  return monthFn(date, absOffset);
}

export { getCalendarMonthData, getPointerDate };
