import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

import { Category } from '@exo-gymondo/types';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const categories: Category[] = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7'];

interface Props {
  onChange: (event: React.ChangeEvent, value: Category[]) => void;
}

/**
 *
 * CategoryFilter
 * Allow the user to filter datas recieved by the server according to the selected categories
 *
 * @param {function} onChange - callback triggered when the categories filter has been updated.
 *
 * @return {jsx}
 *
 */
const CategoryFilter: React.FC<Props> = ({ onChange }) => {
  return (
    <Autocomplete
      onChange={onChange}
      data-test-id="category-filter"
      multiple
      options={categories}
      disableCloseOnSelect
      getOptionLabel={(option) => option}
      renderOption={(option, { selected }) => (
        <React.Fragment>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option}
        </React.Fragment>
      )}
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label="Filter by categories"
          placeholder="Categories"
        />
      )}
    />
  );
};

export default CategoryFilter;
