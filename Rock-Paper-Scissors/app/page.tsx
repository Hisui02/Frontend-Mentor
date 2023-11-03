"use client";
import Game from "@/components/Game";
import Scoreboard from "@/components/Scoreboard";
import { useState } from "react";

export default function Home() {
  const [score, setScore] = useState(0);

  const resultHandler = (result: "win" | "loose" | "draw") => {
    if (result == "win") {
      setScore(score + 1);
    }
    if (result == "loose") {
      setScore(0);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 pt-16">
      <Scoreboard score={score} />
      <Game resultHandler={resultHandler} />
    </main>
  );
}
