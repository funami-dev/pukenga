import React from "react";
import { Skill } from "./index.js";

export default {
  component: Skill,
  title: "Skillmatrix/Cell/Skill"
};

export const withoutProp = () => <Skill />;
export const withProp = () => <Skill name="React" />;
