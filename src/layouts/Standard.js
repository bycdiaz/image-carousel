import React from "react";
import Styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";

const PageStyle = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* .content {
    flex: 1 0 auto;
  } */

  /* .footer {
    flex-shrink: 0;
  } */
`

function StandardLayout(props) {
  const titleInfo = {
    title: "Cats at Window",
    subtitle: "a short story"
  }

  return (
    <PageStyle>
      {/* <div className='content'> */}
        <Header titleInfo={titleInfo}/>
        {props.children}
        <Footer className='footer' copyrightStatement="Copyright © 2021 Cats"/>
      {/* </div> */}
    </PageStyle>
  )
}

export default StandardLayout;