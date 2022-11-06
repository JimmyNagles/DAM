import React from "react";

import Link from "next/link";
const Footer = () => {
  return (
    <div className="w-full   p-2 mt-4">
      <div className="p-2 ">
        <button className=" bg-white text-black shadow-2xl p-2 hover:bg-black hover:text-white">
          Contact Us
        </button>
      </div>

      <div className="text-center  mb-2">
        {/* <SocialMediaIcon IconName="facebook" />
        <SocialMediaIcon IconName="twitter" />
        <SocialMediaIcon IconName="discord" />
        <SocialMediaIcon IconName="youtube" />
        <SocialMediaIcon IconName="reddit" /> */}
      </div>
    </div>
  );
};

export default Footer;
