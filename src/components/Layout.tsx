import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import Header from './Header';

const LayoutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentsContainer = styled.div`
  width: full;
  height: 60vh;
  margin: 2vw 20vw;
  min-width: 480px;
`;

const Layout: React.FC<PropsWithChildren> = props => {
  return (
    <LayoutContainer>
      <Header></Header>
      <ContentsContainer>{props.children}</ContentsContainer>
    </LayoutContainer>
  );
};

export default Layout;
