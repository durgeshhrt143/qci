import React from "react";
const Input = ({ name, label, error, ...rest }) => {
  return (
    <React.Fragment>
      <input id={name} name={name} {...rest} />
      <label htmlFor={name}>Enter ULR number *</label>
      {error && <span className="helper-text">{error}</span>}
    </React.Fragment>
  );
};

export default Input;
