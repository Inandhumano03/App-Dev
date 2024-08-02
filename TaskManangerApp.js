import React, { useState } from 'react';
import Dashboard from './Dashboard';
import TimeManager from './TimeManager';
import './TaskManagerApp.css';

const TaskManagerApp = () => {
  const [tasks, setTasks] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleAddTask = (taskDetails) => {
    const taskDate = taskDetails.date;
    setTasks((prevTasks) => {
      const updatedTasks = { ...prevTasks };
      if (updatedTasks[taskDate]) {
        updatedTasks[taskDate].push(taskDetails);
      } else {
        updatedTasks[taskDate] = [taskDetails];
      }
      return updatedTasks;
    });
  };

  return (
    <div className="task-manager-app">
      <Dashboard tasks={tasks} setTasks={setTasks} onAddTask={handleAddTask} />
      <TimeManager tasks={tasks} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
    </div>
  );
};

export default TaskManagerApp;
