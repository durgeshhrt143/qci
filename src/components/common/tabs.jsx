import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
class CommonTabs extends Component {
  state = {};
  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>General Details</Tab>
          <Tab>Contact Person</Tab>
          <Tab>Conduct Testing</Tab>
          <Tab>Parent Org Detail</Tab>
          <Tab>Legal Identity Details</Tab>
          <Tab>Internal Audit Management Review</Tab>
          <Tab>Lab Location Details</Tab>
          <Tab>Discipline</Tab>
        </TabList>

        <TabPanel>
          <table className="responsive-table">
            <tbody>
              <tr>
                <td>Type_of_cab</td>
                <td>Public </td>
              </tr>
              <tr>
                <td>Type_of_cab</td>
                <td>Public </td>
              </tr>
              <tr>
                <td>Type_of_cab</td>
                <td>Public </td>
              </tr>
            </tbody>
          </table>
        </TabPanel>
        <TabPanel>
          <table className="responsive-table">
            <tbody>
              <tr>
                <td>Type_of_cab</td>
                <td>Public </td>
              </tr>
              <tr>
                <td>Type_of_cab</td>
                <td>Public </td>
              </tr>
              <tr>
                <td>Type_of_cab</td>
                <td>Public </td>
              </tr>
            </tbody>
          </table>
        </TabPanel>
        <TabPanel>
          <table className="responsive-table">
            <tbody>
              <tr>
                <td>Type_of_cab</td>
                <td>Public </td>
              </tr>
              <tr>
                <td>Type_of_cab</td>
                <td>Public </td>
              </tr>
              <tr>
                <td>Type_of_cab</td>
                <td>Public </td>
              </tr>
            </tbody>
          </table>
        </TabPanel>
        <TabPanel>
          <table className="responsive-table">
            <tbody>
              <tr>
                <td>Type_of_cab</td>
                <td>Public </td>
              </tr>
              <tr>
                <td>Type_of_cab</td>
                <td>Public </td>
              </tr>
              <tr>
                <td>Type_of_cab</td>
                <td>Public </td>
              </tr>
            </tbody>
          </table>
        </TabPanel>
        <TabPanel>
          <table className="responsive-table">
            <tbody>
              <tr>
                <td>Type_of_cab</td>
                <td>Public </td>
              </tr>
              <tr>
                <td>Type_of_cab</td>
                <td>Public </td>
              </tr>
              <tr>
                <td>Type_of_cab</td>
                <td>Public </td>
              </tr>
            </tbody>
          </table>
        </TabPanel>
        <TabPanel>
          <table className="responsive-table">
            <tbody>
              <tr>
                <td>Type_of_cab</td>
                <td>Public </td>
              </tr>
              <tr>
                <td>Type_of_cab</td>
                <td>Public </td>
              </tr>
              <tr>
                <td>Type_of_cab</td>
                <td>Public </td>
              </tr>
            </tbody>
          </table>
        </TabPanel>
        <TabPanel>
          <table className="responsive-table">
            <tbody>
              <tr>
                <td>Type_of_cab</td>
              </tr>
              <tr>
                <td>Type_of_cab</td>
              </tr>
              <tr>
                <td>Type_of_cab</td>
              </tr>
            </tbody>
          </table>
        </TabPanel>
        <TabPanel>
          <table className="responsive-table">
            <tbody>
              <tr>
                <td>Type_of_cab</td>
                <td>Public </td>
              </tr>
              <tr>
                <td>Type_of_cab</td>
                <td>Public </td>
              </tr>
              <tr>
                <td>Type_of_cab</td>
                <td>Public </td>
              </tr>
            </tbody>
          </table>
        </TabPanel>
      </Tabs>
    );
  }
}

export default CommonTabs;
