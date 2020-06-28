import React from 'react';

class AppliedFilter extends React.Component<{ filterName: string }> {
  render(): JSX.Element {
    return (
      <li className="filter" key={this.props.filterName}>
        <p className="filter__name">{this.props.filterName}</p>
        <button className="btn-remove-filter"></button>
      </li>
    );
  }
}

export default AppliedFilter;
