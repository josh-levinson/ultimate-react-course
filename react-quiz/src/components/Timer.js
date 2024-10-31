import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  useEffect(() => {
    setInterval(() => dispatch("tick"), 1000);
  }, [dispatch]);

  return <div className="timer">{secondsRemaining}</div>;
}

export default Timer;
