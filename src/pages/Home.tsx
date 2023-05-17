import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeContainer = styled.div`
  width: full;
  height: full;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const ToListPageLink = styled(Link)`
  background-color: blue;
  color: white;
  text-decoration: none;
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <ToListPageLink to={'/todos'}>TODO LIST</ToListPageLink>
    </HomeContainer>
  );
};

export default Home;
