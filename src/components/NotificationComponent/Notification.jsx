import { StyledDiv, StyledSubtitle } from './StyledNotificationComponents';

const Notification = ({ message }) => {
  return (
    <StyledDiv>
      <StyledSubtitle>{message}</StyledSubtitle>
    </StyledDiv>
  );
};

export default Notification;
