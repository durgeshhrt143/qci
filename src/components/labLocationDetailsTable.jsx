import React, { Component } from "react";
class LabLocationDetailsTable extends Component {
  render() {
    const { lab_location_details } = this.props.lab;
    console.log(lab_location_details);
    return (
      <div className="row">
        {lab_location_details.map((lLD, index) => (
          <div className="col l4 m6" key={index}>
            <div className="card">
              {Object.entries(lLD).map(([key, value]) => {
                return (
                  <div className="card-content lld" key={key}>
                    <strong>{key}</strong>
                    <div className="divider" />
                    <p>{value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default LabLocationDetailsTable;
