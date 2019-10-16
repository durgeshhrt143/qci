import React, { Component } from "react";
class GenralDetailsTable extends Component {
  render() {
    const { general_details } = this.props.lab;
    return (
      <table className="responsive-table">
        <tbody>
          {Object.entries(general_details).map(([key, value]) => {
            const replaced = key.split("_").join(" ");
            return (
              <tr key={key}>
                <td>
                  <strong>{replaced}</strong>
                </td>
                <td>{value.toString()} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default GenralDetailsTable;
