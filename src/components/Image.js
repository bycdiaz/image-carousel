import React from 'react';
import Styled from "styled-components";

const ImageElement = Styled.img`
  min-width: 250px;
  max-width: 50%;

  box-shadow: 10px 10px 25px #808080;
  border-radius: 4%;
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
