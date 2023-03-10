import React from "react";
import UserItem from "../UserItem/UserItem";

import "./UsersList.css";
import Card from "../../../shared/UIElements/Card/Card";

const UsersList = ({ users }) => {
  if (users.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No Users Found</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {users.map((user) => {
        const { id, name, image, placeCount } = user;
        return (
          <UserItem
            key={id}
            id={id}
            name={name}
            image={image}
            placeCount={placeCount}
          />
        );
      })}
    </ul>
  );
};
export default UsersList;
