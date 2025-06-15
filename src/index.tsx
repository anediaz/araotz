import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./Router";
import { googleTrackId } from "./constants/constants";
import ReactGA from "react-ga";

const initializeReactGA = () => {
  ReactGA.initialize(googleTrackId);
  ReactGA.pageview("/", ["araozko-familiak-tracker"], "araozko familiak");
};

initializeReactGA();

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);