import { useState, useRef, useEffect, forwardRef, useImperativeHandle } from "react";

const Input = forwardRef(({
  name,
  label,
  placeholder,
  value,
  width = "w-full",
  className,
  validClass,
  type = "text",
  ...props
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isValue, setIsValue] = useState(false);
  const [validate, setValidate] = useState(true);
  const [passTitle, setpassTitle] = useState('');
  const [passValid, setpassValid] = useState([]);
  const inputRef = useRef(null);
  const labelRef = useRef(null);
  const [sizes, setSizes] = useState({ inputW: 0, inputH: 0, labelW: 0, labelH: 0 });

  useImperativeHandle(ref, () => ({
    isValid: () => validate,
    val: () => inputRef.current.value,
    clear: () => {
      if (inputRef.current) {
        inputRef.current.value = "";
        setIsValue(false);
        setValidate(false);
      }
    },
  }));

  // Measure label & input
  useEffect(() => {
    const measure = () => {
      if (inputRef.current && labelRef.current) {
        setSizes({
          inputW: inputRef.current.offsetWidth,
          inputH: inputRef.current.offsetHeight,
          labelW: labelRef.current.offsetWidth,
          labelH: labelRef.current.offsetHeight,
        });
        console.log(isFocused + " " + isValue + "  "+ validate);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Validate Mobile Number
  function Validation(value) {
    if (name === "MobileNo") {
      const phoneRegex = /^[0-9]{10}$/;
      setValidate(phoneRegex.test(value));
      return phoneRegex.test(value);
    }
    if (name === "otp") {
      const otpRegex = /^[0-9]{6}$/;
      setValidate(otpRegex.test(value));
      return otpRegex.test(value);
    }
    if (name === "userName") {
      const phoneRegex = /^[A-Za-z0-9]{7,15}$/;
      setValidate(phoneRegex.test(value));
      return phoneRegex.test(value);
    }
    if (name === "password" || name === "passwordConfirmation") {
      const passwordRegex = /^(?=.*[0-9])(?=.*[^A-Za-z0-9]).{7,15}$/;
      const numRegex = /[0-9]/;
      const specialRegex = /[^A-Za-z 0-9]/;
      const alphabetRegex = /^.{7,15}$/;
      let valid = [];
      
      if(numRegex.test(value)) valid.push('0');
      if(specialRegex.test(value)) valid.push('@');
      if(alphabetRegex.test(value)) valid.push('A7');

      setValidate(passwordRegex.test(value));
      setpassValid(valid);

      return passwordRegex.test(value);
    }
    return true;
  }

  const topAniSize = sizes['inputH'] * 0.5;
  const rightAniSize = sizes['labelW'] - (sizes['inputW'] - 32);
  

  // Animation direction
  const direction = isFocused || !isValue ? 3.5 : -rightAniSize;

  // Floating (up/down)
  const floatY = isFocused || isValue || !validate ? -topAniSize : 0; // pixels or rem

  const transformStyle = `translateX(${direction}px) translateY(${floatY}px)`;

  // Validation color
  const colorClass = validate
    ? "text-gray-500"
    : "text-red-500";

  return (
    <div className={`flex flex-col justify-center ${width}`}>
      <div className={`relative ${className} w-full`}>
        <input
          ref={inputRef}
          id={name}
          name={name}
          type={type}
          defaultValue={value}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            setIsFocused(false);
            if (!Validation(e.target.value)) e.target.value = "";
          }}
          placeholder={
            (!validate && isFocused) || (!isFocused && !validate) ? placeholder : ""
          }
          onChange={(e) => {
            setIsValue(e.target.value !== "");
            if (!validate) Validation(e.target.value);
          }}
          {...props}
          className={`p-3 rounded-xl border w-full
            ${validate ? "border-gray-300 focus:ring-gray-900" : "border-red-500 focus:ring-red-600"}
            focus:outline-none focus:ring-1 text-gray-900 text-base transition-all duration-300 ease-in-out`}
        />

        <label
          ref={labelRef}
          htmlFor={name}
          className={`absolute left-3 top-3 bg-white px-1 
            transform transition-all duration-500 ease-in-out origin-left
            ${colorClass}
            pointer-events-none select-none`}
          style={{ transform: transformStyle }}
        >
          {label}
        </label>
        {name === "password" && (<div className="flex gap-1 pl-3">
          <label 
            className = {`cursor-pointer select-none text-gray-500 transform transition-all duration-500 ease-in-out hover:translate-y-1 hover:bg-gray-900 hover:rounded-xl p-1 hover:text-white ${['@'].some(char => passValid.includes(char)) ? 'text-red-500' : ''}`}
            onMouseEnter={() => setpassTitle('@')}
            onMouseLeave={() => setpassTitle('')}
          >@</label>
          <label 
            className="cursor-pointer select-none text-gray-500 transform transition-all duration-500 ease-in-out hover:translate-y-1 hover:bg-gray-900 hover:rounded-xl p-1 pl-2 pr-2 hover:text-white"
            onMouseEnter={() => setpassTitle('0')}
            onMouseLeave={() => setpassTitle('')}
          >0</label>
          <label 
            className="cursor-pointer select-none text-gray-500 transform transition-all duration-500 ease-in-out hover:translate-y-1 hover:bg-gray-900 hover:rounded-xl p-1 hover:text-white"
            onMouseEnter={() => setpassTitle('A7')}
            onMouseLeave={() => setpassTitle('')}
          >A7</label>

          <label className="absolute top-3 bg-white text-gray-900">
            {passTitle == '@' ? 'Atleast one special character' : ''}
            {passTitle == '0' ? 'Alteast one numberic character' : ''}
            {passTitle == 'A7' ? 'Altest seven alphabet' : ''}
          </label>
        </div>)}
      </div>
    </div>
  );
});

export default Input;
