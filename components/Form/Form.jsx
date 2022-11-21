import React, { useRef } from "react";

const Form = () => {
  const contractAddress = useRef("");
  return (
    <div className="w-full h-full">
      <label className="mt-2 p-1">Contact Address</label>
      <input className="p-1 rounded-md border w-full"></input>
      <input
        ref={fullNameInputElement}
        id="full_name"
        placeholder="Full name"
        type="text"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Submit
      </button>
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
