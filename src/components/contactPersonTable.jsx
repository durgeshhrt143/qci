import React, { Component } from "react";
class ContactPersonTable extends Component {
  render() {
    const { contact_person } = this.props.lab;

    return (
      <table className="responsive-table">
        <tbody>
          {Object.entries(contact_person).map(([key, value]) => {
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

export default ContactPersonTable;
