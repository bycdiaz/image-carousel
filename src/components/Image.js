import React from 'react';
import Styled from "styled-components";

const ImageElement = Styled.img`
  width: 250px;
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
