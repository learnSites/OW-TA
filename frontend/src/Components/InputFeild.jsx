import { useState } from "react";

export default function Input({
  name,
  label,
  placeholder,
  value,
  className,
  type = "text",
  ...props
}) {
  let [isFocused, setIsFocused] = useState(false);
  let [isValue, setIsValue] = useState(false);
  return (
    <>
      <div className={`relative ${className}`}>
        <div className={`flex flex-col sm:flex-row sm:items-center sm:gap-4 ${className}`}>
          <input
            id={name}
            name={name}
            type={type}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(e) => setIsValue(e.target.value == "" ? false : true)}
            {...props}
            className={`flex-grow p-3 rounded-xl border border-gray-300
                        focus:outline-none focus:ring-2 focus:ring-blue-400
                        text-gray-900 text-base`}
          />
        </div>
        <label
          htmlFor={name}
          className={`px-2 ${isValue || isFocused ? "top-[-30%] left-[12px] transition-all duration-200 ease-in-out" : "bg-white text-gray-500 top-[23.5%] transition-all duration-500 ease-in-out"} 
            ${
              !isFocused && isValue
                ? "absolute translate-x-[255%] bg-white text-gray-500"
                : "absolute translate-x-[23%] bg-white text-blue-500"
            } 
          `}
        >
          {label}
        </label>
      </div>
    </>
  );
}
