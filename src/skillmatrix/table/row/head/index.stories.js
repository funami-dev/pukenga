import React from "react";
import { RowHead } from "./index.js";

export default {
  component: RowHead,
  title: "Skillmatrix/Row/Head"
};

export const withoutProp = () => <RowHead />;
export const withProp = () => (
  <RowHead
    items={[{ label: "Skill" }, { label: "Level" }, { label: "Präferenz" }]}
  />
);
