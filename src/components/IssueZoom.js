import React, { Component } from 'react';
import { CancelRounded } from '@material-ui/icons';

export class IssueZoom extends Component {
  state = {
    issue: this.props.Issue,
    selectedPurchase: { id: 1, name: 'Home' },
    selectedBox: { id: 1, name: 'Home' },
  };

  renderAddButton() {
    if (
      this.state.selectedPurchase === null &&
      this.state.selectedBox === null
    ) {
      return (
        <div className="btn addToCollection">
          <a className="btn">Add To Collection</a>
        </div>
      );
    } else {
      return (
        <div className="addToCollection">
          <a className="btn">Add To Collection</a>
          <p>
            <a className="addToCollection" href="#">
              change purchase
            </a>
          </p>
        </div>
      );
    }
  }

  renderContent() {
    return this.props.IssueList.map((issue) => {
      return (
        <li
          className="issue"
          key={issue.id}
          onClick={() => this.setState({ issue: issue })}
        >
          <img src={issue.imageUrl} alt={issue.title}></img>
        </li>
      );
    });
  }

  onDivClick = (e) => {
    this.props.OnCloseZoomClick();
  };

  render() {
    return (
      <div className="Zoom">
        <div className="btn-add-edit" onClick={this.onDivClick}>
          <CancelRounded />
        </div>
        <div className="zoom-header">
          <h2>{`${this.state.issue.title} #${this.state.issue.issueNum}`}</h2>
        </div>
        <div className="row zoom-body">
          <div className="col span-1-of-2 cover">
            <img src={this.state.issue.imageUrl} alt={this.state.issue.title} />
          </div>
          <div className="col span-1-of-2 description">
            <div>{this.state.issue.description}</div>
            {this.renderAddButton()}
          </div>
        </div>
        <div className="row horizontal-list">
          <ul>{this.renderContent()}</ul>
        </div>
      </div>
    );
  }
}

export default IssueZoom;
