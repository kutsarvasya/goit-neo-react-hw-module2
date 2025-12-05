import { useEffect, useState } from "react";
import "./App.css";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";
import Description from "../description/description";

const initialValue = () => {
  const savedValue = localStorage.getItem("feedback");
  return savedValue
    ? JSON.parse(savedValue)
    : {
        good: 0,
        neutral: 0,
        bad: 0,
      };
};

function App() {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(value));
  }, [value]);

  function updateFeedback(feedbackType) {
    setValue({
      ...value,
      [feedbackType]: value[feedbackType] + 1,
    });
  }

  function resetValues() {
    setValue({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }

  const totalFeedback = value.good + value.neutral + value.bad;
  const positiveFeedback = Math.round((value.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options handleClick={() => updateFeedback("good")}>Good</Options>
      <Options handleClick={() => updateFeedback("neutral")}>Neutral</Options>
      <Options handleClick={() => updateFeedback("bad")}>Bad</Options>
      <Options handleClick={resetValues}>Reset</Options>
      {totalFeedback ? (
        <Feedback
          good={value.good}
          neutral={value.neutral}
          bad={value.bad}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
