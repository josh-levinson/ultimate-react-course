export default function FinishScreen({
  dispatch,
  points,
  maxPossiblePoints,
  highscore,
}) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🏆";
  if (percentage >= 80 && percentage < 100) emoji = "🥳";
  if (percentage >= 50 && percentage < 80) emoji = "😊";
  if (percentage >= 25 && percentage < 50) emoji = "😐";
  if (percentage < 25) emoji = "😬";

  return (
    <>
      <p className="result">
        {emoji} You scored <strong>{points}</strong> out of {maxPossiblePoints}{" "}
        points ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">Highscore: {highscore}</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Take Again!
      </button>
    </>
  );
}
