import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  ArrowUpwardSharp,
  ArrowDownwardSharp,
  Check,
  Clear
} from "@material-ui/icons";
// import { isMatch } from "lodash";

import { getTendency } from "../../../../utils/helpers";
import { Level } from "../../cell/level/index";

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`;
const RowItem = styled.div`
  text-align: ${props => (props.align ? props.align : "center")};
  margin: ${props => (props.align ? null : "auto")};
`;

export function RowBody({ data }) {
  const { requiredSkills } = data;
  let { item } = data;
  const countRows = 6;
  item = { ...item, ...requiredSkills.find(el => el.skill === item.skill) };

  // TODO requiredSkillss nicht vorhanden abdecken
  // const missingSkills = requiredSkills.filter(el => !isMatch(item, el));
  // console.log(missingSkills);

  const tendency = getTendency({
    skill: item.level,
    requiredSkill: item.relevanz
  });
  function tendencyComponent(type) {
    switch (type) {
      case "DOWN":
        return <ArrowDownwardSharp color="secondary" />;
      case "UP":
        return <ArrowUpwardSharp style={{ color: "#0f0" }} />;
      case "EQUAL":
        return <Check color="action" />;
      case "CLEAR":
        return <Clear color="action" />;
      default:
        return <Clear />;
    }
  }

  if (!item) {
    return <div>k.A.</div>;
  }
  return (
    <Row length={countRows - 1}>
      <RowItem align="left">{item.skill || "no"}</RowItem>
      <RowItem>
        <Level level={item.level} />
      </RowItem>

      {["intended", "riskLevel", "relevanz"].map(el => (
        <RowItem key={el}>
          <Level level={item[el]} />
        </RowItem>
      ))}
      <RowItem>{tendencyComponent(tendency)}</RowItem>
    </Row>
  );
}

RowBody.propTypes = {
  data: PropTypes.object
};
