import React, { Component } from "react";
class ParentOrgDetailTable extends Component {
  state = {};
  render() {
    const { parent_org_detail } = this.props.lab;

    return (
      <table className="responsive-table">
        <tbody>
          {Object.entries(parent_org_detail).map(([key, value]) => {
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

export default ParentOrgDetailTable;
