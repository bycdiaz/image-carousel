import React from "react";
import Styled from "styled-components";

const FooterContainer = Styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  font-weight: bold;
  color: #283040;
  background-color: #BACDD9;
  padding: 20px 0;
  width: 100vw;

  box-shadow: 0px 1px 8px black;

`

function Footer(props) {
  return (
    <FooterContainer>
      <h2>{props.copyright}</h2>
    </FooterContainer>
  )
}

export default Footer;
