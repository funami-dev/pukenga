import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Cockpit } from "./index.js";
import rootReducer from "../store/reducers";
const store = createStore(rootReducer);

export default {
  component: Cockpit,
  title: "Cockpit"
};

export const withoutProp = () => (
  <Provider store={store}>
    <Cockpit />
  </Provider>
);
export const withEmptyData = () => (
  <Provider store={store}>
    <Cockpit data={{ requiredSkills: [], applicants: [] }} />
  </Provider>
);
