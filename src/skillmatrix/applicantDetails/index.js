import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Grid,
  Typography,
  CardActionArea,
  CardContent,
  CardActions,
  Card,
  Link
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

const emptyCard = () => {
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <Skeleton width="60%" />
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <Skeleton />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export function ApplicantDetails({ data }) {
  const preventDefault = event => event.preventDefault();
  const { name, links } = data;
  return (
    <Box my={{ xs: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={4} sm={4}>
          {emptyCard()}
        </Grid>
        <Grid item xs={4} sm={4}>
          <Card>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Frontend Developer
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              {links.map(link => (
                <Link onClick={preventDefault} key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4} sm={4}>
          {emptyCard()}
        </Grid>
      </Grid>
    </Box>
  );
}

ApplicantDetails.propTypes = {
  data: PropTypes.object
};
ApplicantDetails.defaultProps = {
  data: {
    name: 0,
    links: []
  }
};
