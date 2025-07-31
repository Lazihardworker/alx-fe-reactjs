/*import React from "react";

const UserProfile = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;*/

import { useContext } from "react";
import UserContext from "../UserContext";

const UserProfile = () => {
  const user = useContext(UserContext);

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h2 style={{ color: "blue" }}>{user.name}</h2>
      <p>
        Age: <span style={{ fontWeight: "bold" }}>{user.age}</span>
      </p>
      <p>Bio: {user.bio}</p>
    </div>
  );
};

export default UserProfile;
