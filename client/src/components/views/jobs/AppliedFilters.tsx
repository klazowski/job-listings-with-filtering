import React from 'react';
import AppliedFilter from './AppliedFilter';

const AppliedFilters = (props: { appliedFilters: string[] }): JSX.Element => {
  return (
    <div className="selected-filters card">
      <ul className="filters__list">
        {props.appliedFilters.map((filterName: string) => (
          <AppliedFilter filterName={filterName} />
        ))}
      </ul>
      <div className="center">
        <button className="btn-clear-filters">Clear</button>
      </div>
    </div>
  );
};

export default AppliedFilters;
