import React from 'react';
import { AddCircleOutline } from '@material-ui/icons';

export const LocationList = (props) => {
  const locationList = props.Locations.map((location) => {
    return (
      <li className={`col location-detail`} key={location.id}>
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

  return (
    <div className="row location-list">
      <div className="close-button">
        <AddCircleOutline />
      </div>
      <ul>{locationList}</ul>
    </div>
  );
};

export default LocationList;
