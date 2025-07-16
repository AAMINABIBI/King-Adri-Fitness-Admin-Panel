import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import styled from 'styled-components'; // Import styled-components
import Header from './Header'; // Importing the Header component
import ArmExercise from '../assets/ArmExercise.png'; // Correctly import the image

// Register ChartJS components for Line chart
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Styled Components for Dashboard
const MainContainer = styled.div`
  margin-left: 250px; /* Accounts for the fixed sidebar width */
  padding: 2rem;
  background: #f5f5f5;
  min-height: 100vh;
  font-family: 'Inter', sans-serif; /* Ensure consistent font */
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap; /* Allow wrapping for responsiveness */
`;

const LeftColumn = styled.div`
  flex: 3;
  min-width: 600px; /* Adjust minimum width for responsiveness */
`;

const RightColumn = styled.div`
  flex: 1;
  min-width: 250px; /* Adjust minimum width for responsiveness */
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const OverviewSection = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  margin-bottom: 2rem;
`;

const OverviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const TabButton = styled.button<{ active?: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  border: none;
  background: ${props => (props.active ? '#e9d5ff' : 'transparent')};
  color: ${props => (props.active ? '#800080' : '#6b7280')};
  &:hover {
    background: #f3e8ff;
  }
`;

const ChartAndStats = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const StatsColumn = styled.div`
  margin-right: 2rem;
  text-align: left;
`;

const EarningsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  color: white;
`;

const PlanCard = styled.div`
  background: #800080; /* Purple color from the image */
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  font-size: 0.9rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const UserTableSection = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  margin-bottom: 2rem;
`;

const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const SearchInputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 0.6rem 1rem 0.6rem 2.5rem; /* Left padding for icon */
  border-radius: 6px;
  background: #e5e7eb; /* Gray-200 */
  border: none;
  outline: none;
  color: #374151; /* Gray-700 */
  width: 200px; /* Adjust width as needed */
  &::placeholder {
    color: #6b7280; /* Gray-500 */
  }
`;

const SearchIcon = styled.span`
  position: absolute;
  left: 1rem;
  color: #6b7280; /* Gray-500 */
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  th, td {
    padding: 0.75rem;
    text-align: left;
    border-bottom: 1px solid #e5e7eb; /* Gray-200 */
  }
  th {
    background: #f3e8ff; /* Purple-100 */
    color: #374151; /* Gray-700 */
    font-weight: 600;
  }
  tbody tr:nth-child(even) {
    background: #fbf5fe; /* Lighter purple for even rows */
  }
  tbody tr:last-child {
    border-bottom: none;
  }
  th:first-child { border-top-left-radius: 8px; }
  th:last-child { border-top-right-radius: 8px; }
`;

const StatusBadge = styled.span`
  background: #e9d5ff; /* Purple-200 */
  color: #800080; /* Purple-800 */
  padding: 0.25rem 0.75rem;
  border-radius: 9999px; /* Full rounded */
  font-size: 0.75rem;
  font-weight: 600;
`;

const ActionButton = styled.button`
  background: #d8b4fe; /* Purple-300 */
  color: #800080; /* Purple-800 */
  padding: 0.5rem;
  border-radius: 9999px; /* Full rounded */
  border: none;
  cursor: pointer;
  margin-right: 0.5rem;
  font-size: 0.875rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: #c084fc; /* Darker purple on hover */
  }
  &:last-child {
    background: #fca5a5; /* Red-300 */
    color: #b91c1c; /* Red-800 */
    &:hover {
      background: #ef4444; /* Darker red on hover */
    }
  }
`;

const WorkoutGridSection = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`;

const WorkoutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); /* Adjusted for 5 columns */
  gap: 1rem;
`;

const WorkoutCard = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 120%; /* Aspect ratio for the image */
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
  background: rgba(128, 0, 128, 0.85); /* Purple-800 with opacity */
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

// New Styled Components for Basic and Premium Plan cards
const PlanSummaryCard = styled.div<{ background: string }>`
  background: ${props => props.background};
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PlanIcon = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  padding: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  font-size: 1.5rem;
`;

const PlanText = styled.div`
  flex-grow: 1;
  font-size: 1.1rem;
  font-weight: 500;
`;

const PlanCount = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
`;


// Dashboard Component
const Dashboard: React.FC = () => {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Adjusted labels based on image
    datasets: [
      {
        label: 'New',
        data: [10, 20, 15, 25, 20, 30], // Sample data for 'New' line
        borderColor: '#800080', // Purple line
        backgroundColor: 'rgba(128, 0, 128, 0.2)',
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: '#800080',
        pointBorderColor: '#fff',
        pointHoverRadius: 7,
      },
      {
        label: 'Old',
        data: [20, 15, 25, 18, 28, 22], // Sample data for 'Old' line
        borderColor: '#FFD700', // Gold/Yellow line
        backgroundColor: 'rgba(255, 215, 0, 0.2)',
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: '#FFD700',
        pointBorderColor: '#fff',
        pointHoverRadius: 7,
      },
    ],
  };

  const chartOptions: any = { // Using 'any' for chartOptions due to complex Chart.js types
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          usePointStyle: true,
          boxWidth: 8,
          padding: 10,
        },
      },
      title: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#333',
          callback: function (value: number) {
            return value; // No dollar sign in the image for Y-axis
          },
        },
        grid: {
          color: '#eee',
          borderDash: [5, 5], // Dashed grid lines
        },
      },
      x: {
        ticks: {
          color: '#333',
        },
        grid: {
          display: false,
        },
      },
    },
  };

  const users = [
    { sl: 1, registeredOn: 'July 23, 2023', name: 'John', gender: 'Female', email: 'john@gmail.com', status: 'SUBSCRIBER' },
    { sl: 2, registeredOn: 'Aug 5, 2023', name: 'Selena', gender: 'Female', email: 'selena@gmail.com', status: 'SUBSCRIBER' },
    // Add more user data as needed
  ];

  const workouts = [
    { name: 'Arms Exercise', time: '20 min', burn: '95 kcal', image: ArmExercise },
    { name: 'Arms Exercise', time: '20 min', burn: '95 kcal', image: ArmExercise },
    { name: 'Arms Exercise', time: '20 min', burn: '95 kcal', image: ArmExercise },
    { name: 'Arms Exercise', time: '20 min', burn: '95 kcal', image: ArmExercise },
    { name: 'Arms Exercise', time: '20 min', burn: '95 kcal', image: ArmExercise },
  ];

  return (
    <MainContainer>
      <Header /> {/* Using the external Header component */}

      <ContentWrapper>
        <LeftColumn>
          {/* Dashboard Overview */}
          <OverviewSection>
            <OverviewHeader>
              <div>
                <h3 style={{ fontSize: '1.5rem', color: '#333', marginBottom: '0.5rem' }}>Dashboard</h3>
                <div style={{ fontSize: '0.9rem', color: '#666' }}>Overview of Latest Month</div>
              </div>
              <div>
                <TabButton active>Daily</TabButton>
                <TabButton>Weekly</TabButton>
                <TabButton>Monthly</TabButton>
                <TabButton>Yearly</TabButton>
              </div>
            </OverviewHeader>

            <ChartAndStats>
              <StatsColumn>
                <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem' }}>Current Month Earnings</div>
                <div style={{ fontSize: '2.5rem', color: '#333', fontWeight: 'bold', marginBottom: '0.5rem' }}>82</div>
                <div style={{ fontSize: '0.9rem', color: '#666' }}>New Joiners</div>
              </StatsColumn>
              <div style={{ flex: 1, height: '250px' }}>
                <Line data={chartData} options={chartOptions} />
              </div>
            </ChartAndStats>

            <EarningsGrid>
              <PlanCard>Wallet Balance<br />$4,567.53</PlanCard>
              <PlanCard>This Month Earnings<br />$1,699.53</PlanCard>
              <PlanCard>Personal Trainers<br />$2,951.53</PlanCard>
              <PlanCard>Earning<br />$2,567.53</PlanCard>
            </EarningsGrid>
            
          </OverviewSection>

          {/* User Information Table */}
          <UserTableSection>
            <TableHeader>
              <h3 style={{ fontSize: '1.25rem', color: '#333' }}>User Information</h3>
              <SearchInputContainer>
                <SearchIcon>🔍</SearchIcon>
                <SearchInput type="text" placeholder="Ex: type by name" />
              </SearchInputContainer>
            </TableHeader>
            <StyledTable>
              <thead>
                <tr>
                  <th>SL</th>
                  <th>REGISTERED ON</th>
                  <th>NAME</th>
                  <th>GENDER</th>
                  <th>EMAIL</th>
                  <th>STATUS</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{user.sl}</td>
                    <td>{user.registeredOn}</td>
                    <td>{user.name}</td>
                    <td>{user.gender}</td>
                    <td>{user.email}</td>
                    <td><StatusBadge>{user.status}</StatusBadge></td>
                    <td>
                      <ActionButton>✏️</ActionButton>
                      <ActionButton>🗑️</ActionButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </StyledTable>
          </UserTableSection>

          {/* Workout Information Grid */}
          <WorkoutGridSection>
            <TableHeader>
              <h3 style={{ fontSize: '1.25rem', color: '#333' }}>Workout Information</h3>
              <SearchInputContainer>
                <SearchIcon>🔍</SearchIcon>
                <SearchInput type="text" placeholder="Ex: type by name" />
              </SearchInputContainer>
            </TableHeader>
            <WorkoutGrid>
              {workouts.map((workout, index) => (
                <WorkoutCard key={index}>
                  <WorkoutImage
                    src={workout.image}
                    alt={workout.name}
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/160x192/cccccc/333333?text=No+Image"; // Fallback image
                    }}
                  />
                  <WorkoutOverlay>
                    <WorkoutTitle>{workout.name}</WorkoutTitle>
                    <WorkoutDetails>{workout.time} | Burn: {workout.burn}</WorkoutDetails>
                  </WorkoutOverlay>
                </WorkoutCard>
              ))}
            </WorkoutGrid>
          </WorkoutGridSection>
        </LeftColumn>

      
      </ContentWrapper>
    </MainContainer>
  );
};

export default Dashboard;
