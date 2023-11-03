"use client";

import { useState } from "react";

interface Props {
  gamemode: "game3" | "game5";
  switchHandler: () => void;
}

export default function GameSwitch(props: Props) {
  const [toggleActive, setToggleActive] = useState(false);

  const switchHandler = () => {
    setToggleActive(!toggleActive);
    props.switchHandler();
  };

  return (
    <>
      {/* <!-- Not toggled switch --> */}
      <div className="mt-4 flex h-full w-72 flex-col items-center justify-center rounded-2xl bg-white">
        <span className="m-2 text-lg font-bold">GAMEMODE CHANGER</span>
        <div className="flex items-center justify-center">
          <span className="rounded-xl bg-white p-1 text-center">
            Traditional Game
          </span>
          <div
            className={`${
              toggleActive ? "bg-teal-500" : "bg-gray-300"
            } mx-3 flex h-7 w-14 items-center rounded-full`}
            onClick={switchHandler}
          >
            <div
              className={`${
                toggleActive && "translate-x-5"
              } h-7 w-7 transform rounded-full bg-teal-950 shadow-md duration-200`}
            ></div>
          </div>
          <span className="rounded-xl bg-white p-1 text-center">
            Lizard, Spock
          </span>
        </div>
      </div>
    </>
  );
}
