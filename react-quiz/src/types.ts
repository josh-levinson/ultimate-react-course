export type QuizQuestion = {
  question: string;
  options: string[];
  correctOption: number;
  points: number;
};

export type QuizState = {
  questions: QuizQuestion[];
  status: string;
  index: number;
  answer: number | null;
  points: number;
  highScore: number;
  secondsRemaining?: number;
};

export type QuizAction = {
  type: string;
  payload?: any;
};
