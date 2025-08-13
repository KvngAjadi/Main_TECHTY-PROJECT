import React from "react";
import Button from "./Button";

const EmpowerComp = () => {
  return (
    <div>
      <div className="w-full flex items-center justify-center mt-25">
        <h1 className="text-black font-space font-bold text-4xl px-15">
          Empower your business <br />
          with cutting-edge <span className="text-[#28D08A]">solutions.</span>
        </h1>
      </div>
      <div className="flex mt-20">
        <div className="mt-10 pl-10 hover:border-">
          <h1 className="text-[#28D08A] text-6xl font-space font-bold">01</h1>
        </div>
        <div className="flex flex-col font-space mt-10 pl-3 ">
          <p className="text-[20px] font-semibold">Collect Ideas</p>
          <p>
            Creating or improving products to meet <br />
            our users needs
          </p>
        </div>
        <div className="mt-10 pl-10">
          <h1 className="text-[#28D08A] text-6xl font-space font-bold">02</h1>
        </div>
        <div className="flex flex-col font-space mt-10 pl-3 ">
          <p className="text-[20px] font-semibold">Collect Ideas</p>
          <p>
            Creating or improving products to meet <br />
            our users needs
          </p>
        </div>
        <div className="mt-10 pl-10">
          <h1 className="text-[#28D08A] text-6xl font-space font-bold">03</h1>
        </div>
        <div className="flex flex-col font-space mt-10 pl-3 ">
          <p className="text-[20px] font-semibold">Collect Ideas</p>
          <p>
            Creating or improving products to meet <br />
            our users needs
          </p>
        </div>
      </div>
      <center>
        <hr className="mt-5" />
      </center>
      <div className="flex mt-20 gap-10 px-15">
        <img src="/image 2.png" alt="" className="rounded-lg" />
        <div className="flex flex-col font-space gap-5 mt-10">
          <p className="text-2xl font-semibold">Collect Ideas</p>
          <p className="text-[15px] font-normal">
            With our Techty company, you can create landing pages that convert
            more <br /> visitors than any other website. You can easily create a
            page using a variety <br /> of unique blocks.
          </p>
          <p className="text-[20px] font-normal">
            We collect ideas from different design inspirations,
          </p>
          <p className="text-[20px] font-normal">
            Analysis data for any kind of corrections.
          </p>
          <p className="text-[20px] font-normal">
            Finalize the product for the production to be done.
          </p>
          <Button
            name="Request a Free Demo"
            style={
              "bg-black hover:bg-[#28D08A] text-white text-[15px] items-center flex justify-center rounded-md w-60 font-space h-13 font-semibold"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default EmpowerComp;
