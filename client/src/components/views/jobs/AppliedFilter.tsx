import React from 'react';

const AppliedFilter = (props: {
  filter: Filter;
  removeFilter: (filter: Filter) => void;
}): JSX.Element => {
  const clickHandler = (): void => {
    props.removeFilter(props.filter);
  };

  return (
    <li className="filter">
      <p className="filter__name">{props.filter.name}</p>
      <button className="btn-remove-filter" onClick={clickHandler}></button>
    </li>
  );
};

export default AppliedFilter;
