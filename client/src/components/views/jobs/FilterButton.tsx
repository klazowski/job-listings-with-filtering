import React from 'react';

const FilterButton = (props: { filterName: string }): JSX.Element => {
  return (
    <button className="btn-add-filter filter__name">{props.filterName}</button>
  );
};

export default FilterButton;
