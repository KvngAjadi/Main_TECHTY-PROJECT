import React from "react";
import Button from "./Button";

const Footer = () => {
  return (
    <div className="flex-col p-4">
      <div className="flex max-md:flex-col max-sm:flex-col gap-7 justify-between pl-20 mt-30">
        <h1 className="text-white font-space font-bold text-5xl">
          Ready to take your business
          <br />
          to the next level?
        </h1>
        <Button
          name="Request a Free Demo"
          style={
            "bg-black hover:bg-[#28D08A] text-white text-[15px] items-center flex justify-center rounded-md w-60 font-space h-13 font-semibold"
          }
        />
      </div>
      <hr className="text-gray-500 mt-20" />
      <div
        className="flex flex-col items-center text-center gap-10 
                md:flex-row md:justify-between md:items-start md:text-left 
                pb-20 mt-30"
      >
        {/* Logo + Socials + Copyright */}
        <div className="flex flex-col items-center md:items-start md:pl-20">
          <div className="flex items-center gap-2">
            <img src="/public/svg-662123605_1698 (1).png" alt="logo" />
            <h1 className="text-2xl text-white font-bold font-space">Techty</h1>
          </div>

          <div className="flex items-center gap-4 mt-10">
            <img
              src="/twitter-x-line.png"
              alt="twitter logo"
              className="w-10 h-10"
            />
            <img
              src="/facebook-fill.png"
              alt="facebook logo"
              className="w-10 h-10"
            />
            <img
              src="/instagram-line.png"
              alt="instagram logo"
              className="w-10 h-10"
            />
            <img
              src="/github-fill.png"
              alt="github logo"
              className="w-10 h-10"
            />
          </div>

          <div className="text-white font-space mt-5 text-center md:text-left">
            Copyright &copy; 2025 Techty. <br />
            All Rights Reserved.
          </div>
        </div>

        {/* Quick Links */}
        <div className="font-space text-white">
          <h1 className="text-2xl font-semibold">Quick Links</h1>
          <p className="mt-5">About</p>
          <p>Service</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>

        {/* Socials */}
        <div className="font-space text-white">
          <h1 className="text-2xl font-semibold">Socials</h1>
          <p className="mt-5">Twitter</p>
          <p>LinkedIn</p>
          <p>Facebook</p>
        </div>

        {/* Newsletter */}
        <div className="font-space text-white md:pr-10">
          <h1 className="text-2xl font-semibold">Our Newsletter</h1>
          <p className="mt-5 font-normal">
            Subscribe to our newsletter to <br /> get our news delivered to you.
          </p>
          <form className="relative mt-5 w-full max-w-sm">
            <input
              type="text"
              placeholder="Email address"
              className="font-space font-normal w-full h-13 rounded-md p-4 border border-gray-400"
            />
            <button
              type="submit"
              className="bg-black absolute top-[5px] right-[5px] py-[10px] px-[15px] rounded-xl text-white hover:bg-[#28D08A]"
            >
              Join
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
