import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { SkillmatrixTable } from "./index.js";
import rootReducer from "../../store/reducers";
const store = createStore(rootReducer);

export default {
  component: SkillmatrixTable,
  title: "Skillmatrix/Table/Skillmatrix"
};

const mock = {
  requiredSkills: [],
  currentApplication: {
    id: "ABBBC",
    name: "Malle Fitz",
    links: [
      { label: "github", href: "github.com/derfu" },
      { label: "codepen", href: "codepen.io/funami" }
    ],
    head: [
      { label: "Skill" },
      { label: "Level" },
      { label: "Präferenz" },
      { label: "RiskLevel" },
      { label: "Relevanz" },
      { label: "Match" }
    ],
    skillmatrix: [
      { skill: "Vue", level: 4, intended: 3 },
      { skill: "React", level: 4, intended: 4 },
      { skill: "design", level: 2, intended: 4 },
      { skill: "Angular", level: 3, intended: 3 },
      { skill: "zdog", level: 3, intended: 3 }
    ]
  }
};

export const withoutProp = () => (
  <Provider store={store}>
    <SkillmatrixTable />
  </Provider>
);
export const withProp = () => (
  <Provider store={store}>
    <SkillmatrixTable data={mock} />
  </Provider>
);
