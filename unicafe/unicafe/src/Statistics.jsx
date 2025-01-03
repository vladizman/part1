import Feedback from "./StatisticLine";
import StatisticLine from "./StatisticLine";

const Statistics = ({
  total,
  averageScore,
  positivePercentage,
  good,
  neutral,
  bad,
}) => {
  return (
    <>
      <StatisticLine text={"Good"} number={good} />
      <StatisticLine text={"Neutral"} number={neutral} />
      <StatisticLine text={"Bad"} number={bad} />
      <p>Total: {total}</p>
      <p>average: {averageScore}</p>
      <p>Positive: {positivePercentage}</p>
    </>
  );
};

export default Statistics;
