import React from "react";
import { RowBody } from "./index.js";

export default {
  component: RowBody,
  title: "Skillmatrix/Row/Body"
};

export const withoutProp = () => <RowBody data={{ requiredSkills: [] }} />;
export const withProp = () => (
  <RowBody
    data={{
      requiredSkills: [
        { skill: "Vue", relevanz: 2, riskLevel: 1 },
        { skill: "React", relevanz: 4, riskLevel: 4 },
        { skill: "design", relevanz: 2, riskLevel: 4 },
        { skill: "Angular", relevanz: 3, riskLevel: 3 },
        { skill: "zdog", relevanz: 3, riskLevel: 3 }
      ],
      item: { skill: "Vue", level: 4, intended: 3 }
    }}
  />
);

export const withZeros = () => (
  <RowBody
    data={{
      requiredSkills: [
        { skill: "Vue", relevanz: 2, riskLevel: 0 },
        { skill: "React", relevanz: 4, riskLevel: 4 },
        { skill: "design", relevanz: 2, riskLevel: 4 },
        { skill: "Angular", relevanz: 3, riskLevel: 3 },
        { skill: "zdog", relevanz: 3, riskLevel: 3 }
      ],
      item: { skill: "Vue", level: 0, intended: 3 }
    }}
  />
);
