import React from "react";
import "./tasklist.css";
import propTypes from "prop-types";
import TaskItem from "../TaskItem/TaskItem";
import plusIcon from "../img/plus.svg";

export default function TaskList({
  title,
  taskState,
  tasks,
  onAddTask,
  onTaskUpdate,
  onDeleteTask
}) {
  //OR props.prop
  const addTask = () => {
    onAddTask("nova tarefa", taskState);
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              taskState={task.state}
              onTaskUpdate={onTaskUpdate}
              onDeleteTask={onDeleteTask}
            />
          );
        })}

        {tasks.length === 0 && <div className="empty-list">Lista Vazia</div>}
        <button className="btn" onClick={addTask}>
          <img src={plusIcon} alt="plus signal" />
          adicionar tarefa
        </button>
      </div>
    </div>
  );
}

TaskList.propTypes = {
  title: propTypes.string.isRequired,
  onAddTask: propTypes.func.isRequired,
  tasks: propTypes.array.isRequired
};
