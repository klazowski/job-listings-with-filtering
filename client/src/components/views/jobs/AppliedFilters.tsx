import React from 'react';
import AppliedFilter from './AppliedFilter';

const AppliedFilters = (props: {
  appliedFilters: string[];
  removeFilters: (filters: string[]) => void;
}): JSX.Element => {
  const removeFilterHandler = (filterName: string): void => {
    props.removeFilters([filterName]);
  };

  const removeAllFilters = (): void => {
    props.removeFilters(props.appliedFilters);
  };

  return (
    <div className="selected-filters card">
      <ul className="filters__list">
        {props.appliedFilters.map((filterName: string, idx: number) => (
          <AppliedFilter
            filterName={filterName}
            removeFilter={removeFilterHandler}
            key={`appliedFilter_${idx}`}
          />
        ))}
      </ul>
      <div className="center">
        <button className="btn-clear-filters" onClick={removeAllFilters}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default AppliedFilters;
