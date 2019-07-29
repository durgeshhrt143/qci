import React, { Component } from "react";
class DisciplineTable extends Component {
  render() {
    const { caliberation, testing } = this.props.lab.discipline;
    let objTesting = JSON.parse(
      JSON.stringify(testing).replace(/\s(?=\w+":)/g, "")
    );
    return (
      <table className="responsive-table">
        <thead>
          <tr>
            <th colSpan="2" className="card">
              Lab Discipline
            </th>
          </tr>
        </thead>
        <tbody className="card">
          <tr>
            <td>
              <strong>Caliberation</strong>
            </td>
            <td>
              <div>
                <strong>THERMAL</strong>
              </div>
              <div>
                {caliberation.THERMAL.map((t, index) => (
                  <p key={index}>{t}</p>
                ))}
              </div>
              <div>
                <strong>RADIOLOGICAL</strong>
              </div>
              <div>
                {caliberation.RADIOLOGICAL.map((t, index) => (
                  <p key={index}>{t}</p>
                ))}
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Medical</strong>
            </td>
            <td>
              <div />
            </td>
          </tr>
          <tr>
            <td>
              <strong>Pmp</strong>
            </td>
            <td>
              <div />
            </td>
          </tr>
          <tr>
            <td>
              <strong>Rmp</strong>
            </td>
            <td>
              <div />
            </td>
          </tr>
          <tr>
            <td>
              <strong>Testing</strong>
            </td>
            <td>
              <strong>FLUID FLOW</strong>
              <div>
                {objTesting.FLUIDFLOW.map((m, index) => (
                  <p key={index}>{m}</p>
                ))}
              </div>
              <div className="divider" />
              <strong>FORENSIC</strong>
              <div>
                {objTesting.FORENSIC.map((m, index) => (
                  <p key={index}>{m}</p>
                ))}
              </div>
              <div className="divider" />
              <strong>MECHANICAL</strong>
              <div>
                {objTesting.MECHANICAL.map((m, index) => (
                  <p key={index}>{m}</p>
                ))}
              </div>
              <div className="divider" />
              <strong>RADIOLOGICAL</strong>
              <div>
                {objTesting.RADIOLOGICAL.map((m, index) => (
                  <p key={index}>{m}</p>
                ))}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default DisciplineTable;
