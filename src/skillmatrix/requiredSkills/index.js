import React from "react";
import {
  Box,
  Typography,
  Chip,
  Grid,
  Popper,
  Backdrop,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@material-ui/core";
import { Face } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { Level } from "../table/cell/level";

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
    background: "rgba(0,0,0,.8)"
  }
}));

export function RequiredSkills({ data }) {
  const { requiredSkills } = data;
  const dispatch = useDispatch();

  const classes = useStyles();
  const handleClose = () => {
    setAnchorEl(null);
    setSelectedSkill(null);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedSkill, setSelectedSkill] = React.useState(null);

  const setNewLevel = ({ value, type }) => {
    setAnchorEl(null);
    console.log(value, type);
    dispatch({
      type: "SET_REQUIRED_SKILl_LEVEL",
      payload: { value, type }
    });
  };

  const handleClick = ({ e, payload }) => {
    setAnchorEl(anchorEl ? null : e.currentTarget);
    setSelectedSkill(payload);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <Box my={{ xs: 4 }}>
      <Typography variant="h5">Required Skills (beta)</Typography>
      <Box my={2}>
        {["Frontend Developer", "UI Designer"].map(el => (
          <Chip
            disabled={true}
            key={el}
            size="small"
            icon={<Face />}
            label={el}
            clickable
            color="primary"
            onClick={e => console.log(e)}
            variant="outlined"
          />
        ))}
      </Box>
      {requiredSkills.length ? (
        <Grid container spacing={3}>
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Skill</TableCell>
                  <TableCell align="center">RiskLevel</TableCell>
                  <TableCell align="center">Relevanz</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {requiredSkills.map(item => (
                  <TableRow key={item.skill}>
                    <TableCell component="th" scope="row">
                      {item.skill}
                    </TableCell>
                    <TableCell align="center">
                      <Box
                        component="span"
                        onClick={e =>
                          handleClick({
                            e,
                            payload: { type: "riskLevel", value: item.skill }
                          })
                        }
                      >
                        <Level level={item.riskLevel} />
                      </Box>
                    </TableCell>
                    <TableCell align="center">
                      <Box
                        component="span"
                        onClick={e =>
                          handleClick({
                            e,
                            payload: { type: "relevanz", value: item.skill }
                          })
                        }
                      >
                        <Level level={item.relevanz} />
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Backdrop
            className={classes.backdrop}
            open={open}
            onClick={handleClose}
          >
            <Popper disablePortal id={id} open={open} anchorEl={anchorEl}>
              {[0, 1, 2, 3, 4].map(el => (
                <Box
                  key={el}
                  component="span"
                  onClick={() =>
                    setNewLevel({ type: selectedSkill, value: el })
                  }
                >
                  <Level size={30} level={el} />
                </Box>
              ))}
            </Popper>
          </Backdrop>
        </Grid>
      ) : (
        <Typography variant="subtitle2">NO DATA</Typography>
      )}
    </Box>
  );
}

RequiredSkills.propTypes = {
  data: PropTypes.object
};
RequiredSkills.defaultProps = {
  data: {
    preset: null,
    requiredSkills: []
  }
};
