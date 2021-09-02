import styled from 'styled-components';

export const StyledFeedbackOptions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 1rem;

  @media (min-width: 480px) {
    flex-direction: row;
  }
`;

export const StyledButton = styled.button`
  min-width: 160px;

  background-color: #e6e6e6;
  border: 1px solid #6723ba;
  border-radius: 0.5rem;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  font-size: 1.5rem;
  color: #6723ba;

  margin-bottom: 1rem;

  transition: background-color 250ms ease-in-out;

  @media (min-width: 480px) {
    margin-bottom: 0;
  }

  &:hover,
  &:focus {
    background-color: #fafafa;
  }
`;
