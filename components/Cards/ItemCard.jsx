import React, { useEffect, useState } from "react";

import Link from "next/link";

const ItemCard = ({
  CollectionId = 0,
  NFTGlb = "/models/1.glb",
  NFTPrice = 50,
  NFTId = 1,
  NFTDate = 0,
  NFTClaimed = false,
  NFTUtil = true,
}) => {
  return (
    <div className="w-[200px] min-h-[250px]  m-4 shadow-2xl">
      <div className="grid grid-cols-2 ">
        <div className="p-2">
          <h1>
            ID: <span>{NFTId}</span>
          </h1>
          <h1>
            Price: <span>${NFTPrice}</span>
          </h1>
        </div>
      </div>

      <div className="w-full flex flex-col items-center mt-2">
        <Link
          href={{
            pathname: "/market/[collection]/[Itemid]",
            query: {
              itemid: NFTId,
              glb: NFTGlb,
              collection: CollectionId,
            },
          }}
          passHref
        >
          <button className="border border-black w-[100px]">More</button>
        </Link>
      </div>
      <button className="bg-black text-white p-2   text-center hover:animate-pulse">
        Info
      </button>
    </div>
  );
};

export default ItemCard;
