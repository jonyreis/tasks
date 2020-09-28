import React from "react";
import { connect } from "react-redux";

import Task from "./Task";

const Tasks = ({ auth, task, setShow, setDataTask }) => {
  if (!task) return <h1>Sem tarefa</h1>;
  return (
    <div>
      {task.map((item, index) => (
        <Task
          id={index}
          nome={item.nome}
          dateToEnd={item.dateToEnd}
          dateConclusion={item.dateConclusion}
          setShow={setShow}
          setDataTask={setDataTask}
        />
      ))}
    </div>
  );
};

export default connect((state) => ({
  auth: state.auth,
  task: state.task,
}))(Tasks);
