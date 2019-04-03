import React from "react";
import ReactDOM from "react-dom";

import NewCounter from "./NewCounter.js";
import OldCounter from "./OldCounter.js"
import Address from "./Address.js"

import "./index.css";

import * as serviceWorker from "./serviceWorker";


ReactDOM.render(<NewCounter />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
