"use client";
// import ToggleSwitch from "@/components/animata/button/toggle-switch";
import PricingComponent from "../components/Home";
import Switch from "../components/Switch";
// import bg from "../../Public/images/bg-pattern.svg";

export default function Home() {
  return (
    <div className="h-screen flex-col -z-20 flex justify-center items-center gap-16 dark:bg-[#212121]  w-full   ">
      <div className="flex flex-col z-10 justify-center items-center   gap-4">
        {/* <img src="/images/pattern-circles.svg" className="absolute" /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="146"
          height="145 "
          className="absolute stroke-[#CFD8EF] dark:stroke-gray-500"
        >
          <g fill="none" fill-rule="evenodd">
            <circle cx="63" cy="82" r="62.5" />
            <circle cx="105" cy="41" r="40.5" />
          </g>
        </svg>

        <h1 className="text-4xl max-sm:text-2xl z-10 text-[#293356] dark:text-[#cad0dc]">
          Simple,traffic-based pricing
        </h1>
        <p className="text-sm max-sm:text-xs z-10 text-[#858fad] dark:text-gray-400">
          sign-up for 30 day trial.No credit card required
        </p>
      </div>
      <PricingComponent />

      <div className="absolute top-5 left-10 max-sm:left-5 z-30">
        {/* <ToggleSwitch onChange={toggleTheme} /> */}
        <Switch />
      </div>

      <img
        src="/images/bg-pattern.svg"
        className="w-full h-[55vh] z-0 absolute top-0 dark:hidden "
      />
      <img
        src="/images/bg-pattern-dark.svg"
        className="w-full h-[55vh] z-0 absolute top-0 hidden dark:block"
      />
    </div>
  );
}
