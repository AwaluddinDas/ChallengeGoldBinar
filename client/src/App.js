import React, { Fragment } from "react";
import "./App.css";

//component

import InputEmploy from "./componen/InputEmploy";
import ListEmploy from "./componen/ListEmploy";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputEmploy />
        <br></br>
        <ListEmploy />
      </div>
    </Fragment>
  );
}

export default App;
