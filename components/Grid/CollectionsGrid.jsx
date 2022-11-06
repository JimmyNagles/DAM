import React from "react";

const CollectionsGrid = ({ children, addClass }) => {
  return (
    <div
      className={`min-h-screen flex flex-col items-center  md:w-full bg-transparent mt-4  md:grid md:grid-cols-3 md:justify-items-center  ${addClass}`}
    >
      {children}
    </div>
  );
};

export default CollectionsGrid;
