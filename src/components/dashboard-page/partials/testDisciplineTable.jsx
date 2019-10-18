import React, { Component } from "react";
class TestDisciplineTable extends Component {
  render() {
    const { caliberation, testing, medical, pmp, rmp } = this.props.discipline;
    let objTesting = JSON.parse(
      JSON.stringify(testing).replace(/\s(?=\w+":)/g, "")
    );
    console.log(caliberation);
    return (
      <table className="responsive-table">
        <thead>
          <tr>
            <th colSpan="2" className="card">
              Test Report Discipline
            </th>
          </tr>
        </thead>
        <tbody className="card">
          <tr>
            <td className="border">
              <strong>Calibration</strong>
            </td>
            <td>
              {Object.entries(caliberation).map(([key, value]) => {
                return (
                  <div key={key}>
                    <div>
                      <strong>{key}</strong>
                    </div>
                    <p>{value.toString()} </p>
                  </div>
                );
              })}
            </td>
          </tr>
          <tr>
            <td className="border">
              <strong>Medical</strong>
            </td>
            <td>
              {Object.entries(medical).map(([key, value]) => {
                return (
                  <div key={key}>
                    <div>
                      <strong>{key}</strong>
                    </div>
                    <p>{value.toString()} </p>
                  </div>
                );
              })}
            </td>
          </tr>
          <tr>
            <td className="border">
              <strong>Pmp</strong>
            </td>
            <td>
              {Object.entries(pmp).map(([key, value]) => {
                return (
                  <div key={key}>
                    <div>
                      <strong>{key}</strong>
                    </div>
                    <p>{value.toString()} </p>
                  </div>
                );
              })}
            </td>
          </tr>
          <tr>
            <td className="border">
              <strong>Rmp</strong>
            </td>
            <td>
              {Object.entries(rmp).map(([key, value]) => {
                return (
                  <div key={key}>
                    <div>
                      <strong>{key}</strong>
                    </div>
                    <p>{value.toString()} </p>
                  </div>
                );
              })}
            </td>
          </tr>
          <tr>
            <td className="border">
              <strong>Testing</strong>
            </td>
            <td>
              {Object.entries(objTesting).map(([key, value]) => {
                return (
                  <div key={key}>
                    <div>
                      <strong>{key}</strong>
                    </div>
                    <p>{value.toString()} </p>
                  </div>
                );
              })}
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default TestDisciplineTable;
