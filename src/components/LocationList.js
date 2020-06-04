import React, { Component } from 'react';
import { AddCircleOutline, Edit } from '@material-ui/icons';
import { AddEditModal } from './AddEditModal';

export class LocationList extends Component {
  state = { activeLocationId: null };

  handleLocationEdit = async (payload) => {
    let newLocation = await this.props.HandleEditLocation(payload);
    this.setState({ activeLocationId: newLocation.id });
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
      return <Edit />;
    } else {
      // return <AddCircleOutline />;
      return <AddEditModal SaveChanges={this.handleLocationEdit} />;
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
