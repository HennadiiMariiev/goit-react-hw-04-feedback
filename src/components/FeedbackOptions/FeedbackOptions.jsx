import { StyledButton, StyledFeedbackOptions } from './StyledFeedbackOptionComponents';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const emoji = { good: 0x1f600, neutral: 0x1f610, bad: 0x1f615 };

  const buttons = Object.keys(options).map((option, index) => {
    return (
      <StyledButton key={index} type="button" value={option} onClick={() => onLeaveFeedback(option)}>
        {`${String.fromCodePoint(emoji[option])} `}
        {option}
      </StyledButton>
    );
  });

  return <StyledFeedbackOptions>{buttons}</StyledFeedbackOptions>;
};

export default FeedbackOptions;
