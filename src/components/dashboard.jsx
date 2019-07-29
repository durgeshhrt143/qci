import React, { Component } from "react";
import CommonTabs from "./common/tabs";
import DisciplineTable from "../components/disciplineTable";
import Trail from "../components/trail";
import CretificationDetail from "../components/certificateDetail";
import TestDisciplineTable from "../components/testDisciplineTable";
import { connect } from "react-redux";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";
import Details from "./details";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.api = this.props.api;
  }
  render() {
    const { apiData } = this.api;
    const { data } = this.api.apiData;
    const { org_trail, lab, discipline } = this.api.apiData.data;
    if (data === undefined) {
      this.props.history.push("/");
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col l12">
            <Accordion allowZeroExpanded preExpanded={[0]}>
              <AccordionItem uuid={0}>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <strong>Organization trail</strong>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <section>
                    <Trail trail={org_trail} />
                    <CretificationDetail data={data} />
                  </section>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <strong>Laboratory</strong>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <CommonTabs lab={lab} />
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <strong>Scope Comparison </strong>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="row">
                    <div className="col l6">
                      <DisciplineTable lab={lab} />
                    </div>
                    <div className="col l6">
                      <TestDisciplineTable discipline={discipline} />
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <strong> Details </strong>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <Details data={data} />
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProp = state => {
  return {
    api: state.apiDataResponse.apiData,
    err: state.apiDataResponse.error
  };
};
// const mapDispatchToProps = dispatch => {
//   return {
//     onGetData: data => dispatch(actionCreater.fetchData(data)),
//     onError: () => dispatch(actionCreater.errorData())
//   };
// };
export default connect(mapStateToProp)(Dashboard);
