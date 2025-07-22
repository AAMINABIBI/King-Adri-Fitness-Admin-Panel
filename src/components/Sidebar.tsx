import React from 'react';
import styled from 'styled-components';
import logo from '../assets/WhiteLogo.png'; // Assuming this path is correct for your logo
import { NavLink } from 'react-router-dom';

const SidebarContainer = styled.div`
  width: 250px;
  background: #9C49CF;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0.75rem 0; /* Adjusted top padding to balance logo placement */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%; /* Full width on mobile if sidebar is toggled */
    height: auto; /* Allow height to adjust */
    position: absolute; /* Assuming toggleable sidebar */
    z-index: 1000;
  }
`;

const Logo = styled.img`
  width: 150px;
  margin: 0.5rem auto; /* Reduced vertical margin for tighter, balanced spacing */
  display: block; /* Ensure centering */
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  margin: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 1rem;
  background: none;
  cursor: pointer;
  text-align: left;
  width: calc(100% - 2rem);
  padding: 0.5rem 1rem;
  box-sizing: border-box;

  &:hover {
    background: #dbd8ddff;
  }
  &.active {
    background: #efebf1ff;
    font-weight: bold;
    color: #9C49CF;
  }
`;

const Footer = styled.div`
  font-size: 0.875rem;
  text-align: center;
  color: white;
  margin: 1rem 0;
`;

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <div>
        <Logo src={logo} alt="King Adri's Fitness App Logo" />
        <StyledNavLink to="/dashboard">
          <span role="img" aria-label="dashboard">📋</span> Dashboard
        </StyledNavLink>
        <StyledNavLink to="/users">
          <span role="img" aria-label="users">👥</span> Users
        </StyledNavLink>
        <StyledNavLink to="/subscriptions">
          <span role="img" aria-label="subscriptions">💸</span> Subscriptions
        </StyledNavLink>
        <StyledNavLink to="/workouts">
          <span role="img" aria-label="workouts">💪</span> Workouts
        </StyledNavLink>
        <StyledNavLink to="/community">
          <span role="img" aria-label="community">💬</span> Community
        </StyledNavLink>
        <StyledNavLink to="/diet-plan">
          <span role="img" aria-label="diet-plan">📅</span> Diet Plan
        </StyledNavLink>
      </div>
      <Footer>© 2025 King Adri | All Rights Reserved</Footer>
    </SidebarContainer>
  );
};

export default Sidebar;