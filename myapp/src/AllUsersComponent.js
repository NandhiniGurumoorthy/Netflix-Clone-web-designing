import React, { useState } from "react";
import usersData from "./users";
import SingleUserComponent from "./SingleUserComponent";

const AllUsersComponent = () => {
  const [users, setUsers] = useState(usersData);
  const handleDeleteUser = (id) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);

  };
  return (
    <div>
      <h1>User Information Management</h1>
      <table border="1" cellPadding="10" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <SingleUserComponent key={user.id} user={user} onDelete={handleDeleteUser} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsersComponent;
