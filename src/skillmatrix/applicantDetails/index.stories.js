import React from "react";
import { ApplicantDetails } from "./index.js";

export default {
  component: ApplicantDetails,
  title: "Skillmatrix/ApplicantDetails"
};

export const withoutProp = () => <ApplicantDetails />;
export const withProp = () => (
  <ApplicantDetails
    data={{
      name: "Manni Mocker",
      links: [
        { label: "github", href: "https://github.com/facebook" },
        { label: "codepen", href: "https://codepen.io/" }
      ]
    }}
  />
);
