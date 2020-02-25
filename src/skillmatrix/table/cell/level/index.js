import React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const ColorCircularProgress = makeStyles({
  0: {
    color: "#cecece"
  },
  1: {
    color: "#E0441C"
  },
  2: {
    color: "#DED12C"
  },
  3: {
    color: "#B4D31C"
  },
  4: {
    color: "#58B12C"
  },
  undefined: {
    color: "#f00"
  }
});

export function Level({ level, size }) {
  const classes = ColorCircularProgress();
  level = typeof level !== "number" ? 0 : level;
  const _level = level ? (100 / 4) * level : "undefined";

  return (
    <CircularProgress
      size={size || 16}
      thickness={level ? 24 : 1}
      className={classes[level]}
      variant="static"
      value={level === 0 ? 100 : _level}
    />
  );
}

Level.propTypes = {
  level: PropTypes.number,
  size: PropTypes.number
};
