import React from 'react';
import styled from 'styled-components';
import logo from '../assets/WhiteLogo.png'; // Assuming this path is correct for your logo
import { NavLink } from 'react-router-dom'; // Import NavLink for active link styling

const SidebarContainer = styled.div`
  width: 250px;
  background: #9C49CF; /* Matching the exact purple from the image */
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  padding: 1rem 0; /* Reduced padding to minimize gaps */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  box-sizing: border-box; /* Ensure padding doesn't affect width */
`;

const Logo = styled.img`
  width: 150px;
  margin: 1rem auto; /* Center logo and reduce vertical margin */
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  margin: 0.5rem 1rem; /* Reduced margin for tighter spacing */
  border-radius: 5px;
  font-size: 1rem;
  background: none;
  cursor: pointer;
  text-align: left;
  width: calc(100% - 2rem); /* Account for margin */
  padding: 0.5rem 1rem; /* Consistent padding */
  box-sizing: border-box;

  &:hover {
    background: #dbd8ddff; /* Slightly lighter purple for hover effect */
  }
  &.active {
    background: #efebf1ff; /* Active state to match hover */
    font-weight: bold;
    color: #9C49CF; /* Text color for active item */
  }
`;

const Footer = styled.div`
  font-size: 0.875rem;
  text-align: center;
  color: white;
  margin: 1rem 0; /* Reduced margin for tighter spacing */
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