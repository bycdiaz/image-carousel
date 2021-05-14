import React, { useState } from 'react';
import Styled from "styled-components";

import { arrowDetails } from '../json/arrowDetails';
import Arrow from '../components/Arrow';
import { imagesAndQuotes } from '../json/imagesAndQuotes';
import Image from '../components/Image';
import Quotes from '../components/Quotes';
import CarouselControls from '../components/CarouselControls';

const CarouselContainer = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 900px;
`

function Carousel() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [currentNumber, setCurrentNumber] = useState(0);

  function captureArrowClick(direction) {
    const index = direction === 'left' ? currentNumber - 1 : currentNumber + 1;
    setCurrentNumber(index);

    if (index % imagesAndQuotes.length >= 0) {
      setCarouselIndex(index % imagesAndQuotes.length);
    } else {
      setCarouselIndex((index % imagesAndQuotes.length) + imagesAndQuotes.length); 
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
      <Quotes quotes={imagesAndQuotes[carouselIndex].quotes}/>
      <CarouselControls>
        <CarouselArrows />
      </CarouselControls>
    </CarouselContainer>
  );
}

export default Carousel;
