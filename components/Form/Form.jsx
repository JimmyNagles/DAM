import React, { useRef } from "react";

const Form = () => {
  const contractAddress = useRef("");
  return (
    <div className="w-full h-full">
      <label className="mt-2 p-1">Contact Address</label>
      <input className="p-1 rounded-md border w-full"></input>
      <button
        className="w-[200px] bg-black text-white mt-2 rounded-2xl"
        onClick={() => {
          setcontractAddress();
        }}
      >
        Set Contact
      </button>
    </div>
  );
};

export default Form;
