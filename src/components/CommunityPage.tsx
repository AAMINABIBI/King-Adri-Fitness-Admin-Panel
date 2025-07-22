import React from 'react';
import styled from 'styled-components';
import Header from './Header';

// Styled Components for the Community Page
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

const StatusBadge = styled.span<{ type: 'reviewed' | 'pending' }>`
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  ${props => {
    switch (props.type) {
      case 'reviewed': return `background: #d1fae5; color: #065f46;`;
      case 'pending': return `background: #fef3c7; color: #92400e;`;
      default: return `background: #e0e0e0; color: #333;`;
    }
  }}
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  color: #666;
  padding: 0.25rem;
  border-radius: 4px;
  &:hover {
    background: #f0f0f0;
  }
`;

const CommunityPage: React.FC = () => {
  const reportedContent = [
    { type: 'Post', reportedItem: '“Text content...”', reason: 'Spam', reportedBy: 'user123', reportTime: '10 Jun, 10:45 AM', status: 'Reviewed' },
    { type: 'Comment', reportedItem: '“Bad comment...”', reason: 'Abuse', reportedBy: 'user789', reportTime: '10 Jun, 11:00 AM', status: 'Pending' },
  ];

  return (
    <MainContainer>
      <Header />
      <SectionContainer>
        <SectionHeader>
          <SectionTitle>Reported Content</SectionTitle>
        </SectionHeader>
        <StyledTable>
          <thead>
            <tr>
              <th>TYPE</th>
              <th>REPORTED ITEM</th>
              <th>REASON</th>
              <th>REPORTED BY</th>
              <th>REPORT TIME</th>
              <th>STATUS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {reportedContent.map((item, index) => (
              <tr key={index}>
                <td>{item.type}</td>
                <td>{item.reportedItem}</td>
                <td>{item.reason}</td>
                <td>{item.reportedBy}</td>
                <td>{item.reportTime}</td>
                <td><StatusBadge type={item.status.toLowerCase() as any}>{item.status}</StatusBadge></td>
                <td>
                  {item.status === 'Reviewed' ? (
                    <ActionButton>Block User</ActionButton>
                  ) : (
                    <ActionButton>⋮</ActionButton>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </SectionContainer>
    </MainContainer>
  );
};

export default CommunityPage;