import React from "react";
import { connect } from "react-redux";

import { TaskContainer } from "./styles";

const Task = ({
  task,
  nome,
  dateToEnd,
  dateConclusion,
  id,
  setShow,
  setDataTask,
}) => {
  function handleUpdate() {}
  function handleDelete() {}
  function handleComplete() {}
  function handleShow() {
    setDataTask({
      nome: nome,
      dateToEnd: dateToEnd,
      dateConclusion: dateConclusion,
    });
    setShow(true);
  }
  return (
    <TaskContainer>
      <div>
        <h3>{nome}</h3>
        {dateToEnd && <p>Data Para Entrega: {dateToEnd}</p>}
        {dateConclusion && <p>Data de Conclusão: {dateConclusion}</p>}
      </div>
      <div className="group-button">
        <button onClick={handleUpdate}>Editar</button>
        <button onClick={handleDelete}>Excluir</button>
        <button onClick={handleComplete}>Concluir</button>
        <button onClick={handleShow}>Visualizar</button>
      </div>
    </TaskContainer>
  );
};

export default connect((state) => ({
  task: state.task,
}))(Task);
