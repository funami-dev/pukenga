import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Row = styled.div`
  display: grid;
  /* grid-template-columns: repeat(${props => props.length}, 1fr); TODO  */
  grid-template-columns: repeat(6, 1fr);
  font-weight: bold;
  border-bottom: 1px dashed #cacaca;
`;

const RowItem = styled.div`
  text-align: ${props => (props.align ? props.align : "center")};
`;

export function RowHead({ items }) {
  if (!items) {
    return <div>leer</div>;
  }
  return (
    <Row length={items.length}>
      {items.map((item, i) => (
        <RowItem align={i === 0 ? "left" : "center"} key={item.label}>
          {item.label}
        </RowItem>
      ))}
    </Row>
  );
}

RowHead.propTypes = {
  items: PropTypes.array
};
