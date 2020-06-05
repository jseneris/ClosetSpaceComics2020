import React, { Component } from 'react';
import { AddEditModal } from './AddEditModal';

export class ItemList extends Component {
  state = { activeItem: null };

  handleAdd = async (payload) => {
    let newItem = await this.props.HandleAdd(payload);
    this.setState({ activeItem: newItem });
  };

  handleEdit = (payload) => {
    this.props.HandleEdit(payload);
  };

  onItemClick = (item) => {
    this.props.HandleItemSelection(item);
    if (this.state.activeItem == null || this.state.activeItem.id !== item.id) {
      this.setState({ activeItem: item });
    } else {
      this.setState({ activeItem: null });
    }
  };

  itemList = () => {
    return this.props.Items.map((item) => {
      let classString = `col ${this.props.ItemType}-detail ${
        !this.state.activeItem || item.id === this.state.activeItem.id
          ? 'active'
          : 'inactive'
      }`;
      return (
        <li
          className={classString}
          key={item.id}
          onClick={(e) => this.onItemClick(item)}
        >
          <div>
            <img
              className={`${this.props.ItemType}-image`}
              src={item.imageUrl}
              alt={item.name}
              title={item.name}
            />
          </div>
          <span>{item.name}</span>
        </li>
      );
    });
  };

  renderButton() {
    if (this.state.activeItem) {
      return (
        <AddEditModal
          Action="edit"
          Item={this.state.activeItem}
          LocationId={this.state.activeId}
          SaveChanges={this.handleEdit}
        />
      );
    } else {
      return <AddEditModal Action="add" SaveChanges={this.handleAdd} />;
    }
  }

  render() {
    return (
      <div className={`row ${this.props.ItemType}-list`}>
        <div className="close-button">{this.renderButton()}</div>
        <ul>{this.itemList()}</ul>
      </div>
    );
  }
}

export default ItemList;
