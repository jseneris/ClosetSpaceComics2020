import React from 'react';
import { AddCircleOutline } from '@material-ui/icons';

export const BoxList = (props) => {
  const boxList = props.Boxes.map((box) => {
    return (
      <li className={`col box-detail`} key={box.id}>
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

  return (
    <div className="row  box-list">
      <div className="close-button">
        <AddCircleOutline />
      </div>
      <ul>{boxList}</ul>
    </div>
  );
};

export default BoxList;
