import React, { useState } from "react";
import "./styles.css";

import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/TaskList/TaskList";

let idAcc = 0;

const generateId = () => {
  idAcc = idAcc + 1;
  return idAcc;
};

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state
    };
    setTasks((existingTasks) => {
      return [...existingTasks, newTask];
    });
  };

  const updateTask = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        } else {
          return task;
        }
      });
    });
  };

  const deleteTask = (id) => {
    setTasks((existingTasks) => {
      return existingTasks.filter((task) => task.id !== id);
    });
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList
          title="Pendente"
          taskState="Pendente"
          onAddTask={addTask}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
          tasks={tasks.filter((t) => t.state === "Pendente")}
        />
        <TaskList
          title="Fazendo"
          taskState="Fazendo"
          onAddTask={addTask}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
          tasks={tasks.filter((t) => t.state === "Fazendo")}
        />
        <TaskList
          title="Completo"
          taskState="Completo"
          onAddTask={addTask}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
          tasks={tasks.filter((t) => t.state === "Completo")}
        />
      </div>
    </div>
  );
}
