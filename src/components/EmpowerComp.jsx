import React, { useState } from "react";
import Button from "./Button";

const EmpowerComp = () => {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);

  return (
    <section className="flex flex-col font-space w-full max-sm:flex-col max-md:flex-col">
      <div className="flex items-center justify-center py-25">
        <p className="text-center text-5xl font-extrabold max-sm:text-2xl max-md:2xl">
          Empower your business
          <br /> with cutting-edge{" "}
          <span className="text-green-500">solutions</span>
        </p>
      </div>
      <div className="flex mx-15 border-b-1 border-b-gray-300 mb-10 gap-2">
        <div
          onClick={() => {
            setFirst(true), setSecond(false), setThird(false);
          }}
          className={
            first
              ? "flex items-center gap-3 pb-7 cursor-pointer border-b-1 border-green-500"
              : "flex items-center gap-3 pb-7 cursor-pointer"
          }
        >
          <h1
            className={`text-6xl font-extrabold ${
              first ? "text-green-500" : "text-black"
            }`}
          >
            01
          </h1>
          <div className="flex flex-col gap-2 ">
            <p className="font-semibold text-lg">Collect Ideas</p>
            <p className="max-sm:hidden">
              Creating or improving products to meet our user needs.
            </p>
          </div>
        </div>
        <div
          onClick={() => {
            setFirst(false), setSecond(true), setThird(false);
          }}
          className={
            second
              ? "flex items-center gap-3 pb-7 cursor-pointer border-b-1 border-green-500"
              : "flex items-center gap-3 pb-7 cursor-pointer"
          }
        >
          <h1
            className={`font-extrabold text-6xl ${
              second ? "text-green-500" : "text-black"
            } `}
          >
            02
          </h1>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-lg">Data Analysis</p>
            <p>Creating or improving products to meet our user needs.</p>
          </div>
        </div>
        <div
          onClick={() => {
            setFirst(false), setSecond(false), setThird(true);
          }}
          className={
            third
              ? "flex items-center gap-3 pb-7 cursor-pointer border-b-1 border-green-500"
              : "flex items-center gap-3 pb-7 cursor-pointer"
          }
        >
          <h1
            className={`font-extrabold text-6xl ${
              third ? "text-green-500" : "text-black"
            }`}
          >
            03
          </h1>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-lg">Analyze Products</p>
            <p>Creating or improving products to meet our user needs.</p>
          </div>
        </div>
      </div>
      <div>
        {first ? (
          <div className="flex items-center  mx-15 gap-10 max-sm:flex-col max-md:flex-col">
            <img
              src="/image 2.png"
              alt="image of a phone and laptop"
              className="w-[550px] rounded-lg"
            />
            <div className="flex flex-col gap-7">
              <h1 className="text-3xl font-semibold">Collect Ideas</h1>
              <p className="text-md text-[#4E4E4E] text-justify">
                With our Techty company, you can create landing pages that
                convert more <br /> visitors than any other website. You can
                easily create a page using a variety <br /> of unique blocks.
              </p>
              <div className="flex flex-col gap-3 ">
                <div className="flex items-center gap-2">
                  <img src="/checkbox-circle-line.png" />
                  <p className="text-xl">
                    We collect ideas from different design inspirations,
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/checkbox-circle-line.png" />
                  <p className="text-xl">
                    Analysis data for any kind of corrections.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/checkbox-circle-line.png" />
                  <p className="text-xl">
                    Finalize the product for the production to be done.
                  </p>
                </div>
              </div>
              <div className="flex">
                <Button
                  name="Request a Free Demo"
                  style={
                    "bg-black text-white px-5 hover:bg-green-500 rounded-lg"
                  }
                />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {second ? (
          <div className="flex max-sm:flex-col max-md:flex-col items-center mx-15 mb-10 gap-10">
            <img
              src="/collect o.png"
              alt="image of pencil, paper and book"
              className="w-[550px]"
            />
            <div className="flex flex-col gap-7">
              <h1 className="text-3xl font-semibold">Data Analysis</h1>
              <p className="text-md text-[#4E4E4E] text-justify">
                With our Techty company, you can create landing pages that
                convert more <br /> visitors than any other website. You can
                easily create a page using a variety <br /> of unique blocks.
              </p>
              <div className="flex flex-col gap-3 ">
                <div className="flex items-center gap-2">
                  <img src="/checkbox-circle-line.png" />
                  <p className="text-xl">
                    We collect ideas from different design inspirations,
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/checkbox-circle-line.png" />
                  <p className="text-xl">
                    Analysis data for any kind of corrections.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/checkbox-circle-line.png" />
                  <p className="text-xl">
                    Finalize the product for the production to be done.
                  </p>
                </div>
              </div>
              <div className="flex">
                <Button
                  name="Request a Free Demo"
                  style={
                    "bg-black text-white px-5 hover:bg-green-500 rounded-lg"
                  }
                />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {third ? (
          <div className="flex items-center max-sm:flex-col max-md:flex-col mx-15 mb-10 gap-10">
            <img
              src="/collect 1.png"
              alt="image of 8 colored papers"
              className="w-[550px]"
            />
            <div className="flex flex-col gap-7">
              <h1 className="text-3xl font-semibold">Finalize Product</h1>
              <p className="text-md text-[#4E4E4E] text-justify">
                With our Techty company, you can create landing pages that
                convert more <br /> visitors than any other website. You can
                easily create a page using a variety <br /> of unique blocks.
              </p>
              <div className="flex flex-col gap-3 ">
                <div className="flex items-center gap-2">
                  <img src="/checkbox-circle-line.png" />
                  <p className="text-xl">
                    We collect ideas from different design inspirations,
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/checkbox-circle-line.png" />
                  <p className="text-xl">
                    Analysis data for any kind of corrections.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/checkbox-circle-line.png" />
                  <p className="text-xl">
                    Finalize the product for the production to be done.
                  </p>
                </div>
              </div>
              <div className="flex">
                <Button
                  name="Request a Free Demo"
                  style={
                    "bg-black text-white px-5 hover:bg-green-500 rounded-lg"
                  }
                />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default EmpowerComp;
