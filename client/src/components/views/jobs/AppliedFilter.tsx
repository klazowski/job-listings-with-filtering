import React from 'react';

const AppliedFilter = (props: {
  filterName: string;
  removeFilter: (filterName: string) => void;
}): JSX.Element => {
  const clickHandler = (): void => {
    props.removeFilter(props.filterName);
  };

  return (
    <li className="filter">
      <p className="filter__name">{props.filterName}</p>
      <button className="btn-remove-filter" onClick={clickHandler}></button>
    </li>
  );
};

export default AppliedFilter;
