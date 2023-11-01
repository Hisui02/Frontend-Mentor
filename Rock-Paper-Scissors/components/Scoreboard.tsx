import Image from "next/image";

interface Props {
  score: number;
}

export default function Scoreboard(props: Props) {
  return (
    <div className="ml-1 mr-1 flex w-full justify-between rounded-lg border-2 border-gray-400 p-6 xl:w-3/4">
      <Image
        src={"/images/logo-bonus.svg"}
        alt="Logo"
        width={100}
        height={100}
      />
      <div className="flex flex-col items-center justify-between rounded-lg bg-gray-100 p-3 pl-8 pr-8">
        <span className="font-sans text-xs font-bold tracking-widest text-blue-800">
          SCORE
        </span>
        <span className="text-5xl font-extrabold text-gray-600">
          {props.score}
        </span>
      </div>
    </div>
  );
}
