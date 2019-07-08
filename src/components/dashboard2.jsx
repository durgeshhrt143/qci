import React from "react";
import CommonTabs from "../components/common/tabs";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";
const Dashboard1 = props => {
  return (
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
                <section className="row">
                  <div className="col l8">
                    <div className="row">
                      <div className="col l3">
                        <div className="card ">
                          <table className="responsive-table highlight">
                            <tbody>
                              <tr>
                                <td>
                                  <strong>Email</strong>
                                  <div> admin@qcin.org</div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <strong>GST</strong>
                                  <div>TQ5EMV8J3D4MHHK</div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <strong>Organization</strong>
                                  <div>Quality council of India</div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <strong>Pan Card</strong>
                                  <div>5417010e33ce3a38a0</div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <strong>Phone</strong>
                                  <div>9711731737</div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="col l3">
                        <div className="card ">
                          <table className="responsive-table highlight">
                            <tbody>
                              <tr>
                                <td>
                                  <strong>Email</strong>
                                  <div> admin@qcin.org</div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <strong>GST</strong>
                                  <div>TQ5EMV8J3D4MHHK</div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <strong>Organization</strong>
                                  <div>Quality council of India</div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <strong>Pan Card</strong>
                                  <div>5417010e33ce3a38a0</div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <strong>Phone</strong>
                                  <div>9711731737</div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="col l3">
                        <div className="card ">
                          <table className="responsive-table highlight">
                            <tbody>
                              <tr>
                                <td>
                                  <strong>Email</strong>
                                  <div> admin@qcin.org</div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <strong>GST</strong>
                                  <div>TQ5EMV8J3D4MHHK</div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <strong>Organization</strong>
                                  <div>Quality council of India</div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <strong>Pan Card</strong>
                                  <div>5417010e33ce3a38a0</div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <strong>Phone</strong>
                                  <div>9711731737</div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="col l3">
                        <div className="card ">
                          <table className="responsive-table highlight">
                            <tbody>
                              <tr>
                                <td>
                                  <strong>Email</strong>
                                  <div> admin@qcin.org</div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <strong>GST</strong>
                                  <div>TQ5EMV8J3D4MHHK</div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <strong>Organization</strong>
                                  <div>Quality council of India</div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <strong>Pan Card</strong>
                                  <div>5417010e33ce3a38a0</div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <strong>Phone</strong>
                                  <div>9711731737</div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col l4">
                    <div className="card ">
                      <table className="responsive-table highlight">
                        <thead>
                          <tr>
                            <th>Certificate Detail</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <strong>Created On</strong>
                              <div> 2019-04-12 10:16:20 IST+0530</div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong>File Hash</strong>
                              <div>dfb69a8097e850e790c1ca0102096ac7e80f</div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong>File Name</strong>
                              <div>cell.flac</div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong>Issued to Name</strong>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
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
                <CommonTabs />
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
                    <table className="responsive-table">
                      <thead>
                        <tr>
                          <th
                            colSpan="2"
                            bgcolor="#26a69a"
                            style={{ color: "#fff" }}
                          >
                            Lab Discipline
                          </th>
                        </tr>
                      </thead>
                      <tbody className="card">
                        <tr>
                          <td>Caliberation</td>
                          <td>THERMAL</td>
                        </tr>
                        <tr>
                          <td>Medical</td>
                          <td />
                        </tr>
                        <tr>
                          <td>Pmp</td>
                          <td />
                        </tr>
                        <tr>
                          <td>Rmp</td>
                          <td />
                        </tr>
                        <tr>
                          <td>Testing</td>
                          <td>
                            <strong>FLUID FLOW</strong>
                            <p>Miscelleneous </p>
                            <strong>FLUID FLOW</strong>
                            <p>Miscelleneous </p>
                            <strong>FLUID FLOW</strong>
                            <p>Miscelleneous </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col l6">
                    <table>
                      <thead>
                        <tr>
                          <th
                            colSpan="2"
                            bgcolor="#26a69a"
                            style={{ color: "#fff" }}
                          >
                            Lab Discipline
                          </th>
                        </tr>
                      </thead>
                      <tbody className="card">
                        <tr>
                          <td>Caliberation</td>
                          <td>THERMAL</td>
                        </tr>
                        <tr>
                          <td>Medical</td>
                          <td />
                        </tr>
                        <tr>
                          <td>Pmp</td>
                          <td />
                        </tr>
                        <tr>
                          <td>Rmp</td>
                          <td />
                        </tr>
                        <tr>
                          <td>Testing</td>
                          <td>
                            <strong>FLUID FLOW</strong>
                            <p>Miscelleneous </p>
                            <strong>FLUID FLOW</strong>
                            <p>Miscelleneous </p>
                            <strong>FLUID FLOW</strong>
                            <p>Miscelleneous </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
                <div className="row">
                  <div className="col l4 m6">
                    <div className="card">
                      <div className="card-content">
                        <strong>Created On</strong>
                        <div className="divider" />
                        <p>2019-04-12 10:16:20 IST+0530</p>
                      </div>
                    </div>
                  </div>
                  <div className="col l4 m6">
                    <div className="card">
                      <div className="card-content">
                        <strong>Created On</strong>
                        <div className="divider" />
                        <p>2019-04-12 10:16:20 IST+0530</p>
                      </div>
                    </div>
                  </div>
                  <div className="col l4 m6">
                    <div className="card">
                      <div className="card-content">
                        <strong>Created On</strong>
                        <div className="divider" />
                        <p>2019-04-12 10:16:20 IST+0530</p>
                      </div>
                    </div>
                  </div>
                  <div className="col l4 m6">
                    <div className="card">
                      <div className="card-content">
                        <strong>Created On</strong>
                        <div className="divider" />
                        <p>2019-04-12 10:16:20 IST+0530</p>
                      </div>
                    </div>
                  </div>
                  <div className="col l4 m6">
                    <div className="card">
                      <div className="card-content">
                        <strong>Created On</strong>
                        <div className="divider" />
                        <p>2019-04-12 10:16:20 IST+0530</p>
                      </div>
                    </div>
                  </div>
                  <div className="col l4 m6">
                    <div className="card">
                      <div className="card-content">
                        <strong>Created On</strong>
                        <div className="divider" />
                        <p>2019-04-12 10:16:20 IST+0530</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Dashboard1;
