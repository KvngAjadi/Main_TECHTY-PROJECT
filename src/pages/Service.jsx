import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../components/Button";
import Footer from "../components/Footer";
import EmpowerComp from "../components/EmpowerComp";
import NavBar from "../components/NavBar";

const Service = () => {
  return (
    <div>
      <NavBar/>
      <div className="bg-[#F0F8FF]">
        <div className="text-center font-space pt-20">
          <h1 className="text-5xl font-bold ">
            We provide the best{" "}
            <span className="text-[#28D08A] text-5xl font-bold">service</span>{" "}
            solutions.
          </h1>
          <p className="font-space mt-5 text-[20px] text-gray-600">
            We're constantly pushing the boundaries of what's possible and
            seeking new ways to <br /> improve our services and help our clients
            achieve their goals.
          </p>
        </div>
        <div className="flex justify-between p-10">
          <div className="bg-white w-70 h-auto p-5 mt-5 rounded-md flex flex-col">
            <img src="/icon 1.png" alt="" className="mt-3 h-23 w-23" />
            <h1 className="font-bold mt-3 font-space text-2xl">
              Online Marketing
            </h1>
            <p className="font-space mt-3 text-[17px]">
              In the new era of technology <br />
              we look in the future with <br />
              certainty and pride.
            </p>
            <img src="/Vector.png" alt="" className="w-7 h-7 mt-3" />
          </div>
          <div className="bg-white w-70 h-auto p-5 mt-5 rounded-md flex flex-col">
            <img src="/icon 2.png" alt="" className="mt-3 h-23 w-23" />
            <h1 className="font-bold mt-3 font-space text-2xl">
              Online Marketing
            </h1>
            <p className="font-space mt-3 text-[17px]">
              In the new era of technology <br />
              we look in the future with <br />
              certainty and pride.
            </p>
            <img src="/Vector.png" alt="" className="w-7 h-7 mt-3" />
          </div>
          <div className="bg-white w-70 h-auto p-5 mt-5 rounded-md flex flex-col">
            <img src="/icon 3.png" alt="" className="mt-3 h-23 w-23" />
            <h1 className="font-bold mt-3 font-space text-2xl">
              Online Marketing
            </h1>
            <p className="font-space mt-3 text-[17px]">
              In the new era of technology <br />
              we look in the future with <br />
              certainty and pride.
            </p>
            <img src="/Vector.png" alt="" className="w-7 h-7 mt-3" />
          </div>
          <div className="bg-white w-70 h-auto p-5 mt-5 rounded-md flex flex-col">
            <img src="/icon 1.png" alt="" className="mt-3 h-23 w-23" />
            <h1 className="font-bold mt-3 font-space text-2xl">
              Online Marketing
            </h1>
            <p className="font-space mt-3 text-[17px]">
              In the new era of technology <br />
              we look in the future with <br />
              certainty and pride.
            </p>
            <img src="/Vector.png" alt="" className="w-7 h-7 mt-3" />
          </div>
        </div>
      </div>
      <div className="mb-20">
        <EmpowerComp />
      </div>
      <div className="pt-10 bg-[#F0F8FF] h-auto pb-25">
        <div className="text-center">
          <h1 className="font-space font-bold text-5xl">We have the best <span className="font-space font-bold text-[#28D08A] text-5xl">pricing</span><br /> packaging for you </h1>
        </div>
        <div className="bg-white rounded-lg mt-10 pb-10 relative px-10 ml-10 mr-17">
          <div className="flex flex-col gap-5 font-space pt-5">
            <h1 className="text-4xl font-semibold">On Demand</h1>
            <p className="text-gray-500">Get all these features when you're using as a starter.</p>
          </div>
          <div className="flex gap-80 mt-10">
          <div className="flex flex-col gap-3">
          <div className="flex font-space">
            <img src="/checkbox-circle-line.png" alt="" />
            <p className="text-gray-500">Unlimited Projects</p>
          </div>
          <div className="flex font-space">
            <img src="/checkbox-circle-line.png" alt="" />
            <p className="text-gray-500">Analytic Dashboards</p>
          </div>
          <div className="flex font-space">
            <img src="/checkbox-circle-line.png" alt="" />
            <p className="text-gray-500">Unlimited Projects</p>
          </div>
          </div>
          <div className="flex flex-col gap-3">
          <div className="flex font-space">
            <img src="/checkbox-circle-line.png" alt="" />
            <p className="text-gray-500">Unlimited Projects</p>
          </div>
          <div className="flex font-space">
            <img src="/checkbox-circle-line.png" alt="" />
            <p className="text-gray-500">Unlimited Projects</p>
          </div>
          <div className="flex font-space">
            <img src="/checkbox-circle-line.png" alt="" />
            <p className="text-gray-500">Unlimited Projects</p>
          </div>
          </div>
          <div className="flex flex-col gap-5 bg-[#F0F8FF] rounded-lg h-auto w-auto absolute p-5 left-220 top-7">
            <h1 className="font-space text-3xl font-bold">Quick Solutions</h1>
            <h1 className="font-space font-bold text-6xl">$20<span className="font-space font-semibold text-[20px]">/hour</span></h1>
                        <Button name='Request a Free Demo' style={"bg-black text-white text-center h-12 rounded-md font-semibold hover:bg-[#28D08A]"}/>
          </div>
          </div>
        </div>
        <div className="bg-white rounded-lg mt-10 pb-10 relative px-10 ml-10 mr-17">
          <div className="flex flex-col gap-5 font-space pt-5">
            <h1 className="text-4xl font-semibold">Maintenance</h1>
            <p className="text-gray-500">Get all these features when you're using as a starter.</p>
          </div>
          <div className="flex gap-100 mt-10">
          <div className="flex flex-col gap-3">
          <div className="flex font-space">
            <img src="/checkbox-circle-line.png" alt="" />
            <p className="text-gray-500">Unlimited Projects</p>
          </div>
          <div className="flex font-space">
            <img src="/checkbox-circle-line.png" alt="" />
            <p className="text-gray-500">Analytic Dashboards</p>
          </div>
          <div className="flex font-space">
            <img src="/checkbox-circle-line.png" alt="" />
            <p className="text-gray-500">Unlimited Projects</p>
          </div>
          </div>
          <div className="flex flex-col gap-3">
          <div className="flex font-space">
            <img src="/checkbox-circle-line.png" alt="" />
            <p className="text-gray-500">Unlimited Projects</p>
          </div>
          <div className="flex font-space">
            <img src="/checkbox-circle-line.png" alt="" />
            <p className="text-gray-500">Unlimited Projects</p>
          </div>
          <div className="flex font-space">
            <img src="/checkbox-circle-line.png" alt="" />
            <p className="text-gray-500">Unlimited Projects</p>
          </div>
          </div>
          <div className="flex flex-col gap-5 bg-[#F0F8FF] rounded-lg h-auto w-auto absolute p-5 left-220 top-7">
            <h1 className="font-space text-3xl font-bold">Quick Solutions</h1>
            <h1 className="font-space font-bold text-6xl">$99<span className="font-space font-semibold text-[20px]">/hour</span></h1>
                        <Button name='Request a Free Demo' style={"bg-black text-white h-12 text-center rounded-md font-semibold hover:bg-[#28D08A]"}/>
          </div>
          </div>
        </div>
      </div>
      <div className="bg-[#495460]">
        <Footer />
      </div>
    </div>
  );
};

export default Service;
