import React from 'react';
import Styled from "styled-components";

const ArrowsContainer = Styled.div`
  display: flex;
  flex-flow: row no-wrap;
  justify-content: space-around;
`

function CarouselControls(props) {
  return (
    <ArrowsContainer>
      {props.children}
    </ArrowsContainer>
  );
}

export default CarouselControls;
