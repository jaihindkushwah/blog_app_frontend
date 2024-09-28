"use client";
import {
  AssessmentQuestion,
  AssessmentQuestions,
} from "@/components/pages/mcqquizz/data";
import React, { useState } from "react";

const QuizAssessmentContext = React.createContext<{
  questions: AssessmentQuestion[];
  setQuestions: React.Dispatch<React.SetStateAction<AssessmentQuestion[]>>;
  currentQuestion: number;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  showScore: boolean;
  setShowScore: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  questions: [...AssessmentQuestions],
  setQuestions: () => {},
  currentQuestion: 0,
  setCurrentQuestion: () => {},
  score: 0,
  setScore: () => {},
  showScore: false,
  setShowScore: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const useQuizAssessment = () => {
  return React.useContext(QuizAssessmentContext);
};

function QuizAssessmentProvider({ children }: Props) {
  const [questions, setQuestions] = useState<AssessmentQuestion[]>([
    ...AssessmentQuestions,
  ]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const handleNextQuestion = () => {};
  const handleSubmitAndNext = () => {};

  return (
    <QuizAssessmentContext.Provider
      value={{
        questions,
        setQuestions,
        currentQuestion,
        setCurrentQuestion,
        score,
        setScore,
        showScore,
        setShowScore,
      }}
    >
      {children}
    </QuizAssessmentContext.Provider>
  );
}

export default QuizAssessmentProvider;
