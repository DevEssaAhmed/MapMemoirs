import React from "react";
import "./PlaceList.css";
import Card from "../../../shared/UIElements/Card/Card";
import PlaceItem from "../PlaceItem/PlaceItem";

const PlaceList = (props) => {
  if (props.length === 0) {
    return (
      <div className='place-list center'>
        <Card>
          <h2>No places found. Maybe Create One?</h2>
          <button>Share Place</button>
        </Card>
      </div>
    );
  }
  return (
    <ul className='place-list'>
      {props.items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
