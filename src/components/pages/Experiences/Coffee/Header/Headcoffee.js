import React from "react";
import Navcoffee from "./Navcoffee";
import Separecoffee from "./Separecoffee"

export default function Headcoffee() {
  return (
    <div className="header" id="head">
      <Navcoffee/>
      <div className="head-one">
        <div className="row">
          <div className="col-6" id="coca-coffee">
            <h1>COCA COFFEE</h1>
            <p className="small">
              SERVICE FOR OFFICE <br />
              BREACKROOMS AND
              <br />
              FREE DELIVRY
            </p>
            <a href="#service">
              <button>OUR SERVICE</button>
            </a>
          </div>
          <div className="col-6" id="img">
            <img src="2.png" alt="font"></img>
          </div>
        </div>
      </div>
      <Separecoffee />
    </div>
  );
}
