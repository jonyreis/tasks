import React from "react";

import { ModalContainer } from "./styles";

const Modal = (props) => {
  const { show, setShow, dataTask } = props;
  console.log(props);
  return (
    <ModalContainer show={show}>
      <span id="close" onClick={() => setShow(false)}>
        X
      </span>
      <div>
        <h4>{dataTask.nome}</h4>
        {dataTask.dateToEnd && <p>Data Para Entrega: {dataTask.dateToEnd}</p>}
        {dataTask.dateConclusion && (
          <p>Data de Conclusão: {dataTask.dateConclusion}</p>
        )}
      </div>
    </ModalContainer>
  );
};

export default Modal;
