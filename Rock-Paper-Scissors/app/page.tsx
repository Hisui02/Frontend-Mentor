"use client";
import Game from "@/components/Game";
import Scoreboard from "@/components/Scoreboard";
import { useState } from "react";

export default function Home() {
  const localScore = localStorage.getItem("score")
    ? parseInt(localStorage.getItem("score") as string)
    : 0;

  const [score, setScore] = useState(localScore);

  const resultHandler = (result: "win" | "loose"): void => {
    if (result == "win") {
      setScore(score + 1);
      localStorage.setItem("score", String(score + 1));
    } else {
      setScore(0);
      localStorage.removeItem("score");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-10 pt-16">
      <Scoreboard score={score} />
      <Game resultHandler={resultHandler} />
    </main>
  );
}
