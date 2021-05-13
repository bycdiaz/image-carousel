import React, { useState } from 'react';

import LeftArrow from '../images/left.png';
import RightArrow from '../images/right.png';
import Arrow from '../components/Arrow';
import CarouselControls from '../components/CarouselControls';

function Carousel() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [currentNumber, setCurrentNumber] = useState(0);

  const sampleArray = [0, 1, 2, 3, 4];
  function captureArrowClick(direction) {
    let upcomingIndex = null;
    const index = direction === 'left' ? currentNumber - 1 : currentNumber + 1;
    setCurrentNumber(index);

    if (index % sampleArray.length >= 0) {
      upcomingIndex = index % sampleArray.length
    } else {
      upcomingIndex = (index % sampleArray.length) + sampleArray.length 
    }

    setCarouselIndex(upcomingIndex);
  }

  function CarouselArrows() {
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

    return arrows.map(arrow => {
      return (
        <Arrow
          arrowDetails={arrow}
          key={arrow.direction}
          captureArrowClick={captureArrowClick}
        />
      )
    })
  }

  return (
    <CarouselControls>
      <CarouselArrows />
    </CarouselControls>
  );
}

export default Carousel;
