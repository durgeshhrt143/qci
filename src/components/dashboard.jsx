import React, { Component, Fragment } from "react";
import Form from "./common/form";
import CommonTabs from "./common/tabs";
import DisciplineTable from "../components/disciplineTable";
import Trail from "../components/trail";
import CretificationDetail from "../components/certificateDetail";
import TestDisciplineTable from "../components/testDisciplineTable";
import Details from "./details";
import { connect } from "react-redux";
import Joi from "joi-browser";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

class Dashboard extends Form {
  state = {
    count: 20,
    apis: [{ id: 0, name: "All" }, { id: 1, name: "Month" }],
    data: {
      api: ""
    },
    errors: {}
  };
  schema = {
    api: Joi.string().required()
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.data.api !== this.state.data.api) {
      if (this.state.data.api === "0") {
        this.setState({ count: 20 });
      } else {
        this.setState({ count: 50 });
      }
    }
  }
  render() {
    if (this.props.data === null) return null;
    const { data } = this.props.data;
    const { org_trail, lab, discipline } = this.props.data.data;

    return (
      <Fragment>
        {/* <section className="info-container">
          <div className="container">
            <div className="row">
              <div className="col l6 m6">
                <div className="card trail">
                  <div className="card-content">
                    <strong className="l-content">User Activity</strong>
                    <form
                      onSubmit={this.handleSubmit}
                      className="apis-container r-content"
                    >
                      {this.renderSelect("api", "Apis Hits", this.state.apis)}
                    </form>
                    <div className="divider"></div>
                    <strong>Apis Hits</strong>
                    <span className="hits">{this.state.count}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section className="dashboard-container" style={{ marginTop: "150px" }}>
          <div className="container">
            <div className="row">
              <div className="col l12">
                <Accordion allowZeroExpanded>
                  <AccordionItem>
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
        </section>
      </Fragment>
    );
  }
}
const mapStateToProp = state => {
  return {
    data: state.apiDataResponse.data
  };
};

export default connect(mapStateToProp)(Dashboard);
