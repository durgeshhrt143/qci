import React, { Component } from "react";
class Select extends Component {
  render() {
    const { name, label, options, error, ...rest } = this.props;
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
  }
}

export default Select;
