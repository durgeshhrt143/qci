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
              <div className="card-content lld">
                <strong>{`Address :`}</strong>
                <div className="divider" />
                <p>{lLD.address}</p>
              </div>
              <div className="card-content lld">
                <strong>{`Pincode No :`}</strong>
                <div className="divider" />
                <p>{lLD.pincode}</p>
              </div>
              <div className="card-content lld">
                <strong>{`District :`}</strong>
                <div className="divider" />
                <p>{lLD.district}</p>
              </div>
              <div className="card-content lld">
                <strong>{`City :`}</strong>
                <div className="divider" />
                <p>{lLD.city}</p>
              </div>
              <div className="card-content lld">
                <strong>{`Fax No :`}</strong>
                <div className="divider" />
                <p>{lLD.fax}</p>
              </div>
              <div className="card-content lld">
                <strong>{`Email :`}</strong>
                <div className="divider" />
                <p>{lLD.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default LabLocationDetailsTable;
