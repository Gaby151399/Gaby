import { Children } from "react";
import Toogle from "./Toogle";

export default function Customer() {
  return (
    <div className="customer">
      <h3>COMMON CUSTOMER QUESTIONS</h3>
      <div className="row">
        <div className="col-8">
          <h5>QUESTION ONE</h5>
        </div>
        <Toogle>{Children}</Toogle>
      </div>
      <div className="row">
        <div className="col-8">
          <h5>QUESTION TWO</h5>
        </div>
        <Toogle>{Children}</Toogle>
      </div>
      <div className="row">
        <div className="col-8">
          <h5>QUESTION THREE</h5>
        </div>
        <Toogle>{Children}</Toogle>
      </div>
      <div className="row">
        <div className="col-8">
          <h5>QUESTION FOUR</h5>
        </div>
        <Toogle>{Children}</Toogle>
      </div>
    </div>
  );
}
