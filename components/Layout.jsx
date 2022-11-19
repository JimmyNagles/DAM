import React, { useState, useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import { Chat } from "@pushprotocol/uiweb";

const Layout = ({ children }) => {
  const [isOpen, setisOpen] = useState(false);
  const [contractAddress, setcontractAddress] = useState(
    "0xf2997b416b3214BF1A41431A2B7Fa49F4b75eF8f"
  );
  useEffect(() => {
    return () => {};
  }, [isOpen]);

  return (
    <div>
      <Nav></Nav>
      {children}
      <div
        className={
          isOpen
            ? "p-2 top-20 bg-transparent fixed w-[800px] flex flex-row-reverse  h-[200px]"
            : "hidden"
        }
      >
        <div className="w-[400px] h-[300px] border flex flex-col  rounded-2xl p-2 bg-white">
          <hr className="mt-5"></hr>
          <label className="mt-2 p-1">Contact Address</label>
          <input className="p-1 rounded-md border w-full"></input>
          <button
            className="w-[200px] bg-black text-white mt-2 rounded-2xl"
            onClick={() => {
              setcontractAddress("0xf2997b416b3214BF1A41431A2B7Fa49F4b75eF8f");
            }}
          >
            Set Contact
          </button>
        </div>
      </div>

      <div
        onClick={() => {
          setisOpen(!isOpen);
        }}
      >
        <Chat
          modalTitle="DAM Chat"
          account="" //user address
          supportAddress={"0xf2997b416b3214BF1A41431A2B7Fa49F4b75eF8f"} //support address
          apiKey="9uYRhy0hol.fDp4IHD7auZOFpNDDtz2Ql4i2W9RYj2tpA9TLWyuX4AmVIC3Ge9MtyAHJAWOB6je"
          env="staging"
          primaryColor="black"
        ></Chat>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
