import React, { useState } from 'react';

const Task = ({ taskText }) => {
  return (
    <li>
      {taskText}
    </li>
  );
};

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const addTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, taskInput.trim()]);
      setTaskInput('');
    }
  };

  return (
    <div style={{height: 100}}>
      <div>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Nhập công việc"
        />
        <button onClick={addTask}>Thêm</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <Task key={index} taskText={task} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;