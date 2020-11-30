import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import { getMonthListFromToday } from './helpers';
import { StyledFormControl } from './style';

interface Props {
  onChange: (args: string) => void;
}

/**
 *
 * MonthFilter
 * Allow the user to filter datas recieved by the server according to the selected month
 *
 * @param {function} onChange - callback triggered when the month filter has been updated.
 *
 * @return {jsx}
 *
 */
const MonthFilter: React.FC<Props> = ({ onChange }) => {
  const [month, setMonth] = React.useState('');

  const handleChange = (event: React.ChangeEvent<{ value: string }>) => {
    setMonth(event.target.value);
    onChange(event.target.value);
  };

  return (
    <StyledFormControl data-test-id="month-filter" variant="outlined">
      <InputLabel>Filter by month</InputLabel>
      <Select value={month} onChange={handleChange} label="Month">
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {getMonthListFromToday(12).map((month) => (
          <MenuItem key={month} value={month}>
            {month}
          </MenuItem>
        ))}
      </Select>
    </StyledFormControl>
  );
};

export default MonthFilter;
