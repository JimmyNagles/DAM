import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
const GameCard = ({
  Total = 149,
  GameId = 0,
  GameName = "Game Name 00",
  GameImg = "image game",
}) => {
  return (
    <div className="w-[300px] h-[300px] shadow-xl hover:shadow-2xl mt-4 border  ">
      <div className="w-[200px] h-[140px] p-2 ">
        <h1>IMG</h1>
      </div>

      <div className="h-[60px] p-2 ">
        <Link
          href={{
            pathname: "/games/[game]/",
            query: {
              GameName: GameName,
              id: GameId,
              game: GameImg,
            },
          }}
          passHref
        >
          <button className="h-full w-full  hover:bg-black hover:text-white">
            More info
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GameCard;
