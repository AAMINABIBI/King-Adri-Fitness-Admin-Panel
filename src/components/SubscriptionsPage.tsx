import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header'; // Import the Header component

// Styled Components for the Subscriptions Page
const MainContainer = styled.div`
  margin-left: 250px; /* Accounts for the fixed sidebar width */
  padding: 2rem;
  background: #f5f5f5;
  min-height: 100vh;
  font-family: 'Inter', sans-serif; /* Ensure consistent font */
  display: flex;
  flex-direction: column;
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

const AddSubscriptionButton = styled.button`
  background: #9C49CF; /* Purple color */
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
    background: #800080; /* Darker purple on hover */
  }
`;

const PlanGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Responsive grid for plans */
  gap: 1rem;
`;

const PlanCard = styled.div`
  background: #f3e8ff; /* Light purple background */
  padding: 1.25rem;
  border-radius: 8px;
  border: 1px solid #e9d5ff; /* Light purple border */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PlanDetails = styled.div`
  display: flex;
  align-items: center;
`;

const PlanIcon = styled.div`
  background: #9C49CF; /* Purple background */
  color: white;
  border-radius: 50%;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  font-size: 1.2rem;
`;

const PlanName = styled.div`
  font-weight: 600;
  color: #333;
  font-size: 1.1rem;
`;

const PlanPricing = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Price = styled.div`
  font-weight: bold;
  color: #333;
  font-size: 1rem;
`;

const Duration = styled.div`
  font-size: 0.8rem;
  color: #666;
`;

const ActionIcons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ActionIcon = styled.button`
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

const PaymentInfoTableSection = styled(SectionContainer)`
  /* Inherits styles from SectionContainer */
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

const StatusBadge = styled.span<{ type: 'paid' | 'pending' | 'active' | 'expired' }>`
  padding: 0.25rem 0.75rem;
  border-radius: 9999px; /* Full rounded */
  font-size: 0.75rem;
  font-weight: 600;
  ${props => {
    switch (props.type) {
      case 'paid': return `background: #d1fae5; color: #065f46;`; // Greenish
      case 'pending': return `background: #fef3c7; color: #92400e;`; // Yellowish
      case 'active': return `background: #e9d5ff; color: #800080;`; // Purple
      case 'expired': return `background: #fee2e2; color: #991b1b;`; // Reddish
      default: return `background: #e0e0e0; color: #333;`;
    }
  }}
`;

const MoreActionsButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: #666;
  padding: 0.25rem;
  border-radius: 4px;
  &:hover {
    background: #f0f0f0;
  }
`;

// New Styled Components for the Add Subscription Modal
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
  max-width: 500px; /* Adjusted max-width for the form */
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

const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  color: #333;
  outline: none;
  &:focus {
    border-color: #9C49CF;
    box-shadow: 0 0 0 3px rgba(156, 73, 207, 0.2);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  color: #333;
  min-height: 100px;
  resize: vertical;
  outline: none;
  &:focus {
    border-color: #9C49CF;
    box-shadow: 0 0 0 3px rgba(156, 73, 207, 0.2);
  }
`;

const FormButton = styled.button<{ primary?: boolean }>`
  width: 100%;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.2s ease;
  margin-top: ${props => (props.primary ? '1.5rem' : '1rem')};

  background: ${props => (props.primary ? '#9C49CF' : '#e0e0e0')};
  color: ${props => (props.primary ? 'white' : '#333')};

  &:hover {
    background: ${props => (props.primary ? '#800080' : '#c0c0c0')};
  }
`;


const SubscriptionsPage: React.FC = () => {
  const [isAddSubscriptionModalOpen, setIsAddSubscriptionModalOpen] = useState(false);

  const subscriptionPlans = [
    { name: 'Basic Plan', monthlyPrice: '$9.99', yearlyPrice: '$89' },
    { name: 'Premium Plan', monthlyPrice: '$14.99', yearlyPrice: '$120' },
  ];

  const paymentInformation = [
    { sl: 1, user: 'John', plan: 'Lite Plan', dateSubscribed: 'July 23, 2023', payment: 'PAID', status: 'ACTIVE' },
    { sl: 2, user: 'Selena', plan: 'Premium Plan', dateSubscribed: 'Aug 5, 2023', payment: 'PENDING', status: 'Expired' },
  ];

  const handleAddSubscriptionClick = () => {
    setIsAddSubscriptionModalOpen(true);
  };

  const handleCloseAddSubscriptionModal = () => {
    setIsAddSubscriptionModalOpen(false);
  };

  const handleSubmitSubscription = (event: React.FormEvent) => {
    event.preventDefault();
    // Logic to handle form submission (e.g., send data to backend)
    console.log('Subscription form submitted!');
    handleCloseAddSubscriptionModal();
  };

  return (
    <MainContainer>
      <Header /> {/* Using the external Header component */}

      {/* Our Subscription Plans Section */}
      <SectionContainer>
        <SectionHeader>
          <SectionTitle>Our Subscription Plans</SectionTitle>
          <AddSubscriptionButton onClick={handleAddSubscriptionClick}>
            <span role="img" aria-label="add">➕</span> Add subscription
          </AddSubscriptionButton>
        </SectionHeader>
        <PlanGrid>
          {subscriptionPlans.map((plan, index) => (
            <PlanCard key={index}>
              <PlanDetails>
                <PlanIcon>📋</PlanIcon> {/* Icon for plan */}
                <PlanName>{plan.name}</PlanName>
              </PlanDetails>
              <PlanPricing>
                <Price>{plan.monthlyPrice}</Price>
                <Duration>Monthly</Duration>
                <Price>{plan.yearlyPrice}</Price>
                <Duration>Yearly</Duration>
              </PlanPricing>
              <ActionIcons>
                <ActionIcon>✏️</ActionIcon>
                <ActionIcon>🗑️</ActionIcon>
              </ActionIcons>
            </PlanCard>
          ))}
        </PlanGrid>
      </SectionContainer>

      {/* Payment Information Section */}
      <PaymentInfoTableSection>
        <SectionHeader>
          <SectionTitle>Payment Information</SectionTitle>
          <SearchInputContainer>
            <SearchIcon>🔍</SearchIcon>
            <SearchInput type="text" placeholder="Ex: type by name" />
          </SearchInputContainer>
        </SectionHeader>
        <StyledTable>
          <thead>
            <tr>
              <th>SL</th>
              <th>USER</th>
              <th>PLAN</th>
              <th>DATE SUBSCRIBED</th>
              <th>PAYMENT</th>
              <th>STATUS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {paymentInformation.map((item, index) => (
              <tr key={index}>
                <td>{item.sl}</td>
                <td>{item.user}</td>
                <td>{item.plan}</td>
                <td>{item.dateSubscribed}</td>
                <td><StatusBadge type={item.payment.toLowerCase() as any}>{item.payment}</StatusBadge></td>
                <td><StatusBadge type={item.status.toLowerCase() as any}>{item.status}</StatusBadge></td>
                <td>
                  <MoreActionsButton>⋮</MoreActionsButton> {/* Three dots icon */}
                </td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </PaymentInfoTableSection>

      {/* Add Subscription Modal */}
      {isAddSubscriptionModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <ModalTitle>Add Subscription</ModalTitle>
            <form onSubmit={handleSubmitSubscription} style={{ width: '100%' }}>
              <FormGroup>
                <Label htmlFor="subscriptionName">Subscription Name</Label>
                <Input type="text" id="subscriptionName" placeholder="ABC" required />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="price">Price $</Label>
                <Input type="text" id="price" placeholder="$$$" required />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="description">Description</Label>
                <TextArea id="description" placeholder="What's included in this plan?" required />
              </FormGroup>
              <FormButton primary type="submit">Add Subscription</FormButton>
              <FormButton type="button" onClick={handleCloseAddSubscriptionModal}>Cancel</FormButton> {/* Changed "Update" to "Cancel" for add form */}
            </form>
          </ModalContent>
        </ModalOverlay>
      )}
    </MainContainer>
  );
};

export default SubscriptionsPage;
