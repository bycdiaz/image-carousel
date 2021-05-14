import React from 'react';
import Styled from "styled-components";

const QuotesContainer = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18pt;
  margin-top: 25px;
  font-weight: bold;
  line-height: 40px;
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
