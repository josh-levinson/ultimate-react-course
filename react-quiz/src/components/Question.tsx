import Options from "./Options";

type Props = {
  question: number;
  dispatch: any;
  answer: number;
};

function Question({ question, dispatch, answer }: Props) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
