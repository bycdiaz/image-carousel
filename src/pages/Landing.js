import React, { useState } from 'react';

import CarouselControls from '../components/CarouselControls';

function Landing() {
  const [arrowClicked, setArrowClicked] = useState('');

  function captureArrowClick(arrow) {
    setArrowClicked(arrow);
  }

  return (
    // captureArrowClicked is being passed through CarouselControls.
    // Two levels of prop drilling isn't too offensive, but consider
    // something like the Context API.
    <CarouselControls captureArrowClick={captureArrowClick}/>
  );
}

export default Landing;
