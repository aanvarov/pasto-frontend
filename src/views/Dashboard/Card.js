import React from "react";
import { StyledCard } from "../../styles/components/Card.styled";

function Card(props) {
  const { icon, title, dataIndex } = props;
  return (
    <StyledCard>
      <div>{icon}</div>
      <div className="text_block">
        <h3 className="card_index">{dataIndex}</h3>
        <p>{title}</p>
      </div>
    </StyledCard>
  );
}

export default Card;
