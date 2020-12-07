import React from "react";

const UsersRegister = ({ data }) => {
  return (
    <div>
      <ul>
        {data.map((eachRegisteredUser) => {
          return (
            <li key={eachRegisteredUser._id}>{eachRegisteredUser.name}</li>
          );
        })}
      </ul>
    </div>
  );
};
export default UsersRegister;
