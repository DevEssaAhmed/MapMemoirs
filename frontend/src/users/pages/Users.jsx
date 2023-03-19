import React from "react";
import UsersList from "../components/UsersList/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Essa",
      image:
        "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      placeCount: 3,
    },
  ];
  return (
    <>
      <UsersList users={USERS} />
    </>
  );
};

export default Users;
