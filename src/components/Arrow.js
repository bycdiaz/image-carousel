import React from 'react';
import Styled from "styled-components";

const ArrowImage = Styled.img`
  max-width: 30vw;
`

function Arrow(props) {
  return (
    <ArrowImage
      src={props.arrowDetails.image}
      alt={`arrow pointing ${props.arrowDetails.direction}`}
    />
  );
}

export default Arrow;
