import React from 'react';

const FilterButton = (props: {
  filterName: string;
  addFilter: (filterName: string) => void;
}): JSX.Element => {
  const clickHandler = (): void => {
    props.addFilter(props.filterName);
  };

  return (
    <li className="filter">
      <button className="btn-add-filter filter__name" onClick={clickHandler}>
        {props.filterName}
      </button>
    </li>
  );
};

export default FilterButton;
