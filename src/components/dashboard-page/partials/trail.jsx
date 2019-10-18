import React, { Component } from "react";
class Trail extends Component {
  render() {
    let newTrail = this.props.trail;
    const unshift = newTrail.splice(1, 1);
    newTrail.unshift(...unshift);
    console.log(newTrail);
    return (
      <div className="row">
        {newTrail.map((orgTrail, index) => (
          <div className="col m3 s12" key={orgTrail.pancard + index}>
            <div className="card trail">
              <div className="card-action">
                <strong>{`Organization :`}</strong>
                <p>{orgTrail.org_name}</p>
              </div>
              <div className="card-action">
                <strong>{`Email :`}</strong>
                <p>{orgTrail.email}</p>
              </div>
              <div className="card-action">
                <strong>{`Unique id :`}</strong>
                <p>{orgTrail.address}</p>
              </div>

              {/* <div className="card-action">
                <strong>{`State :`}</strong>
                <p>{orgTrail.state}</p>
              </div> */}
              {/* <div className="card-action">
                <strong>{`Country :`}</strong>
                <p>{orgTrail.country}</p>
              </div> */}
              <div className="card-action">
                <strong>{`GST No :`}</strong>
                <p>{orgTrail.gst_number}</p>
              </div>
              <div className="card-action">
                <strong>{`TAN No :`}</strong>
                <p>{orgTrail.tan_number}</p>
              </div>
              <div className="card-action">
                <strong>{`Pancard No :`}</strong>
                <p>{orgTrail.pancard}</p>
              </div>
              {/* <div className="card-action">
                <strong>{`Phone No :`}</strong>
                <p>{orgTrail.phone_number}</p>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Trail;
