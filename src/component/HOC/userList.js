import React from "react";
import HOC from "./index";

const UsersList = ({ data }) => {
  let renderUsers = data.map((user) => {
    return (
      <div key={user.id}>
        <p>
          <strong>{user.name}</strong>
        </p>
      </div>
    );
  });
  return (
    <div>
      <div>{renderUsers}</div>
    </div>
  );
};

const SearchUsers = HOC(UsersList, "users",'search by username');

export default SearchUsers;