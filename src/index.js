import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./styles/body.scss";
import "./styles/button.scss";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ReduxProvider store={store}>
    <DndProvider backend={HTML5Backend}>
      <App />
    </DndProvider>
  </ReduxProvider>
);
