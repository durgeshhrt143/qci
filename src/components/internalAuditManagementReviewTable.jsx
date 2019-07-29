import React, { Component } from "react";
class InternalAuditManagementReviewTable extends Component {
  state = {};
  render() {
    const { internal_audit_management_review } = this.props.lab;

    let objTesting = JSON.parse(
      JSON.stringify(internal_audit_management_review).replace(
        /\s(?=\w+":)/g,
        ""
      )
    );
    console.log(objTesting);
    return (
      <table className="responsive-table">
        <tbody>
          {Object.entries(objTesting).map(([key, value]) => {
            return (
              <tr key={key}>
                <td>
                  <strong>{key}</strong>
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

export default InternalAuditManagementReviewTable;
