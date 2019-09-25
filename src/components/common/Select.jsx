import React from "react";
const Select = ({ name, label, options, error, ...rest }) => {
  console.log(options);
  return (
    <div className="input-field">
      <select name={name} id={name} {...rest}>
        {/* <option value="">{label}</option> */}
        {options.map(option => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
      {/* <label htmlFor={name}>{label}</label> */}
    </div>
  );
};

export default Select;
