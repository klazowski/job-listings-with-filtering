import React, { Component } from 'react';

class SelectedFilters extends Component {
  render(): JSX.Element {
    return (
      <div className="selected-filters card">
        <ul className="filters__list">
          <li className="filter">
            <p className="filter__name">Frontend</p>
            <button className="btn-remove-filter"></button>
          </li>
          <li className="filter">
            <p className="filter__name">CSS</p>
            <button className="btn-remove-filter"></button>
          </li>
          <li className="filter">
            <p className="filter__name">JavaScript</p>
            <button className="btn-remove-filter"></button>
          </li>
        </ul>
        <div className="center">
          <button className="btn-clear-filters">Clear</button>
        </div>
      </div>
    );
  }
}

export default SelectedFilters;
