import React, { Component } from "react";
import Card from "../components/common/card";
class Details extends Component {
  render() {
    const {
      created_on,
      file_hash,
      file_name,
      issued_to_name,
      asset_address,
      batch_id,
      issued_to_address,
      transaction_id,
      ULR
    } = this.props.data;
    return (
      <div className="row">
        <Card data={asset_address} keyValue="Asset Address" />
        <Card data={batch_id} keyValue="Batch Id" />
        <Card data={created_on} keyValue="Created On" />
        <Card data={file_hash} keyValue="File Hash" />
        <Card data={file_name} keyValue="File Name" />
        <Card data={issued_to_address} keyValue="Issued To Address" />
        <Card data={issued_to_name} keyValue="Issued To Name" />
        <Card data={transaction_id} keyValue="Transaction Id" />
        <Card data={ULR} keyValue="ULR" />
      </div>
    );
  }
}

export default Details;
