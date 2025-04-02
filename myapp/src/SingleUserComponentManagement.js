// SingleUserComponentManagement.js
import React from 'react';

const SingleUserComponentManagement = ({ user, removeUser }) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.address}</td>
      <td>
        <button onClick={() => removeUser(user.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default SingleUserComponentManagement;
