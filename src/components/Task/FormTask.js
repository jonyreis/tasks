import React from "react";
import { Form, Input, Textarea } from "@rocketseat/unform";
import { connect, useDispatch } from "react-redux";

import { FormContainer } from "./styles";

const FormTask = ({ task }) => {
  const dispatch = useDispatch();
  function handleSubmit(data) {
    dispatch({
      type: "@task/CREATE_TASK",
      data,
    });
  }
  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Textarea label="Nome:" type="textarea" name="nome" />
        <div className="group-form">
          <div>
            <Input label="Data de Entrega:" type="date" name="dateToEnd" />
          </div>
          <div>
            <Input
              label="Data de Conclusão:"
              type="date"
              name="dateConclusion"
            />
          </div>
        </div>

        <button type="submit">Criar Tarefa</button>
      </Form>
    </FormContainer>
  );
};

export default connect()(FormTask);
