import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header'; // Import the Header component
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

// Styled Components for the Add Exercise Form Page
const MainContainer = styled.div`
  margin-left: 250px; /* Accounts for the fixed sidebar width */
  padding: 2rem;
  background: #f5f5f5;
  min-height: 100vh;
  font-family: 'Inter', sans-serif; /* Ensure consistent font */
  display: flex;
  flex-direction: column;
`;

const FormContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 800px; /* Adjusted max-width for the form */
  margin: 0 auto; /* Center the form */
`;

const FormTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const FormSection = styled.div`
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

const FormSectionTitle = styled.h4`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 1rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
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

const Select = styled.select`
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
  min-height: 80px;
  resize: vertical;
  outline: none;
  &:focus {
    border-color: #9C49CF;
    box-shadow: 0 0 0 3px rgba(156, 73, 207, 0.2);
  }
`;

const UploadPlaceholder = styled.div`
  width: 100px;
  height: 100px;
  background: #f0f0f0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #ccc;
  cursor: pointer;
  border: 2px dashed #ddd;
  &:hover {
    border-color: #9C49CF;
  }
`;

const FormRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  & > ${FormGroup} {
    flex: 1;
    min-width: 200px;
  }
`;

const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
  width: 100%;
`;

const FormButton = styled.button<{ primary?: boolean }>`
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

const AddEquipmentButton = styled.button`
  background: none;
  border: 1px dashed #9C49CF;
  color: #9C49CF;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  &:hover {
    background: #f3e8ff;
  }
`;

// New Styled Components for the Add Equipment Modal
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
  max-width: 400px; /* Adjusted max-width for the equipment form */
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const ModalTitle = styled.h3` /* Moved ModalTitle definition here for clarity */
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const ModalFormGroup = styled(FormGroup)`
  margin-bottom: 1rem;
`;

const ModalLabel = styled(Label)`
  font-size: 1rem;
`;

const ModalInput = styled(Input)`
  font-size: 1rem;
`;

const ModalUploadPlaceholder = styled(UploadPlaceholder)`
  width: 80px;
  height: 80px;
  font-size: 1.5rem;
`;

const ModalActions = styled(FormActions)`
  justify-content: center;
  margin-top: 1.5rem;
`;

const AddWorkoutPage: React.FC = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [isAddEquipmentModalOpen, setIsAddEquipmentModalOpen] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Logic to handle form submission
    console.log('Exercise/Workout form submitted!');
    navigate('/workouts'); // Navigate back to workouts page after submission
  };

  const handleAddEquipmentClick = () => {
    setIsAddEquipmentModalOpen(true);
  };

  const handleCloseAddEquipmentModal = () => {
    setIsAddEquipmentModalOpen(false);
  };

  const handleSubmitEquipment = (event: React.FormEvent) => {
    event.preventDefault();
    // Logic to handle equipment form submission
    console.log('Equipment form submitted!');
    handleCloseAddEquipmentModal();
  };


  return (
    <MainContainer>
      <Header /> {/* Using the external Header component */}

      <FormContainer>
        <FormTitle>Add new Exercise</FormTitle>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <FormSection>
            <FormSectionTitle>Exercise Information</FormSectionTitle>
            <FormGroup>
              <Label htmlFor="exerciseName">Exercise Name</Label>
              <Input type="text" id="exerciseName" placeholder="Arms Exercise" required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="exerciseDescription">Exercise Description</Label>
              <TextArea id="exerciseDescription" placeholder="Description" required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="selectWorkout">Select a Workout</Label>
              <Select id="selectWorkout" required>
                <option value="">Select Workout</option>
                <option value="arms">Arms Workout</option>
                <option value="legs">Legs Workout</option>
              </Select>
            </FormGroup>
            <FormGroup style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '1rem' }}>
              <Label htmlFor="uploadVideo" style={{ marginRight: 'auto', marginBottom: 0 }}>Upload video</Label>
              <UploadPlaceholder>▶️</UploadPlaceholder>
              <input type="file" id="uploadVideo" accept="video/*" style={{ display: 'none' }} />
            </FormGroup>
            <FormActions>
              <FormButton type="button" onClick={() => navigate('/workouts')}>Back</FormButton>
              <FormButton primary type="submit">Save</FormButton>
            </FormActions>
          </FormSection>

          <FormSection>
            <FormSectionTitle>Workout Information</FormSectionTitle>
            <FormGroup>
              <Label htmlFor="workoutName">Workout Name</Label>
              <Input type="text" id="workoutName" placeholder="Arms Exercise" required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="workoutDescription">Workout Description</Label>
              <TextArea id="workoutDescription" placeholder="Description" required />
            </FormGroup>
            <FormRow>
              <FormGroup>
                <Label htmlFor="category">Category</Label>
                <Input type="text" id="category" placeholder="Category" required />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="caloriesBurned">Calories Burned</Label>
                <Input type="text" id="caloriesBurned" placeholder="340 Kcal" required />
              </FormGroup>
            </FormRow>
            <FormRow>
              <FormGroup>
                <Label htmlFor="duration">Duration</Label>
                <Input type="text" id="duration" placeholder="30 mins" required />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="level">Level</Label>
                <Input type="text" id="level" placeholder="Beginner" required />
              </FormGroup>
            </FormRow>
            <FormGroup style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '1rem' }}>
              <Label htmlFor="uploadImage" style={{ marginRight: 'auto', marginBottom: 0 }}>Upload Image</Label>
              <UploadPlaceholder>🖼️</UploadPlaceholder>
              <input type="file" id="uploadImage" accept="image/*" style={{ display: 'none' }} />
            </FormGroup>
            <AddEquipmentButton type="button" onClick={handleAddEquipmentClick}> {/* Added onClick */}
              <span role="img" aria-label="add">➕</span> Add equipment
            </AddEquipmentButton>
            <FormActions>
              <FormButton type="button" onClick={() => navigate('/workouts')}>Back</FormButton>
              <FormButton primary type="submit">Save</FormButton>
            </FormActions>
          </FormSection>
        </form>
      </FormContainer>

      {/* Add Equipment Modal */}
      {isAddEquipmentModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <ModalTitle>Add Equipment</ModalTitle>
            <form onSubmit={handleSubmitEquipment} style={{ width: '100%' }}>
              <ModalFormGroup>
                <ModalLabel htmlFor="equipmentName">Name</ModalLabel>
                <ModalInput type="text" id="equipmentName" placeholder="abc" required />
              </ModalFormGroup>
              <ModalFormGroup>
                <ModalLabel htmlFor="equipmentWeight">Weight</ModalLabel>
                <ModalInput type="text" id="equipmentWeight" placeholder="abc" required />
              </ModalFormGroup>
              <ModalFormGroup>
                <ModalLabel htmlFor="weightUnit">Weight Unit</ModalLabel>
                <ModalInput type="text" id="weightUnit" placeholder="abc" required />
              </ModalFormGroup>
              <ModalFormGroup style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '1rem' }}>
                <ModalLabel htmlFor="equipmentImage" style={{ marginRight: 'auto', marginBottom: 0 }}>Image</ModalLabel>
                <ModalUploadPlaceholder>🖼️</ModalUploadPlaceholder>
                <input type="file" id="equipmentImage" accept="image/*" style={{ display: 'none' }} />
              </ModalFormGroup>
              <ModalActions>
                <FormButton primary type="submit">Add Equipment</FormButton>
                <FormButton type="button" onClick={handleCloseAddEquipmentModal}>Cancel</FormButton>
              </ModalActions>
            </form>
          </ModalContent>
        </ModalOverlay>
      )}
    </MainContainer>
  );
};

export default AddWorkoutPage;
