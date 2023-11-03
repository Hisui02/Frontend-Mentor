import Image from "next/image";
import { MouseEventHandler } from "react";

interface Props {
  type: "rock" | "paper" | "scissors" | "lizard" | "spock";
  className: string;
  onClick?: MouseEventHandler;
}

export default function Button(props: Props) {
  const imgSrc = `/images/icon-${props.type}.svg`;
  let borderColor;
  switch (props.type) {
    case "rock":
      borderColor = "border-red-600";
      break;
    case "paper":
      borderColor = "border-blue-600";
      break;
    case "scissors":
      borderColor = "border-yellow-500";
      break;
    case "lizard":
      borderColor = "border-purple-500";
      break;
    case "spock":
      borderColor = "border-cyan-400";
      break;
  }

  return (
    <button
      onClick={props.onClick}
      className={`h-24 w-24 rounded-full border-8 ${borderColor} ${props.className} absolute bg-white`}
    >
      <Image
        src={imgSrc}
        alt={props.type}
        width={50}
        height={50}
        className="m-auto"
      />
    </button>
  );
}
