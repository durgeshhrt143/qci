import React, { Component } from "react";
class LegalIdentityDetailsTable extends Component {
  render() {
    const { legal_identity_details } = this.props.lab;
    console.log(legal_identity_details);
    return (
      <table className="responsive-table">
        <tbody>
          {Object.entries(legal_identity_details).map(([key, value]) => {
            return (
              <tr key={key}>
                <td>
                  <strong>{key}</strong>
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
