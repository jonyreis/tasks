import React from "react";

import { InputStyles } from "./styles";

const Input = ({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  error,
  onBlur,
}) => {
  return (
    <InputStyles>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder}
      />
      {/* {error && <p className={error}>{error}</p>} */}
    </InputStyles>
  );
};

export default Input;
