import React, { useState } from 'react';

const TaskList = () => {
  // Initial task list state
  const [tasks, setTasks] = useState([
    { name: "Task 1", status: "done" },
    { name: "Task 2", status: "not done" },
    { name: "Task 3", status: "done" }
  ]);

  // Function to toggle task status
  const toggleStatus = (index) => {
    // Create a copy of the current tasks array
    const updatedTasks = [...tasks];

    // Toggle the status of the task at the specified index
    const task = updatedTasks[index];
    task.status = task.status === "done" ? "not done" : "done";

    // Update the state with the modified task list
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Employee Task Management</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task.name} - {task.status}</span>
            <button onClick={() => toggleStatus(index)}>
              Toggle Status
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
