import React, { Component } from 'react';
import { LocationList } from './LocationList';
import { BoxList } from './BoxList';

export class CollectionSection extends Component {
  render() {
    return (
      <section id="section-collection">
        <LocationList Locations={this.props.Locations}></LocationList>
        <BoxList
          Boxes={
            this.props.Locations.length > 0 ? this.props.Locations[0].boxes : []
          }
        ></BoxList>
      </section>
    );
  }
}

export default CollectionSection;
