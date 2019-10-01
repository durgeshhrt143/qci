import React, { Component } from "react";
class CretificationDetail extends Component {
  state = {};
  render() {
    const {
      created_on,
      file_hash,
      file_name,
      issued_to_name
    } = this.props.data;
    if (this.props.data) {
    } else {
      return null;
    }

    return (
      <div className="row">
        <div className="col l12">
          <div className="card ">
            <table className="responsive-table highlight">
              <thead>
                <tr>
                  <th>Certificate Detail</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Created On</strong>
                    <div>{created_on}</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>File Hash</strong>
                    <div>{file_hash}</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>File Name</strong>
                    <div>{file_name}</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Issued to Name</strong>
                    <div>{issued_to_name}</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default CretificationDetail;
