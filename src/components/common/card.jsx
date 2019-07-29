import React from "react";
const Card = props => {
  const { data, keyValue } = props;
  return (
    <div className="col l4 m6">
      <div className="card trail" style={{ height: 165 }}>
        <div className="card-content">
          <strong>{keyValue}</strong>
          <div className="divider" />
          <p>{data}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
