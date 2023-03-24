import React from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList/PlaceList";

const DUMMY_PLACES = [
  {
    id: "u1",
    title: "Empire State Building",
    location: {
      lat: 37.7749,
      lng: -122.4194,
    },
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.id === userId);
  return (
    <div>
      <PlaceList items={loadedPlaces} />
    </div>
  );
};

export default UserPlaces;
