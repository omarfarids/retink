import React from "react";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsLinkedin,
  BsYoutube,
  BsPinterest,
} from "react-icons/bs";

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <div className="bg-perfGray flex justify-evenly flex-col md:flex-row items-center">
        <div className="px-3 md:w-2/5 md:p-10">
          <img className="w-24 my-5" src="/assets/Logo.png" alt="" />
          <div className="flex flex-row gap-5 justify-between flex-wrap">
            <p className="text-lg font-medium hover:cursor-pointer">
              Product by Retink Media UG
            </p>
            <p className="text-lg font-medium hover:cursor-pointer">
              Get Early Access
            </p>
            <p className="text-lg font-medium hover:cursor-pointer">
              Bonn, Germany
            </p>
            <p className="text-lg font-medium hover:cursor-pointer">
              Provide Feedback
            </p>
          </div>
        </div>
        <div className="pt-3 md:w-2/5">
          <p>Connect with Us</p>
          <div className=" flex flex-row gap-5 py-5">
            <BsFacebook className="text-blue hover:cursor-pointer" />
            <BsTwitter className="text-DodgerBlue hover:cursor-pointer" />
            <BsInstagram className="text-white hover:cursor-pointer" />
            <BsLinkedin className="text-lightBlue hover:cursor-pointer" />
            <BsYoutube className="text-red hover:cursor-pointer" />
            <BsPinterest className="text-red hover:cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="bg-black flex flex-col md:flex-row justify-between py-5 px-10">
        <p className="text-white">copyright &#169; 2021 Retink</p>
        <p className="text-white">Terms of Service</p>
      </div>
    </>
  );
};

export default Footer;
