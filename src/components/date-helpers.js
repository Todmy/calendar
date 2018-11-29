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
} from 'date-fns';
import { chain } from 'lodash';

function getCalendarMonth(options = {}) {
  const { date = new Date() } = options;
  const start = startOfMonth(date);
  const end = endOfMonth(date);
  const allDays = eachDayOfInterval({ start, end });
  return chain(allDays)
    .groupBy(date => getWeek(date, options))
    .toPairs()
    .sortBy(0)
    .map(1)
    .map(weekRecord => weekRecord.map(date => ({ date, isThisMonth: true })))
    .map(fillEmptyDays)
    .map(formatDates)
    .value();
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
    const missedDays = eachDayOfInterval({ start, end })
      .map(date => ({ date, isThisMonth: false }));

    return [].concat(...missedDays, ...week);
  } else {
    const lastDay = week[week.length - 1];
    const start = addDays(lastDay.date, 1);
    const end = addDays(lastDay.date, missedDaysNumber);
    const missedDays = eachDayOfInterval({ start, end })
      .map(date => ({ date, isThisMonth: false }));

    return [].concat(...week, ...missedDays);
  }
}

function formatDates(week) {
  return week.map(dateData => ({
    day: getDate(dateData.date),
    month: getMonth(dateData.date),
    year: getYear(dateData.date),
    isThisMonth: dateData.isThisMonth,
  }));
}

export { getCalendarMonth as getMonth };
