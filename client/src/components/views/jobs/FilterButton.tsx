import React from 'react';

const FilterButton = (props: {
  filter: Filter;
  addFilter: (filter: Filter) => void;
}): JSX.Element => {
  const clickHandler = (): void => {
    props.addFilter(props.filter);
  };

  return (
    <li className="filter">
      <button className="btn-add-filter filter__name" onClick={clickHandler}>
        {props.filter.name}
      </button>
    </li>
  );
};

export default FilterButton;
