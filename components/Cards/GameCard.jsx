import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
const GameCard = ({
  Total = 149,
  GameId = 0,
  GameName = "Game Name 00",
  GameImg = "image game",
}) => {
  return (
    <div className="w-[300px] h-[300px] shadow-xl hover:shadow-2xl mt-4 border flex flex-col justify-center items-center  ">
      <div className="w-[200px] h-[200px]  ">
        <Image
          src="/dam.png"
          alt="Picture of the author"
          width={200}
          height={140}
        />
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
          <button className="w-[150px] p-2 hover:bg-black hover:text-white">
            Play
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GameCard;
