import React, { Component } from 'react';
import { PurchaseList } from './PurchaseList';

export class PurchaseSection extends Component {
  render() {
    return (
      <section id="section-purchases">
        <PurchaseList Purchases={this.props.Purchases.purchases}></PurchaseList>
      </section>
    );
  }
}

export default PurchaseSection;
