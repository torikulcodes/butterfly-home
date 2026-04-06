/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import WordReveal from "./animationComponent/revealText";
import { BiMessageRoundedDots } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import CustomSelect from "./shared/customSelect";
import WorkButton from "./animationComponent/button";

export default function TellUs() {
  const [budget, setBudget] = useState("");

  return (
    <section
      className="bg-cover bg-center text-white m-3 rounded-3xl"
      style={{
        backgroundImage:
          "url('https://i.postimg.cc/26ym8gLz/Gemini-Generated-Image-ncv575ncv575ncv5.png')",
      }}
    >
      <div className="max-weidth p-4 py-18 ">
        <div className="flex flex-col justify-between items-start md:flex-row gap-8">
          <div className="text-white flex-1">
            <h3 className="text-sm text-gray-400 ">GET IN TOUCH</h3>
            <WordReveal
              text="Tell us about your project —whether it’s a website, SEO, or marketing."
              className="custom-heading py-14"
            />

            <div className="flex flex-col xs:flex-row  items-start gap-8">
              <div className="max-w-[210px]">
                <div className="flex pb-3 items-center gap-3 text-gray-300 font-semibold">
                  <BiMessageRoundedDots className="stroke-1" size={15} />
                  TALK TO US
                </div>
                <p className=" text-gray-400 text-lg">
                  Work and general inquiries+123 456 789 00
                </p>
              </div>

              <div className="max-w-[210px]">
                <div className="flex pb-3 items-center gap-3 text-gray-300 font-semibold">
                  <IoLocationOutline className="stroke-1" size={15} />
                  POST ADDRESS
                </div>
                <p className="text-gray-400 text-lg">
                  541 Melville Ave, Palo Alto, CA 94301, United States
                </p>
              </div>
            </div>
          </div>

          {/* form section */}

          <div className="bg-white w-full rounded-2xl flex-1 p-4">
            <h4 className="text-2xl pb-6 text-gray-700">
              Have a project in mind?
            </h4>

            <div>
              <form className="grid grid-cols-1 xs:grid-cols-2 gap-4" action="">
                <input
                  type="text"
                  placeholder="YOUR NAME"
                  className="outline-0 shadow bg-gray-100 p-3 rounded-lg text-gray-600 
             placeholder:text-xs 
             placeholder:text-gray-400 
             focus:placeholder:text-gray-800 
             placeholder:transition-all 
             placeholder:duration-800"
                />

                <input
                  type="text"
                  placeholder="BUSINESS NAME"
                  className="outline-0 shadow bg-gray-100 p-3 rounded-lg text-gray-600 
             placeholder:text-xs 
             placeholder:text-gray-400 
             focus:placeholder:text-gray-800 
             placeholder:transition-all 
             placeholder:duration-800"
                />

                <div className="w-full">
                  <CustomSelect
                    label="BUDGET"
                    options={[
                      "Low ($100 - $500)",
                      "Medium ($500 - $2000)",
                      "High ($2000+)",
                    ]}
                    value={budget}
                    onChange={setBudget}
                  />
                </div>

                <div className="w-full">
                  <CustomSelect
                    label="BUDGET"
                    options={[
                      "Low ($100 - $500)",
                      "Medium ($500 - $2000)",
                      "High ($2000+)",
                    ]}
                    value={budget}
                    onChange={setBudget}
                  />
                </div>

                <textarea
                  placeholder="YOUR MESSAGE"
                  rows={4}
                  className="outline-0 xs:col-span-2 shadow bg-gray-100 p-3 rounded-lg text-gray-600 w-full resize-none
             placeholder:text-xs 
             placeholder:text-gray-400 
             focus:placeholder:text-gray-800 
             placeholder:transition-all 
             placeholder:duration-300"
                />
              </form>

              <WorkButton
                text="LETS TALK"
                className="mt-6 text-gray-600 font-semibold"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
