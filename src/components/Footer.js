import React from "react";
import Styled from "styled-components";

const FooterContainer = Styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  font-weight: bold;
  color: #283040;

  /* margin-top: 1rem; */
  padding: 1rem;
  background-color: #BACDD9;
  position: fixed;
  bottom: 0;
  /* left: 0; */
  width: 100vw;
`

function Footer(props) {
  return (
    <FooterContainer>
      <h2>{props.copyrightStatement}</h2>
    </FooterContainer>
  )
}

export default Footer;
