import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import LoginScreen from './components/LoginScreen'; // Assuming you have this component
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar'; // Importing your Sidebar component
import UserInformationPage from './components/UserInformationPage'; // Corrected relative import path
import SubscriptionsPage from './components/SubscriptionsPage';
import CommunityPage from './components/CommunityPage';
import DietPlanPage from './components/DietPlanPage';
import WorkoutsPage from './components/WorkoutsPage';
import AddWorkoutPage from './components/AddWorkoutPage'; // New: Import the AddWorkoutPage

const App: React.FC = () => {
  const location = useLocation();

  return (
    <>
      {/* Tailwind CSS CDN for styling */}
      <script src="https://cdn.tailwindcss.com"></script>
      {/* Conditionally render Sidebar only on the dashboard, users, subscriptions, community, diet plan, and workouts paths */}
      {(location.pathname === '/dashboard' || location.pathname === '/users' || location.pathname === '/subscriptions' || location.pathname === '/community' || location.pathname === '/diet-plan' || location.pathname === '/workouts' || location.pathname === '/add-workout') && <Sidebar />}
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/" element={<LoginScreen />} /> {/* Default route */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<UserInformationPage />} />
        <Route path="/subscriptions" element={<SubscriptionsPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/diet-plan" element={<DietPlanPage />} />
        <Route path="/workouts" element={<WorkoutsPage />} />
        <Route path="/add-workout" element={<AddWorkoutPage />} /> {/* New: Route for Add Workout Page */}
      </Routes>
    </>
  );
};

export default App;
