import React, { Component } from "react";
class ConductTestingTable extends Component {
  state = {
    color: false
  };

  render() {
    const { conduct_testing } = this.props.lab;

    return (
      <table className="responsive-table">
        <tbody>
          {Object.entries(conduct_testing).map(([key, value]) => {
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

export default ConductTestingTable;
