import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/Pages/Home/App";
import * as serviceWorker from "./serviceWorker";
import GlobalStyles from "./GlobalStyles";

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
