import React from "react";
import UserCard from "../components/userCard";
import "./_styling/users.css";

// ================== APP USER PAGE ==================
//
// Guidelines:
// * You have an incomplete user directory page.
// * Do not edit files aside from users.jsx.
// * Install and import package if required for fetch calls.
//
// Primary Task:
// * The 'Fetch users' button should trigger a call to the provided users api.
// * Using any method, fetch user info from the api and display it dynamically on the user
//   directory page using the provided UserCard component. (Investigate the UserCard component
//   to determine how it is used.)
//
// Bonus Tasks:
// 1) Disable the 'Fetch users' button while the app queries the api.
// 2) Show an error message instead of results list if the fetch call fails. (Break link to simulate failed api call).
// 3) Implement the logic to allow the user to dictate the number of results returned from the api.
// 4) Implement the logic to allow the user to clear all users from the user directory page.
//
// ====================================================

const Users = () => {
  const apiUrl = "https://randomuser.me/api/?results=5";

  return (
    <div id="users">
      <h2>Users</h2>
      <button>Fetch users</button>

      {/* Bonus Task 3 */}
      {/* <div id="input">
        <b>Number of results:</b>
        <input
          type="number"
        />
      </div> */}

      {/* Bonus Task 4*/}
      {/* <button>
        Clear users
      </button> */}

      <div id="user-list">
        {/* Display list of users within this div using the UserCard component */}
      </div>
    </div>
  );
};

export default Users;
