import { useState } from "react";

export default function Input({ name, placeholder, label, type = "text", ...props }) {
  let [isFocused, setIsFocused] = useState(false);
  return (
    <>
      <div className="relative">
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
          <input
            id={name}
            name={name}
            type={type}
            placeholder={isFocused ? "" : placeholder}
          //   value={formData[name] || ""}
            onFocus={() => setIsFocused(true)}
            onBlur={(e) => {
              setIsFocused(false);
            }}
            {...props}
            className={`flex-grow p-3 rounded-xl border border-gray-300
                      focus:outline-none focus:ring-2 focus:ring-blue-400
                      text-gray-900 text-base`}
          />
        </div>
        <div className={`absolute left-[20px] top-[-13.5px] bg-white text-blue-500 px-2 ${isFocused ? "block top-[-10px] text-sm opacity-100" : "hidden top-3 text-base opacity-50"} transition-all duration-300`}>{label}</div>
      </div>
    </>
  );
}