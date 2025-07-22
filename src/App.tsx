import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import LoginScreen from './components/LoginScreen';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import UserInformationPage from './components/UserInformationPage';
import SubscriptionsPage from './components/SubscriptionsPage';
import CommunityPage from './components/CommunityPage';
import DietPlanPage from './components/DietPlanPage';
import WorkoutsPage from './components/WorkoutsPage';
import AddWorkoutPage from './components/AddWorkoutPage';

// Container for the app layout with Sidebar and main content
const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

// Main content area that adjusts based on Sidebar presence
const MainContent = styled.main`
  flex: 1;
  padding: 20px;
  background: #ffffff;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const App: React.FC = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/' || location.pathname === '/login';

  return (
    <AppContainer>
      {/* Show Sidebar only on non-login pages */}
      {!isLoginPage && <Sidebar />}
      <MainContent>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/" element={<LoginScreen />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<UserInformationPage />} />
          <Route path="/subscriptions" element={<SubscriptionsPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/diet-plan" element={<DietPlanPage />} />
          <Route path="/workouts" element={<WorkoutsPage />} />
          <Route path="/add-workout" element={<AddWorkoutPage />} />
        </Routes>
      </MainContent>
    </AppContainer>
  );
};

export default App;