type Props = {
  numQuestions: number;
  dispatch: any;
};

function StartScreen({ numQuestions, dispatch }: Props) {
  return (
    <div>
      <h2>Welcome to the React Quiz</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Start
      </button>
    </div>
  );
}

export default StartScreen;
