import React from "react";
const Home = props => {
  return (
    <div className="home center-align">
      <div className="container">
        <div className="row">
          <div className="col l6">
            <span>1</span>
            <h3>ULR (Unique Lab Report) format #1</h3>
            <p>
              1<sup>st</sup> 6 digits will be accreditation certificate no.
              Issued by NABL to the CAB (e.g. TC2345, CC1234, RC5678 etc.).
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col l6 offset-l6">
            <span>2</span>
            <h3>ULR (Unique Lab Report) format #2</h3>
            <p>Next 2 digits indicate calendar year Example (18) for 2018.</p>
          </div>
        </div>
        <div className="row">
          <div className="col l6">
            <span>3</span>
            <h3>ULR (Unique Lab Report) format #3</h3>
            <p>
              Next 1 digit indicate lab no if the CAB is multi location has more
              than one lab for the accredited scope.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col l6 col l6 offset-l6">
            <span>4</span>
            <h3>ULR (Unique Lab Report) format #4</h3>
            <p>
              Next 8 digits (10th till 17th) will be running No. Starting from 1
              and continuing till year end. The number will restart from 0000001
              every year on 1st of Jan.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col l6">
            <span>5</span>
            <h3>ULR (Unique Lab Report) format #5</h3>
            <p>
              Last digit (18th) will be indicating the scope of the Lab (partial
              or full).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
