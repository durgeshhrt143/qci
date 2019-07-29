import React, { Component } from "react";
class Trail extends Component {
  render() {
    return (
      <div className="row">
        {this.props.trail.map((orgTrail, index) => (
          <div className="col m3 s12" key={orgTrail.pancard + index}>
            <div className="card trail">
              {Object.entries(orgTrail).map(([key, value]) => {
                return (
                  <div className="card-action" key={key}>
                    <strong>{key}</strong>
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

export default Trail;
