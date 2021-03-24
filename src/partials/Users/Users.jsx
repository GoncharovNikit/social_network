import React from "react";
import User from "./User/User";
import c from "./Users.module.css";

const Users = (props) => {
  let usersJsx = props.users.map((user) => (
    <User
      name={user.name}
      location={user.location}
      status={user.status}
      is_followed={user.followed}
      key={user.id}
    />
  ));

  return (
    <div>
      <h1>Users</h1>
      <div className={c.users_wrap}>
          { usersJsx }
      </div>
    </div>
  );
};

export default Users;
