import React from 'react';
import Styled from "styled-components";

const QuotesContainer = Styled.div`

`

function Quotes(props) {
  return (
    <QuotesContainer>
      <p>"{props.quotes.catOne}"</p>
      <p>"{props.quotes.catTwo}"</p>
    </QuotesContainer>
  );
}

export default Quotes;
