import React from 'react';

const AppliedFilter = (props: { filterName: string }): JSX.Element => {
  return (
    <li className="filter" key={props.filterName}>
      <p className="filter__name">{props.filterName}</p>
      <button className="btn-remove-filter"></button>
    </li>
  );
};

export default AppliedFilter;
