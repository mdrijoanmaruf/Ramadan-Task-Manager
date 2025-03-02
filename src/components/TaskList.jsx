import React from "react";

const TaskList = ({ taskData, updateTaskStatus }) => {
  return (
    <div className="space-y-2">
      {taskData.map((task, taskIndex) => (
        <div key={taskIndex} className="flex items-center">
          <input
            type="checkbox"
            checked={task.days[0]} // Checkbox for the current day
            onChange={(e) => updateTaskStatus(taskIndex, e.target.checked)}
            className="mr-2"
          />
          <label>{task.name}</label>
        </div>
      ))}
    </div>
  );
};

export default TaskList;