import React, { useEffect } from "react";
import "../styles/Result.css";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  attempts_Number,
  earnPoints_Number,
  flagResult,
} from "../helper/helper";

import { resetAllAction } from "../redux/question_reducer";
import { resetResultAction } from "../redux/result_reducer";
import { usePublishResult } from "../hooks/setResult";

export default function Result() {
  const dispatch = useDispatch();
  const {
    questions: { queue, answers },
    result: { result, userId },
  } = useSelector((state) => state);

  const totalPoints = queue.length * 5;
  const attempts = attempts_Number(result);
  const earnPoints = earnPoints_Number(result, answers, 5);
  const flag = flagResult(totalPoints, earnPoints);

  const Getperformance = () => {
    if (earnPoints < 50) {
      return "Average";
    } else if (earnPoints <= 80 && earnPoints >= 50) {
      return "Best";
    } else if (earnPoints > 80 && earnPoints <= 100) {
      return "Perfect";
    }
  };

  const performance = Getperformance();

  usePublishResult({
    result,
    username: userId,
    attempts,
    points: earnPoints,
    // achived: flag ? "Passed" : "Failed",
  });

  function onRestart() {
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  }

  return (
    <div className="result-container">
      <div className="result">
        <h1 className="title text-light">Your Score</h1>

        <div className="score">
          <div className="flex">
            <span>Username</span>
            <span className="bold">{userId || ""}</span>
          </div>
          <div className="flex">
            <span>Total Quiz Points : </span>
            <span className="bold">{totalPoints || 0}</span>
          </div>
          <div className="flex">
            <span>Total Questions : </span>
            <span className="bold">{queue.length || 0}</span>
          </div>
          <div className="flex">
            <span>Total Attempts : </span>
            <span className="bold">{attempts || 0}</span>
          </div>
          <div className="flex">
            <span>Total Earn Points : </span>
            <span className="bold">{earnPoints || 0}</span>
          </div>
          <div className="flex">
            <span>Result</span>
            <span
              style={{ color: `${flag ? "#07b860" : "#ff2a66"}` }}
              className="bold"
            >
              {performance}
            </span>
          </div>
        </div>

        <div className="start">
          <Link className="restart" to={"/"} onClick={onRestart}>
            Restart
          </Link>
        </div>
      </div>
    </div>
  );
}
