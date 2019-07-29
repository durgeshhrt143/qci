import React, { Component } from "react";
import _ from "lodash";
class TableBody extends Component {
  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {columns.map((column, index) => (
              <td key={index}>{data[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
