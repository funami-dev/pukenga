import React from "react";
import { Summary } from "./index.js";

export default {
  component: Summary,
  title: "Skillmatrix/Summary"
};

export const withoutProp = () => <Summary />;
export const withProp = () => (
  <Summary data={{ missingSkills: [], matches: 10, riskScore: 0.2 }} />
);

export const withMissingSkills = () => (
  <Summary data={{ missingSkills: ["design"], matches: 10, riskScore: 0.2 }} />
);
