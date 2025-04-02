// AllUsersComponentManagement.js
import React, { useState } from 'react';
import { usersmanagement } from './usersmanagement';  // Import from the renamed file
import SingleUserComponentManagement from './SingleUserComponentManagement';

const AllUsersComponentManagement = () => {
  const [userList, setUserList] = useState([]);
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  const addAllUsers = () => {
    setUserList(usersmanagement); // Add all users to the list
    setShowDeleteButton(true); // Show the delete button
  };

  const deleteAllUsers = () => {
    setUserList([]); // Clear all users from the list
    setShowDeleteButton(false); // Hide the delete button
  };

  const removeUser = (id) => {
    setUserList(userList.filter(user => user.id !== id)); // Remove a single user
  };

  return (
    <div>
      {!showDeleteButton && <button onClick={addAllUsers}>Add All Users</button>}
      {showDeleteButton && (
        <button onClick={deleteAllUsers}>Delete All Users</button>
      )}

      {userList.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userList.map(user => (
              <SingleUserComponentManagement
                key={user.id}
                user={user}
                removeUser={removeUser}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AllUsersComponentManagement;
