"use client";
import { useState } from "react";

interface IToggleSwitchProps {
  onChange?: (value: boolean) => void;
  defaultChecked?: boolean;
}

const ToggleSwitch = ({ onChange, defaultChecked }: IToggleSwitchProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(defaultChecked ?? false);
  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onChange?.(newCheckedState);
  };

  return (
    <>
      <label className="flex cursor-pointer select-none  items-center">
        <div className="relative">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="sr-only"
          />
          <div
            className={`box block h-6 w-10 rounded-full ${
              isChecked ? "bg-[#a5f3eb] dark:bg-[#f859a8]" : "bg-[#b2b2b2]"
            }`}
          />
          <div
            className={`absolute left-1 top-1 flex h-4 w-4 items-center justify-center rounded-full transition ${
              isChecked ? "translate-x-full bg-white" : "bg-white"
            }`}
          />
        </div>
      </label>
    </>
  );
};

export default ToggleSwitch;
