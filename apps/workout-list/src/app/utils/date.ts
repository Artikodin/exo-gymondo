import { DateTime } from 'luxon';

/**
 *
 * convertISOToString
 *
 * Convert ISO format to a more readable one.
 *
 * @param {Date} ISODate - date as a ISODate format
 *
 * @return {string} - date as a string format
 *
 */
export const convertISOToString = (ISODate: Date): string =>
  DateTime.fromISO(ISODate).toLocaleString(DateTime.DATE_FULL);

/**
 *
 * convertISOToISODate
 *
 * Convert ISO format to an ISO date.
 *
 * @param {Date} ISODate - date as a ISODate format
 *
 * @return {string} - date as a ISO format
 *
 */
export const convertISOToISODate = (ISODate: Date): string =>
  DateTime.fromISO(ISODate).toISODate();

/**
 *
 * convertMonthStringToMongoFormat
 *
 * Convert month string to mongo db month value. The values start at 0.
 * MongoDB january = 0
 *
 * @param {string} month - month as a string
 *
 * @return {number} - month as a mongoDB format
 *
 */
export const convertMonthStringToMongoFormat = (month: string): string =>
  String(DateTime.fromFormat(month, 'LLLL').toFormat('L') - 1);
