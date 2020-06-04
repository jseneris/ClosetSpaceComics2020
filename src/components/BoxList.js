import React, { Component } from 'react';
import { AddCircleOutline } from '@material-ui/icons';

export class BoxList extends Component {
  state = { activeBoxId: null };

  onBoxClick = (box) => {
    this.props.HandleBoxSelection(box);
    this.setState({ activeBoxId: box.id });
  };

  boxList = () => {
    return this.props.Boxes.map((box) => {
      let classString = `col box-detail ${
        !this.state.activeBoxId || box.id === this.state.activeBoxId
          ? 'active'
          : 'inactive'
      }`;

      return (
        <li
          className={classString}
          key={box.id}
          onClick={(e) => this.onBoxClick(box)}
        >
          <div>
            <img
              className="box-image"
              src={box.imageUrl}
              alt={box.name}
              title={box.name}
            />
          </div>
          <span>{box.name}</span>
        </li>
      );
    });
  };

  render() {
    return (
      <div className="row  box-list">
        <div className="close-button">
          <AddCircleOutline />
        </div>
        <ul>{this.boxList()}</ul>
      </div>
    );
  }
}

export default BoxList;
