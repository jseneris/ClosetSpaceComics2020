import React, { Component } from 'react';
import { AddEditModal } from './AddEditModal';

export class LocationList extends Component {
  state = { activeLocationId: null };

  handleLocationAdd = async (payload) => {
    let newLocation = await this.props.HandleAddLocation(payload);
    this.setState({ activeLocationId: newLocation.id });
  };

  handleLocationEdit = (payload) => {
    this.props.HandleEditLocation(payload);
  };

  onLocationClick = (location) => {
    this.props.HandleLocationSelection(location);
    if (this.state.activeLocationId !== location.id) {
      this.setState({ activeLocationId: location.id });
    } else {
      this.setState({ activeLocationId: null });
    }
  };

  locationList = () => {
    return this.props.Locations.map((location) => {
      let classString = `col location-detail ${
        !this.state.activeLocationId ||
        location.id === this.state.activeLocationId
          ? 'active'
          : 'inactive'
      }`;
      return (
        <li
          className={classString}
          key={location.id}
          onClick={(e) => this.onLocationClick(location)}
        >
          <div>
            <img
              className="location-image"
              src={location.imageUrl}
              alt={location.name}
              title={location.name}
            />
          </div>
          <span>{location.name}</span>
        </li>
      );
    });
  };

  renderButton() {
    if (this.state.activeLocationId) {
      //     return <Edit />;
      return (
        <AddEditModal
          Action="edit"
          LocationId={this.state.activeLocationId}
          SaveChanges={this.handleLocationEdit}
        />
      );
    } else {
      // return <AddCircleOutline />;
      return <AddEditModal Action="add" SaveChanges={this.handleLocationAdd} />;
    }
  }

  render() {
    return (
      <div className="row location-list">
        <div className="close-button">{this.renderButton()}</div>
        <ul>{this.locationList()}</ul>
      </div>
    );
  }
}

export default LocationList;
