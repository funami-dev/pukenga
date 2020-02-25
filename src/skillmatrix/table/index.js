import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { getTendency } from "../../utils/helpers";

import { RowHead } from "./row/head";
import { RowBody } from "./row/body";
import { ApplicantDetails } from "../applicantDetails";
import { Caption } from "../caption";
import { Summary } from "../summary";
import { Divider, Container, Box } from "@material-ui/core";

const Table = styled.div`
  display: grid;
  grid-template-rows: repeat(6, 1fr);
`;

export function SkillmatrixTable({ data }) {
  const { requiredSkills, currentApplication } = data;

  let matches = 0;
  let riskScore = 0;
  let missingSkills = [];

  const array = currentApplication.skillmatrix;
  for (let index = 0; index < array.length; index++) {
    const el = array[index];
    const regSkill = requiredSkills.find(skill => skill.skill === el.skill);
    const tendency = getTendency({
      skill: el.level,
      requiredSkill: regSkill ? regSkill.relevanz : undefined
    });

    if (tendency === "UP" || tendency === "EQUAL") {
      ++matches;
    }
    if (tendency === "CLEAR") {
      missingSkills = [...missingSkills, el.skill];
    }
  }

  return currentApplication ? (
    <>
      <Container maxWidth="lg">
        <Box my={2}>
          <ApplicantDetails data={currentApplication} />
          {currentApplication.skillmatrix.length > 0 ? (
            <Table count={currentApplication.skillmatrix.length}>
              <RowHead items={currentApplication.head} />
              {currentApplication.skillmatrix.map((item, i) => (
                <RowBody key={"key_" + i} data={{ item, requiredSkills }} />
              ))}
            </Table>
          ) : (
            <div>no data</div>
          )}

          <Divider />
          <Summary data={{ riskScore, missingSkills, matches }} />
          <Caption />
        </Box>
      </Container>
    </>
  ) : (
    <div>keine daten</div>
  );
}

SkillmatrixTable.propTypes = {
  data: PropTypes.object
};
SkillmatrixTable.defaultProps = {
  data: {
    requiredSkills: [],
    currentApplication: {
      skillmatrix: []
    }
  }
};
