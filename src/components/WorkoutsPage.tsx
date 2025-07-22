import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import ArmExercise from '../assets/ArmExercise.png';
import { useNavigate } from 'react-router-dom';

// Styled Components for the Workouts Page
const MainContainer = styled.div`
  margin-left: 250px; /* Matches Sidebar width */
  padding: 2rem 2rem 2rem 1rem; /* Reduced left padding to 1rem */
  background: #f5f5f5;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  @media (max-width: 768px) {
    margin-left: 0; /* Remove margin for mobile */
    padding: 1rem;
  }
`;

const SectionContainer = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  margin-bottom: 2rem;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
`;

const AddWorkoutButton = styled.button`
  background: #9C49CF;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  &:hover {
    background: #800080;
  }
`;

const WorkoutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1rem;
`;

const WorkoutCard = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 120%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const WorkoutImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const WorkoutOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(128, 0, 128, 0.85);
  color: white;
  padding: 0.75rem;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  text-align: left;
`;

const WorkoutTitle = styled.p`
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
`;

const WorkoutDetails = styled.div`
  font-size: 0.75rem;
  opacity: 0.9;
`;

const CardActionButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(255, 255, 255, 0.3);
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1rem;
  color: white;
  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }
`;

const WorkoutsPage: React.FC = () => {
  const navigate = useNavigate();

  const workouts = [
    { name: 'Arms Exercise', time: '20 min', burn: '95 kcal', image: ArmExercise },
    { name: 'Arms Exercise', time: '20 min', burn: '95 kcal', image: ArmExercise },
    { name: 'Arms Exercise', time: '20 min', burn: '95 kcal', image: ArmExercise },
    { name: 'Arms Exercise', time: '20 min', burn: '95 kcal', image: ArmExercise },
    { name: 'Arms Exercise', time: '20 min', burn: '95 kcal', image: ArmExercise },
    { name: 'Arms Exercise', time: '20 min', burn: '95 kcal', image: ArmExercise },
    { name: 'Arms Exercise', time: '20 min', burn: '95 kcal', image: ArmExercise },
    { name: 'Arms Exercise', time: '20 min', burn: '95 kcal', image: ArmExercise },
  ];

  const handleAddWorkoutClick = () => {
    navigate('/add-workout');
  };

  return (
    <MainContainer>
      <Header />
      <SectionContainer>
        <SectionHeader>
          <SectionTitle>Workouts</SectionTitle>
          <AddWorkoutButton onClick={handleAddWorkoutClick}>
            <span role="img" aria-label="add">➕</span> Add Workout
          </AddWorkoutButton>
        </SectionHeader>
        <WorkoutGrid>
          {workouts.map((workout, index) => (
            <WorkoutCard key={index}>
              <CardActionButton>🗑️</CardActionButton>
              <WorkoutImage
                src={workout.image}
                alt={workout.name}
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/160x192/cccccc/333333?text=No+Image";
                }}
              />
              <WorkoutOverlay>
                <WorkoutTitle>{workout.name}</WorkoutTitle>
                <WorkoutDetails>Time: {workout.time} | Burn: {workout.burn}</WorkoutDetails>
              </WorkoutOverlay>
            </WorkoutCard>
          ))}
        </WorkoutGrid>
      </SectionContainer>
    </MainContainer>
  );
};

export default WorkoutsPage;