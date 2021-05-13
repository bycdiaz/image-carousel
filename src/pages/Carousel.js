import React, { useState } from 'react';
import Styled from "styled-components";

import { arrowDetails } from '../json/arrowDetails';
import Arrow from '../components/Arrow';
import { imagesAndQuotes } from '../json/imagesAndQuotes';
import Image from '../components/Image';
import CarouselControls from '../components/CarouselControls';

const CarouselContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

function Carousel() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [currentNumber, setCurrentNumber] = useState(0);
  console.log(carouselIndex);
  const sampleArray = [0, 1, 2, 3, 4];
  function captureArrowClick(direction) {
    const index = direction === 'left' ? currentNumber - 1 : currentNumber + 1;
    setCurrentNumber(index);

    if (index % sampleArray.length >= 0) {
      setCarouselIndex(index % sampleArray.length);
    } else {
      setCarouselIndex((index % sampleArray.length) + sampleArray.length); 
    }
  }

  function CarouselArrows() {
    return arrowDetails.map(arrow => {
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
    <CarouselContainer>
      <Image image={imagesAndQuotes[carouselIndex].image}/>
      <CarouselControls>
        <CarouselArrows />
      </CarouselControls>
    </CarouselContainer>
  );
}

export default Carousel;
