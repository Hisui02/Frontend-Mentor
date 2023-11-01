import Button from "./Button";

interface Props {
  resultHandler: (result: "win" | "loose") => void;
}

export default function Game(props: Props) {
  return (
    <div className="bg-pentagon w-full bg-cover">
      {/* <button
        onClick={() => {
          props.resultHandler("win");
        }}
      >
        WIN
      </button>
      <button
        onClick={() => {
          props.resultHandler("loose");
        }}
      >
        LOOSE
      </button> */}
      <Button />
    </div>
  );
}
