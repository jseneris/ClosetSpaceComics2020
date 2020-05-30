import React, { Component } from 'react';
import { IssueList } from './IssueList';
import { FilterBar } from './FilterBar';
import { SearchBar } from './SearchBar';
import { IssueZoom } from './IssueZoom';

export class CatalogSection extends Component {
  state = { activeFilters: [], zoomIssue: null, zoomIssueList: [] };

  updateActiveFilter = (filter) => {
    let indexOf = this.state.activeFilters.indexOf(filter);

    let newFilterList = this.state.activeFilters.slice();
    if (indexOf > -1) {
      newFilterList.splice(indexOf, 1);
    } else {
      newFilterList.push(filter);
    }
    this.setState({
      activeFilters: newFilterList,
    });
  };

  onDateChange = (date) => {
    this.props.HandleDateChange(date);
  };

  handleIssueClick = (issue, issueList) => {
    this.setState({ zoomIssue: issue, zoomIssueList: issueList });
  };

  handleCloseZoomClick = () => {
    this.setState({ zoomIssue: null, zoomIssueList: null });
  };

  renderContent() {
    if (this.props.Filters.length > 0 && this.props.Issues.length > 0) {
      return (
        <div>
          <FilterBar
            Filters={this.props.Filters}
            ActiveFilters={this.state.activeFilters}
            UpdateActiveFilter={this.updateActiveFilter}
          ></FilterBar>
          <IssueList
            Issues={this.props.Issues}
            Size="span-1-of-6"
            ActiveFilters={this.state.activeFilters}
            OnIssueClick={this.handleIssueClick}
          ></IssueList>
        </div>
      );
    } else {
      return <span>loading...</span>;
    }
  }

  render() {
    if (this.state.zoomIssue) {
      return (
        <section className="section-catalog">
          <IssueZoom
            Issue={this.state.zoomIssue}
            IssueList={this.state.zoomIssueList}
            OnCloseZoomClick={this.handleCloseZoomClick}
          ></IssueZoom>
        </section>
      );
    } else {
      return (
        <section className="section-catalog">
          <div className="row search-bar">
            <SearchBar OnDateChange={this.onDateChange}></SearchBar>
          </div>
          {this.renderContent()}
        </section>
      );
    }
  }
}

export default CatalogSection;
