import React from 'react';
import Styled from "styled-components";

import Arrow from './Arrow';
import LeftArrow from '../images/left.png';
import RightArrow from '../images/right.png';

const ArrowsContainer = Styled.div`
  display: flex;
  flex-flow: row no-wrap;
  justify-content: space-around;
`
const arrows = [
  {
    direction: 'left',
    image: LeftArrow
  },
  {
    direction: 'right',
    image: RightArrow
  }
];

function CarouselControls(props) {
  function Arrows() {
    return arrows.map(arrow => {
      return (
        <Arrow
          arrowDetails={arrow}
          key={arrow.direction}
          captureArrowClick={props.captureArrowClick}
        />
      )
    })
  }

  return (
    <ArrowsContainer>
      <Arrows />
    </ArrowsContainer>
  );
}

export default CarouselControls;
