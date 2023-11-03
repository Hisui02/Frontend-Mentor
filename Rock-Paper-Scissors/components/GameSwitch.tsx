interface Props {
  gamemode: "game3" | "game5";
  switchHandler: () => void;
}

export default function GameSwitch(props: Props) {
  const switchHandler = () => {
    props.switchHandler();
  };

  return <div>adads</div>;
}
