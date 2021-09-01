import React from "react";
import useKeyPress from "../../hooks/use-key-press";
import useWalk from "../../hooks/use-walk";
import Actor from "../Actor/Actor";

const Player = ({ skin, step, dir, position, walk }) => {
  const data = {
    w: 32,
    h: 32,
  };

  useKeyPress((e) => {
    const dir = e.key.replace("Arrow", "").toLowerCase();
    walk(dir);
    e.preventDefault();
  });


  return <Actor sprite={`/sprites/${skin}.png`} data={data} step={step} dir={dir} position={position}/>;
};

export default Player;
