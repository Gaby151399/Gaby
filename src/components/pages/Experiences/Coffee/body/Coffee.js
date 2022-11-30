import { Routes, Route } from "react-router-dom";
import Bodycoffee from "./Bodycoffee"
import Headcoffee from "../Header/Headcoffee"
import Footercoffee from "../Footer/Footercoffee"

function Coffee() {
  document.title = "Coffee";
  return (
    <div className="App-todo">
      <div className="container-xxl">
        <Headcoffee/>
        <Routes>
          <Route path="/" element={<Bodycoffee/>} />
        </Routes>
        <Footercoffee/>
      </div>
    </div>
  );
}

export default Coffee;
