import React from 'react';
import styled from 'styled-components';
import Header from './Header';

// Styled Components for the Diet Plan Page
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

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  th, td {
    padding: 0.75rem;
    text-align: left;
    border-bottom: 1px solid #e5e7eb;
  }
  th {
    background: #f3e8ff;
    color: #374151;
    font-weight: 600;
  }
  tbody tr:nth-child(even) {
    background: #fbf5fe;
  }
  tbody tr:last-child {
    border-bottom: none;
  }
  th:first-child { border-top-left-radius: 8px; }
  th:last-child { border-top-right-radius: 8px; }
`;

const DietPlanPage: React.FC = () => {
  const dietData = [
    { food: 'Meat', meal: 'Breakfast', calories: 'Receiving', priorities: '08:00 AM', carbs: '20 gm' },
    { food: 'Burger', meal: 'Lunch', calories: 'Receiving', priorities: '01:00 PM', carbs: '30 gm' },
    { food: 'Burrito', meal: 'Dinner', calories: 'Receiving', priorities: '01:00 PM', carbs: '10 gm' },
    { food: 'Ice Cream', meal: 'Lunch', calories: 'Receiving', priorities: '01:00 AM', carbs: '90 gm' },
    { food: 'Pizza Slice', meal: 'Brunch', calories: 'Receiving', priorities: '11:00 AM', carbs: '50 gm' },
    { food: 'Cookies', meal: 'Break Fast', calories: 'Receiving', priorities: '08:00 AM', carbs: '30 gm' },
    { food: 'Fries', meal: 'Lunch', calories: 'Receiving', priorities: '01:00 AM', carbs: '90 gm' },
    { food: 'Egg & Bacon', meal: 'Dinner', calories: 'Receiving', priorities: '10:00 PM', carbs: '70 gm' },
    { food: 'Cupcake', meal: 'Break Fast', calories: 'Receiving', priorities: '08:00 AM', carbs: '40 gm' },
    { food: 'Taco', meal: 'Lunch', calories: 'Receiving', priorities: '01:00 AM', carbs: '80 gm' },
  ];

  return (
    <MainContainer>
      <Header />
      <SectionContainer>
        <SectionHeader>
          <SectionTitle>Diet Plan</SectionTitle>
        </SectionHeader>
        <StyledTable>
          <thead>
            <tr>
              <th>Food</th>
              <th>Meal</th>
              <th>Calories</th>
              <th>Priorities</th>
              <th>Carbs</th>
            </tr>
          </thead>
          <tbody>
            {dietData.map((item, index) => (
              <tr key={index}>
                <td>{item.food}</td>
                <td>{item.meal}</td>
                <td>{item.calories}</td>
                <td>{item.priorities}</td>
                <td>{item.carbs}</td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </SectionContainer>
    </MainContainer>
  );
};

export default DietPlanPage;