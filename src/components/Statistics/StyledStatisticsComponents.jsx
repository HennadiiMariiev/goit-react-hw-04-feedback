import styled from 'styled-components';

export const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  margin: -1rem;
`;

export const StyledSubtitle = styled.h2`
  text-align: center;
  color: #6723ba;
  text-transform: uppercase;
  font-size: 2rem;

  margin-bottom: 1rem;
`;

export const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-weight: 600;
  font-size: 1.5rem;

  margin: 1rem;
`;

export const StyledSpan = styled.span`
  font-weight: 800;
  color: #6723ba;
  font-size: 1.5rem;

  margin-top: 0.5rem;
`;
