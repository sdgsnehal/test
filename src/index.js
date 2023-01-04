import React from "react";
import ReactDOM from "react-dom";
import store from "./Store";
import { Provider } from "react-redux";
//import { Provider } from "react-redux";

import "semantic-ui-css/semantic.min.css";
import App from "./App";
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
