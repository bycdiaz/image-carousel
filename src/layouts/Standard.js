import React from 'react';
import Styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { headerFooterInfo } from '../json/headerFooterInfo';

const PageStyle = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  background-color: #f2f3f4;
`

function StandardLayout(props) {
  return (
    <PageStyle>
      <Header titleInfo={headerFooterInfo.header}/>
      {props.children}
      <Footer copyright={headerFooterInfo.footer.copyright}/>
    </PageStyle>
  )
}

export default StandardLayout;