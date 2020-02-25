import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { RequiredSkills } from "./index.js";
import rootReducer from "../../store/reducers";
const store = createStore(rootReducer);

export default {
  component: RequiredSkills,
  title: "Skillmatrix/RequiredSkills"
};

export const withoutProp = () => (
  <Provider store={store}>
    <RequiredSkills />
  </Provider>
);
export const withNoPreset = () => (
  <Provider store={store}>
    <RequiredSkills
      data={{
        preset: null,
        requiredSkills: []
      }}
    />
  </Provider>
);

export const withData = () => (
  <Provider store={store}>
    <RequiredSkills
      data={{
        preset: null,
        requiredSkills: [
          { skill: "Vue", relevanz: 4, riskLevel: 3 },
          { skill: "React", relevanz: 4, riskLevel: 4 },
          { skill: "design", relevanz: 2, riskLevel: 4 },
          { skill: "Angular", relevanz: 3, riskLevel: 3 },
          { skill: "zdog", relevanz: 3, riskLevel: 3 }
        ]
      }}
    />
  </Provider>
);
