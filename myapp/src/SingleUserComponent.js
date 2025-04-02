import React from "react";

const SingleUserComponent = ({ user, onDelete }) => {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.address}</td>
      <td>
        <button onClick={() => onDelete(user.id)} style={{ color: "white", backgroundColor: "red", padding:  "5px 10px", border: "none", cursor: "pointer" }}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default SingleUserComponent;
