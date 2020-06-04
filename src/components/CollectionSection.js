import React, { Component } from 'react';
import axios from '../api/ClosetSpaceComicsApi';
import { LocationList } from './LocationList';
import { BoxList } from './BoxList';
import { IssueList } from './IssueList';

export class CollectionSection extends Component {
  state = { activeLocation: null, boxItemList: [] };

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
      this.state.activeLocation.id != location.id
    ) {
      this.setState({ activeLocation: location });
    } else {
      this.setState({ activeLocation: null });
    }
  };

  handleEditLocation = async (payload) => {
    let newLocation = await this.props.HandleEditLocation(payload);
    this.setState({ activeLocation: newLocation });
    return newLocation;
  };

  handleBoxSelection = (box) => {
    this.getBoxList(0, this.state.activeLocation.id, box.id);
  };

  renderBoXList = () => {
    if (this.state.activeLocation) {
      return (
        <BoxList
          Boxes={this.state.activeLocation.boxes}
          HandleBoxSelection={this.handleBoxSelection}
        ></BoxList>
      );
    }
  };

  render() {
    return (
      <section id="section-collection">
        <LocationList
          Locations={this.props.Locations}
          HandleLocationSelection={this.handleLocationSelection}
          HandleEditLocation={this.handleEditLocation}
        ></LocationList>
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
