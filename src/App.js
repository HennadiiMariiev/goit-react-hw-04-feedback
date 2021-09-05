import { useState } from 'react';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/NotificationComponent/Notification';
import { StyledApp } from './components/AppComponent/StyledApp';
import { useEffect } from 'react/cjs/react.development';

function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const increment = (value) => (value += 1);

  const onFeedbackClick = (option) => {
    switch (option) {
      case 'good':
        setGood(increment);
        break;
      case 'bad':
        setBad(increment);
        break;
      case 'neutral':
        setNeutral(increment);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    const res = Math.floor((good / countTotalFeedback()) * 100);
    return !Number.isNaN(res) ? res : 0;
  };

  const formatValue = (value) => {
    return `${Number(value).toFixed(0)}`;
  };

  return (
    <StyledApp>
      <Section title="Please leave feedback">
        <FeedbackOptions options={{ good, bad, neutral }} onLeaveFeedback={onFeedbackClick} />
        {countTotalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage}
            formatValue={formatValue}
          ></Statistics>
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </StyledApp>
  );
}

export default App;
