import React from "react";
import PropTypes from "prop-types";

export function Skill({ name }) {
  // zZ nicht gebraucht aber kann mir gut vorstellen das hier noch zu gebrauchen
  return <div>Name: {name}</div>;
}

Skill.propTypes = {
  name: PropTypes.string
};

Skill.defaultProps = {
  name: "k.A."
};
