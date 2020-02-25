import React from "react";
import { Level } from "./index.js";

export default {
  component: Level,
  title: "Skillmatrix/Cell/Level"
};

export const withoutProp = () => <Level />;
// TODO dynamisch machen - vl mit storybook test
export const withProp0 = () => <Level level={0} />;
export const withProp1 = () => <Level level={1} />;
export const withProp2 = () => <Level level={2} />;
export const withProp3 = () => <Level level={3} />;
export const withProp4 = () => <Level level={4} />;
export const withPropUndefined = () => <Level level={undefined} />;
