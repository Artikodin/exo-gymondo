import React, { useEffect } from 'react';
import { NavigateNext, NavigateBefore } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

import { StyledPagination, PaginationItem, Navigation } from './style';
import { getPages, getTotalPages } from './helpers';

interface Props {
  totalWorkouts: number;
  currentPage: number;
  paginationRange?: number;
}

/**
 *
 * Pagination
 * Render a pagination component. This component help the user to navigate through different page.
 * It display the total workout, it show the current page according to the total of page.
 *
 * @param {number} totalWorkouts - the number of total workout sent by the database.
 * @param {number} currentPage - the current page displayed to the user.
 * @param {number?} paginationRange - default: 2 - it used to display previous and next pages depending the current one.
 *
 * @return {jsx}
 *
 */
const Pagination: React.FC<Props> = ({
  totalWorkouts,
  currentPage,
  paginationRange = 2,
}) => {
  const history = useHistory();
  useEffect(() => {
    if (currentPage > getTotalPages(totalWorkouts))
      history.push(`/${getTotalPages(totalWorkouts)}`);
  }, [totalWorkouts, currentPage, history]);

  const previousPage = currentPage === 1 ? 1 : currentPage - 1;
  const nextPage =
    currentPage === getTotalPages(totalWorkouts)
      ? getTotalPages(totalWorkouts)
      : currentPage + 1;

  return (
    <StyledPagination>
      <Navigation>
        <PaginationItem to={`/${previousPage}`}>
          <NavigateBefore />
        </PaginationItem>
        {getPages(
          currentPage,
          paginationRange,
          getTotalPages(totalWorkouts)
        ).map((page) => (
          <PaginationItem to={`/${page}`} key={page}>
            {page}
          </PaginationItem>
        ))}
        <PaginationItem to={`/${nextPage}`}>
          <NavigateNext />
        </PaginationItem>
      </Navigation>
      <div>
        {currentPage} / {getTotalPages(totalWorkouts)} pages | {totalWorkouts}{' '}
        workouts
      </div>
    </StyledPagination>
  );
};

export default Pagination;
