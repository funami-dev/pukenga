import React from "react";
import {
  Grid,
  Paper,
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon
} from "@material-ui/core";
import { Level } from "../../skillmatrix/table/cell/level";

export function Caption() {
  return (
    <Box mt={{ xs: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3}>
            <Box p={2}>
              <Typography>Legende Skills</Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Level level={4} />
                  </ListItemIcon>
                  Can teach others
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Level level={3} />
                  </ListItemIcon>
                  Can start from nothing and create
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Level level={2} />
                  </ListItemIcon>
                  Can tweak it or do easy bug fixes
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Level level={1} />
                  </ListItemIcon>
                  Can run and use the tools needed
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Level level={0} />
                  </ListItemIcon>
                  Know nothing
                </ListItem>
              </List>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3}>
            <Box p={2}>
              <Typography>Legende Präferenz</Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Level level={4} />
                  </ListItemIcon>
                  Please, Please, Please…
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Level level={3} />
                  </ListItemIcon>
                  Strongly interested
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Level level={2} />
                  </ListItemIcon>
                  Wiling to learn
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Level level={1} />
                  </ListItemIcon>
                  Actively Avoid, unless coerced
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Level level={0} />
                  </ListItemIcon>
                  I'd quit rather than do this
                </ListItem>
              </List>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
