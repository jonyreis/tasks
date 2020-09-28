import React from "react";

import FormTask from "../components/Task/FormTask";
import Tasks from "../components/Task/Tasks";
import Modal from "../components/Task/Modal";

import { DashboardContainer } from "./styles";

const Dashboard = () => {
  const [show, setShow] = React.useState(false);
  const [dataTask, setDataTask] = React.useState({});

  return (
    <DashboardContainer show={show}>
      <FormTask />
      <Tasks setShow={setShow} setDataTask={setDataTask} />
      <Modal show={show} setShow={setShow} dataTask={dataTask} />
    </DashboardContainer>
  );
};

export default Dashboard;
