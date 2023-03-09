import React from "react";
import "./_styling/userCard.css";

const UserCard = (props) => {
  const user = props.user;
  return (
    <div id="user-card">
      <header>
        <img src={user.picture.medium} alt="user-picture" />
        <h3 id="name">{user.name.first + " " + user.name.last}</h3>
      </header>
      <b>{"Email: " + user.email}</b>
      <b>{"Location: " + user.location.city + ", " + user.location.country}</b>
    </div>
  );
};

export default UserCard;
