"use client";
import Scoreboard from "@/components/Scoreboard";
import GameSwitch from "@/components/GameSwitch";
import Game3 from "@/components/Game3";
import Game5 from "@/components/Game5";
import { useState } from "react";

export default function Home() {
  const [score, setScore] = useState(0);
  const [gamemode, setGamemode] = useState<"game5" | "game3">("game3");

  const resultHandler = (result: "win" | "loose" | "draw") => {
    if (result == "win") {
      setScore(score + 1);
    }
    if (result == "loose") {
      setScore(0);
    }
  };

  const switchHandler = () => {
    if (gamemode == "game3") setGamemode("game5");
    if (gamemode == "game5") setGamemode("game3");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 pt-16">
      <Scoreboard score={score} />
      <GameSwitch gamemode={gamemode} switchHandler={switchHandler} />
      {gamemode == "game5" && <Game5 resultHandler={resultHandler} />}
      {gamemode == "game3" && <Game3 resultHandler={resultHandler} />}
    </main>
  );
}
