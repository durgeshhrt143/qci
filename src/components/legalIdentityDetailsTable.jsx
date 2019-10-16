import React, { Component } from "react";
class LegalIdentityDetailsTable extends Component {
  render() {
    const { legal_identity_details } = this.props.lab;
    console.log(legal_identity_details);
    return (
      <table className="responsive-table">
        <tbody>
          {Object.entries(legal_identity_details).map(([key, value]) => {
            const replaced = key.split("_").join(" ");
            return (
              <tr key={key}>
                <td>
                  <strong>{replaced}</strong>
                </td>
                <td>{value} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default LegalIdentityDetailsTable;
