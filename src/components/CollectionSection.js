import React, { Component } from 'react';
import axios from '../api/ClosetSpaceComicsApi';
import { IssueList } from './IssueList';
import { ItemList } from './ItemList';

export class CollectionSection extends Component {
  state = { activeLocation: null, boxItemList: [], activeBox: null };

  getBoxList = async (userId, locationId, boxId) => {
    const response = await axios.get(
      `/user/collection/location/${locationId}/box/${boxId}`,
      {
        headers: {
          userId: userId,
        },
      }
    );

    let boxItemList = [];

    if (response.data) {
      boxItemList = response.data.map((item) => {
        return {
          id: item.Id,
          imageUrl: item.ImageUrl,
        };
      });
      this.setState({ boxItemList: boxItemList });
    }
  };

  handleLocationSelection = (location) => {
    if (
      this.state.activeLocation === null ||
      this.state.activeLocation.id !== location.id
    ) {
      this.setState({ activeLocation: location });
    } else {
      this.setState({ activeLocation: null });
    }
  };

  handleAddLocation = async (payload) => {
    let newLocation = await this.props.HandleAddLocation(payload);
    this.setState({ activeLocation: newLocation });
    return newLocation;
  };

  handleEditLocation = (payload) => {
    this.props.HandleEditLocation(payload);
  };

  handleBoxSelection = (box) => {
    this.getBoxList(0, this.state.activeLocation.id, box.id);
  };

  handleAddBox = async (payload) => {
    payload.locationId = this.state.activeLocation.id;
    let newBox = await this.props.HandleAddBox(payload);
    this.setState({ activeBox: newBox });
    return newBox;
  };

  handleEditBox = (payload) => {
    payload.locationId = this.state.activeLocation.id;
    this.props.HandleEditBox(payload);
  };

  renderBoXList = () => {
    if (this.state.activeLocation) {
      return (
        <ItemList
          ItemType="box"
          ActiveLocation={this.state.activeLocation}
          Items={this.state.activeLocation.boxes}
          HandleItemSelection={this.handleBoxSelection}
          HandleAdd={this.handleAddBox}
          HandleEdit={this.handleEditBox}
        ></ItemList>
      );
    }
  };

  render() {
    return (
      <section id="section-collection">
        <ItemList
          ItemType="location"
          Items={this.props.Locations}
          HandleItemSelection={this.handleLocationSelection}
          HandleAdd={this.handleAddLocation}
          HandleEdit={this.handleEditLocation}
        ></ItemList>
        {this.renderBoXList()}
        <IssueList
          Issues={this.state.boxItemList}
          Size="span-1-of-10"
          ActiveFilters={[]}
          OnIssueClick={this.handleIssueClick}
        ></IssueList>
      </section>
    );
  }
}

export default CollectionSection;
