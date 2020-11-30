/**
 *
 * getPages
 * Return an array of incrementing number according the current page.
 * The current page is placed in the middle of the incrementation
 *
 * @param {number} currentPage - the current page displayed to the user.
 * @param {number} paginationRange - increase the range of the incremental array
 * @param {number} totalPage - the total page
 *
 * @return {number[]} - Return an array of number incremented page
 *
 */
export const getPages = (
  currentPage: number,
  paginationRange: number,
  totalPage: number
): number[] => {
  const lowerRange =
    currentPage - paginationRange < 1 ? 1 : currentPage - paginationRange;
  const higherRange =
    currentPage + paginationRange > totalPage
      ? totalPage
      : currentPage + paginationRange;

  return incrementalRange(lowerRange, higherRange);
};

/**
 *
 * incrementalRange
 * Return an array of number incrementing in the selected range
 *
 * @param {number} start - the first value of the array range.
 * @param {number} end - the last value of the array range.
 *
 * @return {number[]} - Return an array of number between two range
 *
 */
const incrementalRange = (start: number, end: number): number[] => {
  return [...Array(end - start + 1)].map((_, index) => start + index);
};

/**
 *
 * getTotalPages
 * Comput the total page depending on the total workout and the workout displayed per page.
 *
 * @param {number} totalWorkouts - the number of total workout sent by the database.
 *
 * @return {number} - Return the total page
 *
 */
export const getTotalPages = (totalWorkouts: number): number => {
  const workoutPerPage = 20;
  const totalPages = Math.floor(totalWorkouts / workoutPerPage);
  const remainWorkouts = totalWorkouts % workoutPerPage;

  const isWorkoutsRemainOnPage = remainWorkouts !== 0;

  return isWorkoutsRemainOnPage ? totalPages + 1 : totalPages;
};
