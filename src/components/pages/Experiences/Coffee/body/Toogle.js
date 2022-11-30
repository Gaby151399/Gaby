import React from "react";
import { useState } from "react";

export default function Toogle({ children }) {
  const [show, setShow] = useState(false);
  const [click, setClick] = useState();
  const showDiv = () => {
    setShow(!show);
    setClick(!click);
  };

  return (
    <div>
      <div className="col-2 p-0">
        <button className="btnPlus" onClick={showDiv}>
          {click ? "-" : "+"}
        </button>
      </div>
      {show ? (
        <div className="div-hide-all" id="div-1">
          <p className="small" id="para1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab deserunt
            laborum nihil molestias earum autem facilis dolor? Quae hic, porro
            ratione repellat voluptatem quos aspernatur numquam iusto recusandae
            dolore minus!Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
            deserunt laborum nihil molestias earum autem facilis dolor? Quae
            hic, porro ratione repellat voluptatem quos aspernatur numquam iusto
            recusandae dolore minus!Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
