import React from "react";
import Styled from "styled-components";

const HeaderContainer = Styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-weight: bold;
  font-size: 24pt;
  color: #BACDD9;

  padding: 25px;
  background-color: #283040;
`

function Header(props) {
  return (
    <HeaderContainer>
      <h1>{props.titleInfo.title}:</h1>
      <h1>{props.titleInfo.subtitle}</h1>
    </HeaderContainer>
  )
}

export default Header;