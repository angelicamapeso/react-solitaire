import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./styles/body.scss";
import "./styles/button.scss";
import { Provider } from "react-redux";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
