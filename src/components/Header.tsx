import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #f5f5f5;
  border-bottom: 1px solid #ddd;
`;

const WelcomeText = styled.div`
  font-size: 1rem;
  color: #333;
`;

const ZoneDropdown = styled.select`
  padding: 0.5rem 1rem;
  border: 1px solid #a855f7;
  border-radius: 5px;
  background: white;
  cursor: pointer;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <WelcomeText>
        <b><span role="img" aria-label="wave">👋</span> Welcome Paula,</b>
        <br />Welcome back. Manage all zones of your fitness business here.
      </WelcomeText>
      <ZoneDropdown>
        <option>All zones</option>
        <option>Zone 1</option>
        <option>Zone 2</option>
      </ZoneDropdown>
    </HeaderContainer>
  );
};

export default Header;
