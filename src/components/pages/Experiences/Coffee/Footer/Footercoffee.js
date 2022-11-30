import React from "react";

export default function Footercoffee() {
  return (
    <div className="foot">
      <div className="row">
        <div className="col-3" id="logo-foot">
          <a href="#head">
            <img src="12.png" alt="logo" width="100"></img>
          </a>
          <div className="icon">
            <a href="http://www.facebook.com">
              <img src="facebook.png" alt="facebook"></img>
            </a>
            <a href="http://www.twitter.com">
              <img src="twitter.png" alt="twitter"></img>
            </a>
            <a href="http://www.linkedin.com">
              <img src="linkedin.png" alt="linkedin"></img>
            </a>
            <a href="http://www.youtube.com">
              <img src="youtube.png" alt="youtube"></img>
            </a>
          </div>
        </div>
        <div className="col-3" id="nav">
          <h6>MENU</h6>
          <ul>
            <li>
              <a href="#head">home</a>
            </li>
            <li>
              <a href="#service">service</a>
            </li>
            <li>
              <a href="#about">about</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
          </ul>
        </div>
        <div className="col-3" id="coffee-loc">
          <img src="16.png" width="100%" height="150px" alt="location"></img>
        </div>
        <div className="col-3" id="coffee-hot">
          <img src="6.jpg" alt="coffee-hot" width="100%" height="150px"></img>
        </div>
      </div>
    </div>
  );
}
