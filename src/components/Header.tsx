import React from 'react';
import styled from 'styled-components';

const HeaderContinaer = styled.div`
  width: 100vw;
  height: 10vh;
  z-index: 10;
  border-bottom: solid 1px rgb(243, 156, 18);
  min-width: 480px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header: React.FC = () => {
  return <HeaderContinaer>TODO LIST</HeaderContinaer>;
};

export default Header;
