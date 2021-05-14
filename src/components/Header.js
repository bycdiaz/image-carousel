import React from "react";
import Styled from "styled-components";

const HeaderContainer = Styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-weight: bold;
  font-size: 24pt;
  color: #BACDD9;

  width: 100vw;
  padding: 20px 0;
  background-color: #283040;

  box-shadow: 0 2px 6px black;
`

function Header(props) {
  return (
    <HeaderContainer>
      <h1>{props.titleInfo.title}</h1>
      <h1>{props.titleInfo.subtitle}</h1>
    </HeaderContainer>
  )
}

export default Header;