"use client";
import { useState } from "react";
import Button from "./Button";

interface Props {
  resultHandler: (result: "win" | "loose" | "draw") => void;
}

// console.log(clickHandler("rock"));

export default function Game(props: Props) {
  const [result, setResult] = useState<"win" | "loose" | "draw">();
  const [randomSelection, setRandomSelecton] = useState<string>();

  const clickHandler = (selection: string): string => {
    const randomInt = Math.floor(Math.random() * 5 + 1);
    let randomSelection;
    let result: "win" | "loose" | "draw" = "draw";

    switch (randomInt) {
      case 1:
        randomSelection = "rock";
        break;
      case 2:
        randomSelection = "paper";
        break;
      case 3:
        randomSelection = "scissors";
        break;
      case 4:
        randomSelection = "lizard";
        break;
      case 5:
        randomSelection = "spock";
        break;
    }

    // console.log("Random selection:");
    // console.log(randomSelection);
    // debugger;

    switch (selection) {
      case "rock":
        if (randomSelection === "scissors") result = "win";
        if (randomSelection === "lizard") result = "win";
        if (randomSelection === "paper") result = "loose";
        if (randomSelection === "spock") result = "loose";
        if (randomSelection === "rock") result = "draw";
        break;
      case "paper":
        if (randomSelection === "rock") result = "win";
        if (randomSelection === "spock") result = "win";
        if (randomSelection === "scissors") result = "loose";
        if (randomSelection === "lizard") result = "loose";
        if (randomSelection === "paper") result = "draw";
        break;
      case "scissors":
        if (randomSelection === "paper") result = "win";
        if (randomSelection === "lizard") result = "win";
        if (randomSelection === "rock") result = "loose";
        if (randomSelection === "spock") result = "loose";
        if (randomSelection === "scissors") result = "draw";
        break;
      case "lizard":
        if (randomSelection === "paper") result = "win";
        if (randomSelection === "spock") result = "win";
        if (randomSelection === "scissors") result = "loose";
        if (randomSelection === "rock") result = "loose";
        if (randomSelection === "lizard") result = "draw";
        break;
      case "spock":
        if (randomSelection === "scissors") result = "win";
        if (randomSelection === "rock") result = "win";
        if (randomSelection === "paper") result = "loose";
        if (randomSelection === "lizard") result = "loose";
        if (randomSelection === "spock") result = "draw";
        break;
    }

    // console.log(selection);
    // console.log(randomSelection);
    // console.log(result);

    props.resultHandler(result);
    setResult(result);
    setRandomSelecton(randomSelection as string);

    return result as string;
  };

  const manageText = (): string => {
    let text: string = "";
    if (result == "win") text = "You won!";
    if (result == "loose") text = "You lost!";
    if (result == "draw") text = "Draw!";
    return text;
  };
  // props.resultHandler("win");

  return (
    <div className="relative m-auto mb-12 flex h-80 w-80 items-center justify-center bg-pentagon bg-contain bg-center bg-no-repeat pl-12 pr-12">
      {result ? (
        <span className="rounded-lg bg-gray-100 p-4 text-center">
          House picked <br />
          <span className="uppercase">{randomSelection}</span>
          <br />
          <span className="uppercase">{manageText()}</span>
        </span>
      ) : (
        <span className="rounded-lg bg-gray-100 p-4 text-center">
          Choose one
        </span>
      )}
      <Button
        onClick={() => {
          clickHandler("rock");
        }}
        type="rock"
        className="-bottom-4 right-4"
      />
      <Button
        onClick={() => {
          clickHandler("paper");
        }}
        type="paper"
        className="-right-7 top-16"
      />
      <Button
        onClick={() => {
          clickHandler("scissors");
        }}
        type="scissors"
        className="-top-8"
      />
      <Button
        onClick={() => {
          clickHandler("lizard");
        }}
        type="lizard"
        className="-bottom-4 left-4"
      />
      <Button
        onClick={() => {
          clickHandler("spock");
        }}
        type="spock"
        className="-left-7 top-16"
      />
    </div>
  );
}
