import React, { Component } from "react";
import GenralDetailsTable from "../genralDetailsTable";
import ContactPersonTable from "../contactPersonTable";
import ConductTestingTable from "../conductTestingTable";
import ParentOrgDetailTable from "../parentOrgDetailTable";
import LegalIdentityDetailsTable from "../legalIdentityDetailsTable";
import LabLocationDetailsTable from "../labLocationDetailsTable";
import DisciplineTable from "../dashboard-page/partials/disciplineTable";
import InternalAuditManagementReviewTable from "../internalAuditManagementReviewTable";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
class CommonTabs extends Component {
  state = {};
  render() {
    const { lab } = this.props;

    const tabs = Object.keys(lab);
    console.log(tabs);

    return (
      <Tabs>
        <TabList>
          {tabs.map((c, i) => {
            const replaced = c.split("_").join(" ");
            return <Tab key={i}>{replaced}</Tab>;
          })}
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
