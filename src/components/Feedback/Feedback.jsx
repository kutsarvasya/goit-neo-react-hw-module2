function Feedback({ good, neutral, bad, total, positive }) {
  return (
    <>
      <div>Good: {good}</div>
      <div>Neutral: {neutral}</div>
      <div>Bad: {bad}</div>
      <div>Total: {total}</div>
      <div>Positive: {positive}%</div>
    </>
  );
}
export default Feedback;
