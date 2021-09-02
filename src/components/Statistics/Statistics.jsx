import { StyledDiv } from '../NotificationComponent/StyledNotificationComponents';
import { StyledList, StyledItem, StyledSubtitle, StyledSpan } from './StyledStatisticsComponents';

import AnimatedNumber from 'animated-number-react';

const Statistics = ({ good, neutral, bad, total, positivePercentage, formatValue }) => {
  return (
    <StyledDiv>
      <StyledSubtitle>Statistics</StyledSubtitle>
      <StyledList>
        <StyledItem>
          Good: <StyledSpan>{good}</StyledSpan>
        </StyledItem>
        <StyledItem>
          Bad: <StyledSpan>{bad}</StyledSpan>
        </StyledItem>
        <StyledItem>
          Neutral: <StyledSpan>{neutral}</StyledSpan>
        </StyledItem>
        <StyledItem>
          Total: <StyledSpan>{total}</StyledSpan>
        </StyledItem>
        <StyledItem>
          Positive feedback:
          <StyledSpan>
            <AnimatedNumber value={positivePercentage} duration={300} formatValue={formatValue} />%
          </StyledSpan>
        </StyledItem>
      </StyledList>
    </StyledDiv>
  );
};

export default Statistics;
