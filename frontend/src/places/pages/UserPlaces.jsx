import React from "react";
import PlaceList from "../components/PlaceList/PlaceList";

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building'
    }
]





const UserPlaces = () => {
  return (
    <div>
      <PlaceList items={DUMMY_PLACES} />
    </div>
  );
};

export default UserPlaces;
