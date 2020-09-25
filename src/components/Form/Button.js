import React from "react";

import { ButtonStyles } from "./styles";

const Button = ({ children, ...props }) => {
  return <ButtonStyles {...props}>{children}</ButtonStyles>;
};

export default Button;
