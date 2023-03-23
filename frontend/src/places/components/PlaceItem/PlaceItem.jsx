import React, { useState } from "react";
import "./PlaceItem.css";
import Card from "../../../shared/UIElements/Card/Card";
import Button from "../../../shared/Button/Button";
import Modal from "../../../shared/UIElements/Modal/Modal";

const PlaceItem = (props) => {
  const { image, title, description, address } = props;
  const [showMap, setShowMap] = useState(false);
  const openMapHandler = () => {
    setShowMap(true);
  };
  const closeMapHandler = () => {
    setShowMap(false)
  }
  return (
    <>
      <Modal
        show={showMap}
        header={address}
        contentClass='place-item__modal-container'
        footerClass='place-item__modal-actions'
        footer= {<Button onClick={openMapHandler}>Close</Button>}
      >
        <div className="map-container">
          <h2>Map</h2>
        </div>
      </Modal>
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
            <Button inverse>View on Map</Button>
            <Button to={`/places/${props.id}`}>Edit</Button>
            <Button danger>Delete</Button>
          </div>
        </Card>
      </li>
    </>
  );
};

export default PlaceItem;
