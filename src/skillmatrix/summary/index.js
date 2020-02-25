import React from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Paper,
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Modal
} from "@material-ui/core";

export function Summary({ data }) {
  const { riskScore, missingSkills, matches } = data;
  const [open, setOpen] = React.useState(false);

  const toggleModal = () => {
    setOpen(!open);
  };

  return (
    <Box mt={{ xs: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              Matches
              <Typography variant="h2">{matches}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3}>
            <Box p={2}>RiskScore {riskScore} (comming soon&hellip;)</Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              Missing Skills
              <Typography variant="h2">{missingSkills.length}</Typography>
            </CardContent>
            <CardActions>
              {missingSkills.length > 0 ? (
                <>
                  <Button size="small" onClick={toggleModal}>
                    Request Skills
                  </Button>
                  <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={open}
                    onClose={toggleModal}
                  >
                    <Card>
                      <CardContent>
                        <Typography variant="h2">Request Skills</Typography>
                        {missingSkills.map((el, i) => (
                          <p key={`id_${i}`}>{el}</p>
                        ))}
                      </CardContent>
                      <CardActions>
                        <Button size="small">
                          Request Skills per eMail (comming soon)
                        </Button>
                      </CardActions>
                    </Card>
                  </Modal>
                </>
              ) : (
                <></>
              )}
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

Summary.propTypes = {
  data: PropTypes.object
};
Summary.defaultProps = {
  data: {
    riskScore: 0,
    missingSkills: [],
    matches: 0
  }
};
