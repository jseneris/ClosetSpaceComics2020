import React from 'react';
import { AddCircleOutline } from '@material-ui/icons';

export const PurchaseList = (props) => {
  const purchaseList = props.Purchases.map((purchase) => {
    return (
      <li className={`col purchase-detail`} key={purchase.id}>
        <div>
          <img
            src={purchase.imageUrl}
            alt={purchase.name}
            title={purchase.name}
          />
        </div>
        <span>{purchase.description}</span>
        <span>({purchase.size})</span>
      </li>
    );
  });

  return (
    <div className="row purchase-list">
      <div className="close-button">
        <AddCircleOutline />
      </div>
      <ul>{purchaseList}</ul>
    </div>
  );
};

export default PurchaseList;
