import React from "react";
import "./PlaceItem.css";
import Card from "../../../shared/UIElements/Card/Card";

const PlaceItem = (props) => {
  const { image, title, description, address } = props;
  return (
    <li className='place-item'>
      <Card>
        <div className='place-item__image'>
          <img src={image} alt='' />
        </div>
        <div className='place-item__info'>
          <h2>{title}</h2>
          <h3>{address}</h3>
          <p>{description}</p>
        </div>
        <div className='place-item__actions'>
          <button>View on Map</button>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </Card>
    </li>
  );
};

export default PlaceItem;
