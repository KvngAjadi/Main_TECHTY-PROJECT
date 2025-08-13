import React from "react";
import Button from "./Button";

const PriorityComp = () => {
  return (
    <div className="relative flex gap-25">
      <div className="flex flex-col pl-10 gap-5 mt-15">
        <h1 className="text-black font-space font-bold text-5xl">
          Our Most Priority is to <br />
          Provide the effective <br />
          <span className="text-[#28D08A]">Solutions.</span>
        </h1>
        <p className="font-space text-[15px]">
          With a library full of thousands of templates to choose from, go idea
          to <br /> launch in a matter of minutes. Try uploading your own for
          sale.
        </p>
        <Button
          name="Request a Free Demo"
          style={
            "bg-black hover:bg-[#28D08A] text-white text-[15px] items-center flex justify-center rounded-md w-60 font-space h-13 font-semibold"
          }
        />
      </div>
      <div>
        <div className=" w-[600px]">
      <img
        src="/man drinking.jpg"
        alt="Man working"
        className="w-150 h-auto rounded-lg"
      />
      <div className="absolute bottom-16 left-140 bg-white shadow-lg p-4 max-w-xs">
        <h2 className="text-6xl font-space font-bold">$946K</h2>
        <p className="text-gray-600 font-space text-sm mt-2">
          As a translator, I want to integrate <br />crowdin webhook to notify <br />
          translators about changed strings
        </p>
        <span className="inline-block mt-3 bg-yellow-300 text-yellow-900 font-space px-3 py-1 rounded">
          Refactoring
        </span>
      </div>
    </div>
      </div>
    </div>
  );
};

export default PriorityComp;
