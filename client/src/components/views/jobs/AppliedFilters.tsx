import React, { Component } from 'react';
import AppliedFilter from './AppliedFilter';

class AppliedFilters extends Component<{}, { appliedFilters: string[] }> {
  state = {
    appliedFilters: [`Frontend1`, `CSS`, `JavaScript`],
  };

  render(): JSX.Element {
    return (
      <div className="selected-filters card">
        <ul className="filters__list">
          {this.state.appliedFilters.map((filterName: string) => (
            <AppliedFilter filterName={filterName} />
          ))}
        </ul>
        <div className="center">
          <button className="btn-clear-filters">Clear</button>
        </div>
      </div>
    );
  }
}

export default AppliedFilters;
