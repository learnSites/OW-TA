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
  let [validate, setValidate] = useState(true);

  function Validation(value){
    if(name === "MobileNo"){
      const phoneRegex = /^[0-9]{10}$/;
      console.log(phoneRegex.test(value));
      setValidate(phoneRegex.test(value));
    }
  }

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
            onChange={(e) => {
              setIsValue(e.target.value == "" ? false : true);
              if(['deleteContentBackward','deleteContentForward'].includes(e.nativeEvent.inputType.toLowerCase())){
                console.log("delete");
                Validation(e.target.value);
              }
            }}
            {...props}
            className={`flex-grow p-3 rounded-xl border ${validate ? "border-gray-300" : "border-red-500"}
                        focus:outline-none focus:ring-2 focus:ring-gray-900
                        text-gray-900 text-base`}
          />
        </div>
        <label
          htmlFor={name}
          className={`px-2 ${isValue || isFocused ? "top-[-24%] text-sm transition-all duration-200 ease-in-out" : "bg-white text-gray-500 top-[23.5%] tracking-wide transition-all duration-500 ease-in-out"} ${isFocused ? "text-gray-900" : ""}
            ${
              !isFocused && isValue
                ? "absolute translate-x-[300%] bg-white text-gray-500"
                : "absolute translate-x-[42%] bg-white text-gray-500"
            } 
          `}
        >
          {label}
        </label>
      </div>
    </>
  );
}
