import React from 'react';

import { Category } from '@exo-gymondo/types';

import MonthFilter from './MonthFilter';
import CategoryFilter from './CategoryFilter';
import { StyledTopBar } from './style';

interface Props {
  onMonthChange: (args: string) => void;
  onCategoryChange: (args: Category[]) => void;
}

/**
 *
 * TopBar
 * Render a top bar component with two filter that allow user to sort the data sent by the server.
 *
 * @param {function} onMonthChange - callback triggered when the month filter has been updated.
 * @param {function} onCategoryChange - callback triggered when the categories filter has been updated.
 *
 * @return {jsx}
 *
 */
const TopBar: React.FC<Props> = ({ onMonthChange, onCategoryChange }) => {
  return (
    <StyledTopBar>
      <MonthFilter onChange={(month) => onMonthChange(month)} />
      <CategoryFilter
        onChange={(e, categories) => onCategoryChange(categories)}
      />
    </StyledTopBar>
  );
};

export default TopBar;
