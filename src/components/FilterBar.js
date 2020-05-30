import React, { Component } from 'react';

export class FilterBar extends Component {
  state = { activeFilters: [] };

  onFilterButtonClick = (event) => {
    let parent = event.target.closest('button');
    let parentKey = parent.getAttribute('data-publisher');

    this.props.UpdateActiveFilter(parentKey);
  };

  buttonBody = (filter) => {
    if (filter.imageUrl) {
      return (
        <img
          src={filter.imageUrl}
          alt={filter.publisher}
          title={filter.publisher}
        />
      );
    } else {
      return <span>{filter.publisher}</span>;
    }
  };

  filterList = () => {
    return this.props.Filters.map((filter) => {
      let filterState = '';
      if (this.props.ActiveFilters.length > 0) {
        if (this.props.ActiveFilters.indexOf(filter.publisher) === -1) {
          filterState = 'inactive';
        }
      }
      return (
        <button
          className={`pub-logo ${filterState}`}
          data-publisher={filter.publisher}
          onClick={this.onFilterButtonClick}
          key={filter.publisher}
        >
          {this.buttonBody(filter)}
        </button>
      );
    });
  };

  render() {
    return <div className="row filter-list">{this.filterList()}</div>;
  }
}

export default FilterBar;
