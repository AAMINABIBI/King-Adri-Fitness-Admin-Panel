import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header'; // Import the Header component

// Styled Components (copied from Dashboard.tsx for consistency)
const MainContainer = styled.div`
  margin-left: 250px; /* Accounts for the fixed sidebar width */
  padding: 2rem;
  background: #f5f5f5;
  min-height: 100vh;
  font-family: 'Inter', sans-serif; /* Ensure consistent font */
  display: flex;
  flex-direction: column;
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

// New Styled Components for the Modal
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 700px; /* Adjusted max-width to match image */
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const ModalTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const UserDetailsContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
  align-items: flex-start;
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
`;

const UserAvatarSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex-shrink: 0; /* Prevent shrinking */
  width: 150px; /* Fixed width for avatar section */
`;

const UserAvatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 3px solid #9C49CF; /* Purple border */
`;

const UserName = styled.h4`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const UserContact = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.25rem;
`;

const UserStatusBadge = styled(StatusBadge)`
  margin-top: 0.5rem;
`;

const UserInfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two columns for info */
  gap: 1rem 2rem; /* Row gap, column gap */
  flex-grow: 1;
`;

const InfoItem = styled.div`
  div:first-child {
    font-weight: bold;
    color: #333;
    font-size: 0.9rem;
    margin-bottom: 0.25rem;
  }
  div:last-child {
    color: #666;
    font-size: 0.9rem;
  }
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  width: 100%;
`;

const ModalButton = styled.button<{ primary?: boolean }>`
  padding: 0.75rem 2rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.2s ease;

  background: ${props => (props.primary ? '#9C49CF' : '#e0e0e0')};
  color: ${props => (props.primary ? 'white' : '#333')};

  &:hover {
    background: ${props => (props.primary ? '#800080' : '#c0c0c0')};
  }
`;


const UserInformationPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null); // State to hold user data for modal

  const users = [
    { sl: 1, registeredOn: 'July 23, 2023', name: 'John Willson', gender: 'Male', email: 'john@gmail.com', status: 'SUBSCRIBER', dob: '25-23-2020', weight: '50 KGs', height: '176 cms', subscription: 'Basic Gym Monthly', phone: '+78405057379', avatar: 'https://placehold.co/100x100/A855F7/ffffff?text=JW' }, // Added more data
    { sl: 2, registeredOn: 'Aug 5, 2023', name: 'Selena Gomez', gender: 'Female', email: 'selena@gmail.com', status: 'SUBSCRIBER', dob: '10-01-1995', weight: '55 KGs', height: '165 cms', subscription: 'Premium Plan Yearly', phone: '+1234567890', avatar: 'https://placehold.co/100x100/A855F7/ffffff?text=SG' }, // Added more data
    // Add more user data as needed
  ];

  const handleViewClick = (user: any) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <MainContainer>
      <Header /> {/* Using the external Header component */}
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
                  {/* Changed edit icon to view icon and added onClick handler */}
                  <ActionButton onClick={() => handleViewClick(user)}>👁️</ActionButton>
                  <ActionButton>🗑️</ActionButton>
                </td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </UserTableSection>

      {/* User Information Modal */}
      {isModalOpen && selectedUser && (
        <ModalOverlay>
          <ModalContent>
            <ModalTitle>User Information</ModalTitle>
            <UserDetailsContainer>
              <UserAvatarSection>
                <UserAvatar src={selectedUser.avatar} alt={selectedUser.name} onError={(e) => { e.currentTarget.src = "https://placehold.co/100x100/A855F7/ffffff?text=👤"; }} />
                <UserName>{selectedUser.name}</UserName>
                <UserContact>{selectedUser.email}</UserContact>
                <UserContact>{selectedUser.phone}</UserContact>
                <UserStatusBadge>{selectedUser.status}</UserStatusBadge>
              </UserAvatarSection>
              <UserInfoGrid>
                <InfoItem>
                  <div>DATE OF BIRTH</div>
                  <div>{selectedUser.dob}</div>
                </InfoItem>
                <InfoItem>
                  <div>SUBSCRIPTION</div>
                  <div>{selectedUser.subscription}</div>
                </InfoItem>
                <InfoItem>
                  <div>WEIGHT</div>
                  <div>{selectedUser.weight}</div>
                </InfoItem>
                <InfoItem>
                  <div>REGISTERED ON</div>
                  <div>{selectedUser.registeredOn}</div>
                </InfoItem>
                <InfoItem>
                  <div>HEIGHT</div>
                  <div>{selectedUser.height}</div>
                </InfoItem>
                <InfoItem>
                  <div>GENDER</div>
                  <div>{selectedUser.gender}</div>
                </InfoItem>
              </UserInfoGrid>
            </UserDetailsContainer>
            <ModalActions>
              <ModalButton onClick={handleCloseModal}>Back</ModalButton>
              <ModalButton primary>Delete</ModalButton>
            </ModalActions>
          </ModalContent>
        </ModalOverlay>
      )}
    </MainContainer>
  );
};

export default UserInformationPage;
