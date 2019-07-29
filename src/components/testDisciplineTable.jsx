import React, { Component } from "react";
class TestDisciplineTable extends Component {
  render() {
    const { caliberation, testing } = this.props.discipline;
    let objTesting = JSON.parse(
      JSON.stringify(testing).replace(/\s(?=\w+":)/g, "")
    );
    return (
      <table>
        <thead>
          <tr>
            <th colSpan="2" className="card">
              Test Report Discipline
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
                <strong>MECHANICAL</strong>
              </div>
              <div>
                {caliberation.MECHANICAL.map((m, index) => (
                  <p key={index}>{m}</p>
                ))}
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Medical</strong>
            </td>
            <td />
          </tr>
          <tr>
            <td>
              <strong>Pmp</strong>
            </td>
            <td />
          </tr>
          <tr>
            <td>
              <strong>Rmp</strong>
            </td>
            <td />
          </tr>
          <tr>
            <td>
              <strong>Testing</strong>
            </td>
            <td>
              <strong>CHEMICALS</strong>
              {objTesting.CHEMICALS.map((c, index) => (
                <p key={index}>{c}</p>
              ))}
              <div className="divider" />
              <strong>FLUID FLOW</strong>
              {objTesting.FLUIDFLOW.map((f, index) => (
                <p key={index}>{f}</p>
              ))}
              <div className="divider" />
              <strong>MECHANICAL</strong>
              {objTesting.MECHANICAL.map((m, index) => (
                <p key={index}>{m}</p>
              ))}
              <div className="divider" />
              <strong>RADIOLOGICAL</strong>
              {objTesting.RADIOLOGICAL.map((m, index) => (
                <p key={index}>{m}</p>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default TestDisciplineTable;
