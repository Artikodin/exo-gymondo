import { DateTime } from 'luxon';

/**
 *
 * getMonthFromToday
 * Get a month according to the today date
 *
 * @param {number} monthIndex - the difference from today month 1 = next month
 *
 * @return {string} - The month chosen from today
 *
 */
const getMonthFromToday = (monthIndex: number): string =>
  DateTime.local().plus({ month: monthIndex }).monthLong;

/**
 *
 * getMonthListFromToday
 * Get a month array set from today date to the number passed in parameter
 *
 * @param {number} monthsLength - number of month you want to return from today
 *
 * @return {string[]} - The month array chosen from today
 *
 */
export const getMonthListFromToday = (monthsLength: number): string[] =>
  [...Array(monthsLength)].map((_, index) => getMonthFromToday(index));
