import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  ListItem,
  ListItemText,
  List,
  Grid,
  Paper,
  Container,
  ListItemAvatar,
  Avatar,
  Typography,
  Box
} from "@material-ui/core";
import { EmojiPeople } from "@material-ui/icons";
import { RequiredSkills } from "../skillmatrix/requiredSkills";
import { Caption } from "../skillmatrix/caption";

export function Cockpit({ data }) {
  const { requiredSkills, applicants } = data;
  const dispatch = useDispatch();

  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item md={4} sm={12} xs={12}>
            <Paper elevation={3}>
              <Container>
                <Box my={{ sm: 6, xs: 0 }} mt={{ xs: 4 }}>
                  {applicants.length ? (
                    <List>
                      {applicants.map(item => (
                        <ListItem
                          key={item.name}
                          onClick={() =>
                            dispatch({
                              type: "SET_APPLICATION_ID",
                              id: item.id
                            })
                          }
                        >
                          <ListItemAvatar>
                            <Avatar>
                              <EmojiPeople />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText>{item.name}</ListItemText>
                        </ListItem>
                      ))}
                    </List>
                  ) : (
                    <Typography variant="subtitle2">+ add applicant</Typography>
                  )}
                </Box>
              </Container>
            </Paper>
          </Grid>
          <Grid item md={8} sm={12} xs={12}>
            <Paper elevation={5}>
              <Container>
                <Box my={{ sm: 6, xs: 0 }} mt={{ sm: 6, xs: 4 }}>
                  <RequiredSkills data={{ requiredSkills }} />
                </Box>
              </Container>
            </Paper>
          </Grid>
          <Grid item md={4} sm={12} xs={12}></Grid>
          <Grid item md={8} sm={12} xs={12}>
            <Caption />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

Cockpit.propTypes = {
  data: PropTypes.object
};
Cockpit.defaultProps = {
  data: {
    requiredSkills: [],
    applicants: []
  }
};
