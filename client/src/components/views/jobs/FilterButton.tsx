import React, { Component } from 'react';

class FilterButton extends Component<{ filterName: string }> {
  render(): JSX.Element {
    return (
      <button className="btn-add-filter filter__name">
        {this.props.filterName}
      </button>
    );
  }
}

export default FilterButton;
