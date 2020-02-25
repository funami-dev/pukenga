import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Cockpit } from "./cockpit/index";
import { SkillmatrixTable } from "./skillmatrix/table/index";
import { Container, AppBar, Toolbar, Button } from "@material-ui/core";
import { ArrowBackIos } from "@material-ui/icons";

function App() {
  const dispatch = useDispatch();

  const { applicants } = useSelector(state => state.applicants);

  const currentApplicationId = useSelector(
    state => state.applicants.currentApplicationId
  );
  const requiredSkills = useSelector(state => state.applicants.requiredSkills);
  const currentApplication = useSelector(state => {
    return state.applicants.applicants.find(
      el => el.id === currentApplicationId
    );
  });
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {currentApplicationId ? (
            <Button
              edge="end"
              onClick={() =>
                dispatch({
                  type: "SET_APPLICATION_ID",
                  id: null
                })
              }
              color="secondary"
              variant="contained"
            >
              <ArrowBackIos /> Zurück
            </Button>
          ) : (
            <div></div>
          )}
        </Toolbar>
      </AppBar>

      {!currentApplicationId ? (
        <Container maxWidth="lg">
          <Cockpit data={{ requiredSkills, applicants }} />
        </Container>
      ) : (
        <SkillmatrixTable data={{ requiredSkills, currentApplication }} />
      )}
    </>
  );
}

export default App;
