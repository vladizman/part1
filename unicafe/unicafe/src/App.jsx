import { useState } from "react";
import Button from "./Button";
import Statistics from "./Statistics";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const goodFeedback = "good";
  const neutralFeedback = "neutral";
  const badFeedback = "bad";

  const handleGoodClick = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
    setTotal(updatedGood + bad + neutral);
  };

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    setTotal(good + bad + updatedNeutral);
  };

  const handleBadClick = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
    setTotal(good + updatedBad + neutral);
  };

  const averageScore = total > 0 ? (good - bad) / total : 0;
  const positivePercentage = total > 0 ? ((good / total) * 100).toFixed(1) : 0;

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text={goodFeedback} onClick={handleGoodClick} />
      <Button text={neutralFeedback} onClick={handleNeutralClick} />
      <Button text={badFeedback} onClick={handleBadClick} />

      <h1>statistics</h1>
      {total > 0 ? (
        <Statistics
          total={total}
          averageScore={averageScore}
          positivePercentage={positivePercentage}
          good={good}
          neutral={neutral}
          bad={bad}
        />
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

export default App;
