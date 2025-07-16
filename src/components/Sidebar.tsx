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
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
`;

const Logo = styled.img`
  width: 150px;
  margin: 1rem; /* Increased margin to match spacing in image */
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  margin-bottom: 1rem; /* Adjusted margin to match spacing */
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  background: none;
  cursor: pointer;
  text-align: left;
  width: 100%; /* Ensure full width for consistent look */
  padding: 0.5rem 1rem; /* Add padding for better click area */

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
  margin-top: 2rem; /* Adjusted margin to match spacing */
`;

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <div>
        <Logo src={logo} alt="King Adri's Fitness App Logo" />
        <StyledNavLink to="/dashboard">
          <span role="img" aria-label="dashboard">📋</span> Dashboard
        </StyledNavLink>
        <StyledNavLink to="/users"> {/* Updated to navigate to /users */}
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
