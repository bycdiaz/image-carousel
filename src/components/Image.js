import React from 'react';
import Styled from "styled-components";

const ImageElement = Styled.img`
  min-width: 250px;
  max-width: 50%;
`

function Image(props) {
  return (
    <ImageElement
      src={props.image}
      alt={'two cats at window'}
    />
  );
}

export default Image;
