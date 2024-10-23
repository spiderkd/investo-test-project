"use client";
import React, { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
import "./home.css";
import ToggleSwitch from "@/components/animata/button/toggle-switch";
// import check from "/images/icon-check.svg";

const pageviewOptions = [
  { pageviews: 10000, price: 8 },
  { pageviews: 50000, price: 12 },
  { pageviews: 100000, price: 16 },
  { pageviews: 500000, price: 24 },
  { pageviews: 1000000, price: 36 },
];

const PricingComponent: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0); // Default to 10K
  const [isYearlyBilling, setIsYearlyBilling] = useState<boolean>(true); // Default to monthly
  const sliderRef = useRef<HTMLInputElement>(null);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedIndex(parseInt(e.target.value, 10));
  };

  const handleBillingToggle = () => {
    setIsYearlyBilling((prev) => !prev);
  };

  const { pageviews, price } = pageviewOptions[selectedIndex];
  const finalPrice = isYearlyBilling ? price * 0.75 : price; // 25% discount for yearly

  const formattedPageviews =
    pageviews >= 1000000 ? `${pageviews / 1000000}M` : `${pageviews / 1000}K`;

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      const updateSliderVariables = () => {
        slider.style.setProperty("--value", slider.value);
        slider.style.setProperty("--min", slider.min === "" ? "0" : slider.min);
        slider.style.setProperty(
          "--max",
          slider.max === "" ? "100" : slider.max
        );
      };

      // Initial setup
      updateSliderVariables();

      // Update on input change
      slider.addEventListener("input", updateSliderVariables);

      // Cleanup event listener on component unmount
      return () => {
        slider.removeEventListener("input", updateSliderVariables);
      };
    }
  }, [selectedIndex]);
  return (
    <div className="flex flex-col items-center z-10 max-h-lg h-[54vh] max-sm:h-[60vh] max-sm:w-[90vh]  p-8 bg-white  rounded-lg shadow-lg w-[50vw] max-sm:max-w-sm max-w-lg  mx-auto justify-between dark:bg-[#f2f2f2]">
      <div className="flex flex-row max-sm:flex-col items-center w-full justify-between mb-6">
        {/* Pageviews */}
        <p className="text-gray-500 tracking-wider  text-sm font-semibold ">
          {formattedPageviews} PAGEVIEWS
        </p>

        {/* Pricing */}
        <p className="text-4xl font-bold text-slate-950 max-sm:hidden  dark:text-[#212121] ">
          ${finalPrice.toFixed(2)}
          <sup className="  text-lg text-gray-500 font-medium   "> / month</sup>
        </p>
      </div>

      {/* Slider */}

      <input
        ref={sliderRef}
        type="range"
        min="0"
        max={pageviewOptions.length - 1}
        value={selectedIndex}
        onChange={handleSliderChange}
        className=" styled-slider slider-progress w-[90%] "
      />
      <p className="text-4xl font-bold text-slate-950 my-8 sm:hidden ">
        ${finalPrice.toFixed(2)}
        <sup className="  text-lg text-gray-500 font-medium "> / month</sup>
      </p>

      {/* Billing Toggle */}
      <div className="flex justify-center items-center space-x-4 max-sm:space-x-1 mt-4">
        <div
          className={`text-sm ${
            !isYearlyBilling ? "text-[#293356]" : "text-gray-500"
          }`}
        >
          Monthly Billing
        </div>

        <ToggleSwitch
          onChange={handleBillingToggle}
          defaultChecked={isYearlyBilling}
        />

        <span
          className={`text-sm ${
            isYearlyBilling ? "text-[#293356]" : "text-gray-500"
          }`}
        >
          Yearly Billing
          <span
            className="text-[color:hsl(15,_100%,_70%)] dark:text-orange-700 dark:bg-[
          rgba(240,68,157,0.1)] bg-[color:hsl(14,_92%,_95%)] rounded-full px-[6px] py-[4px] text-[0.7rem] ml-2  "
          >
            25% Discount
          </span>
        </span>
      </div>
      <hr className="h-px mt-8 translate-y-4 bg-gray-200 border-0 w-[calc(100%+4rem)] dark:bg-gray-200" />
      <div className="flex flex-row max-sm:flex-col max-sm:mx-auto  items-center w-full justify-between ">
        {/* Features List */}
        <ul className="mt-8 text-gray-600 text-sm space-y-2">
          <li className="flex  flex-row justify-start items-center gap-2">
            <img src="/images/icon-check.svg" className="h-4 w-4 dark:hidden" />
            <img
              src="/images/icon-check-dark.svg"
              className="h-4 w-4 hidden dark:block"
            />
            Unlimited websites
          </li>
          <li className="flex  flex-row justify-start  items-center gap-2">
            <img src="/images/icon-check.svg" className="h-4 w-4 dark:hidden" />
            <img
              src="/images/icon-check-dark.svg"
              className="h-4 w-4 hidden dark:block"
            />
            100% data ownership
          </li>{" "}
          <li className="flex  flex-row justify-start items-center gap-2">
            <img src="/images/icon-check.svg" className="h-4 w-4 dark:hidden" />
            <img
              src="/images/icon-check-dark.svg"
              className="h-4 w-4 hidden dark:block"
            />
            Email reports
          </li>
        </ul>

        {/* Start Trial Button */}
        <button className="mt-6 bg-[#293356] text-[color:hsl(226,_100%,_87%)] px-6 py-2 rounded-lg shadow-lg hover:bg-[#233267] hover:text-white transition-all dark:bg-[#f859a8] dark:text-gray-100 dark:hover:bg-[#e1539a] dark:hover:text-white">
          Start my trial
        </button>
      </div>
    </div>
  );
};

export default PricingComponent;
