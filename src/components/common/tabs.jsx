import React, { Component } from "react";
import GenralDetailsTable from "../genralDetailsTable";
import ContactPersonTable from "../contactPersonTable";
import ConductTestingTable from "../conductTestingTable";
import ParentOrgDetailTable from "../parentOrgDetailTable";
import LegalIdentityDetailsTable from "../legalIdentityDetailsTable";
import LabLocationDetailsTable from "../labLocationDetailsTable";
import DisciplineTable from "../disciplineTable";
import InternalAuditManagementReviewTable from "../internalAuditManagementReviewTable";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
class CommonTabs extends Component {
  state = {};
  tabsColumn = [
    "General Details",
    "Contact Person",
    "Conduct Testing",
    "Parent Org Detail",
    "Legal Identity Details",
    "Internal Audit Management Review",
    "Lab Location Details",
    "Discipline"
  ];
  render() {
    const { lab } = this.props;
    return (
      <Tabs>
        <TabList>
          {this.tabsColumn.map((c, i) => (
            <Tab key={i}>{c}</Tab>
          ))}
        </TabList>

        <TabPanel>
          <GenralDetailsTable lab={lab} />
        </TabPanel>
        <TabPanel>
          <ContactPersonTable lab={lab} />
        </TabPanel>
        <TabPanel>
          <ConductTestingTable lab={lab} />
        </TabPanel>
        <TabPanel>
          <ParentOrgDetailTable lab={lab} />
        </TabPanel>
        <TabPanel>
          <LegalIdentityDetailsTable lab={lab} />
        </TabPanel>
        <TabPanel>
          <InternalAuditManagementReviewTable lab={lab} />
        </TabPanel>
        <TabPanel>
          <LabLocationDetailsTable lab={lab} />
        </TabPanel>
        <TabPanel>
          <DisciplineTable lab={lab} />
        </TabPanel>
      </Tabs>
    );
  }
}

export default CommonTabs;
