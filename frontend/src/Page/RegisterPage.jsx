import React, { useEffect, useState, useRef, forwardRef } from "react";
import { Link } from "react-router-dom";
import Input from "../Components/InputFeild";
import Select from "../Components/selectFeild";
import { setUpRecaptcha } from "../utils/phoneAuth";

export default function RegisterPage({ visible, setVisible }) {
  const [currentStep, setCurrentStep] = useState(1);
  const InputMobile = useRef();
  const selectCountry = useRef();
  const MobileVerifyBut = useRef();
  const InputOtp = useRef();
  const InputUserName = useRef();
  const InputNickName = useRef();
  const InputPassword = useRef();
  const InputPasswordConfirmation = useRef();
  const [confirmation, setConfirmation] = useState(null);
  const [mobile, setMobile] = useState('');
  const MainPass = useRef('');

  const sendOtp = async () => {
    try {
      if (!InputMobile.current?.isValid?.() || InputMobile.current?.val?.() == "") return;
      const phone = selectCountry.current.val() + InputMobile.current.val();
      const confirmationResult = await setUpRecaptcha(phone);
      setConfirmation(confirmationResult);
      setMobile(InputMobile.current.val());
      setCurrentStep(2);
    } catch (error) {
      console.error(error);
    }
  };

  const verifyOtp = async () => {
    try {
      if (!InputOtp.current?.isValid?.() || InputOtp.current?.val?.() == "") return;
      const otp = InputOtp.current.val();
      await confirmation.confirm(otp);
      setCurrentStep(3);
    } catch (error) {
      console.error("Error verifying OTP:", error);
      InputOtp.current.clear();
    }
  };

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "auto";
  }, [visible]);

  useEffect(() => {
    const checkValidity = () => {
      if (!MobileVerifyBut.current) return;
      if (InputMobile.current?.isValid?.() && InputMobile.current?.val?.() !== "") {
        MobileVerifyBut.current.style.cursor = "pointer";
      } else {
        MobileVerifyBut.current.style.cursor = "not-allowed";
      }
    };

    checkValidity();
    const interval = setInterval(checkValidity, 300);
    return () => clearInterval(interval);
  }, []);


  const uploadData = async () => {
    try {
      const formData = [
        {userName: InputUserName.current.val()},
        {nickName: InputNickName.current.val()},
        {password: InputPassword.current.val()},
        {passwordConfirmation: InputPasswordConfirmation.current.val()},
        {mobileNo: selectCountry.current.val() + mobile.trim()}
      ];
      const response = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      response.ok
        ? console.log("uploaded successfully :", data)
        : console.log("Error uploading data:", data);
    } catch (err) {
      console.log("Error uploading data:", err);
    }
  };

  function Section({ children }) {
    return (
      <div className={`space-y-6`}>
        <div className="space-y-4 flex flex-col items-center">{children}</div>
      </div>
    );
  }

  const Button = React.forwardRef(({ children, left, right, className, ...props }, ref) => (
    <div
      ref={ref}
      className={`flex bg-gray-900 hover:bg-gray-700 text-white font-semibold
        rounded-xl transition-colors shadow ${className}`}
      style={{cursor: 'pointer'}}
    >
      {left}
      <div {...props} className="flex items-center">{children}</div>
      {right}
    </div>
  ));


  function Footer({ center, onClick, className }) {
    return (
      <div onClick={onClick} className={`flex justify-center items-center pt-2 ${className}`}>
        <div>{center}</div>
      </div>
    );
  }

  return (
    <>
      <div
        style={{ overflow: "hidden" }}
        className="min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat absolute px-4 sm:px-6 lg:px-8 top-0 left-0 z-[999]"
      >
        {(currentStep === 1 || currentStep === 2) && <div id="recaptcha-container"></div>}

        <div className="absolute inset-0 bg-black/2 backdrop-blur-lg top-0 left-0"></div>
        {/* Card */}
        <div
          className="relative w-full max-w-xl sm:max-w-md md:max-w-lg lg:max-w-[30rem]
                bg-white shadow-2xl rounded-2xl
                  p-6 sm:p-10 flex flex-col gap-8 relative"
        >
          {/* Header */}
          <div className="relative flex justify-center items-center">
            <h4 className="text-lg tracking-wider font-bold text-gray-600 m-2 text-center relative">
              {currentStep == 1 ? "Start Shopping with OWTA Today!" : ""}
              {currentStep === 2 && (
                <span className="flex items-center gap-2 pb-1 justify-center">
                  Verify Yourself{" "}
                  <img
                    className="w-11 h-11 absolute top-[-30%] right-[-35%]"
                    src="/asset/ow-ta_Logo.png"
                    alt="Logo"
                  />
                </span>
              )}
              {currentStep == 3 ? "Let Join The Community!" : ""}
            </h4>
            
          </div>

          {/* === STEP 1 : Personal Info === */}
          {(currentStep) && (
            <>
              <div className={`${currentStep === 1 ? 'block' : 'hidden'}`}>
                <Section>
                  <div className={`flex items-center w-[80%] gap-2`}>
                  <Select ref={selectCountry} className="w-[25%]" />
                  <Input
                    width="w-[75%]"
                    ref={InputMobile}
                    label="Mobile No"
                    name="MobileNo"
                    placeholder="Example: 1234567890"
                    onKeyDown={(e) => {
                      if (
                        !/[0-9]/.test(e.key) &&
                        ![
                          "Backspace",
                          "ArrowLeft",
                          "ArrowRight",
                          "Delete",
                        ].includes(e.key)
                      ) {
                        e.preventDefault();
                      }
                    }}
                    className="mx-auto select-none"
                    maxLength={10}
                  />
                  </div>
                  <Footer
                    className="pb-6 pt-2"
                    onClick={() => sendOtp()}
                    center={
                      <Button
                        ref={MobileVerifyBut}
                        right={
                          <img
                            className="w-11 h-11 pointer-events-none"
                            src="/asset/ow-ta_Logo.png"
                            alt="Logo"
                          />
                        }
                        className="mt-2 py-1 px-6 flex gap-1"
                      >
                        To Verify
                      </Button>
                    }
                  />
                </Section>
                <div className="relative mt-4">
                  <hr />
                  <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 text-gray-500 text-xs bg-white px-2">
                    OR
                  </div>
                </div>
                <Footer
                  className="pt-10"
                  center={
                    <Button
                      left={
                        <img
                          className="w-6 h-6 pointer-events-none"
                          src="/asset/google-Logo.png"
                          alt="Logo"
                        />
                      }
                      children="Google"
                      className="max-w-fit py-3 px-8 flex gap-4"
                    ></Button>
                  }
                />
              </div>
            </>
          )}

          {/* === STEP 2 : Verification === */}
          {currentStep === 2 && (
            <Section title="Verification Info">
              <Input
                ref={InputOtp}
                width="w-[80%]"
                name="otp"
                label="OTP"
                placeholder="6-digit code"
                onKeyDown={(e) => {
                  if (
                    !/[0-9]/.test(e.key) &&
                    ![
                      "Backspace",
                      "ArrowLeft",
                      "ArrowRight",
                      "Delete",
                    ].includes(e.key)
                  ) {
                    e.preventDefault();
                  }
                }}
                className="mx-auto select-none"
                maxLength={6}
              />
              <Footer
                onClick={() => verifyOtp()}
                center={
                  <Button className="px-8 py-2" children="Verify"></Button>
                }
              />
            </Section>
          )}

          {/* === STEP 3 : Account Info === */}
          {currentStep === 3 && (
            <Section title="Account Info">
              <Input
                ref={InputUserName}
                name="userName"
                label="User Name"
                placeholder="Example: user123"
                width="w-[80%]"
                className="mx-auto select-none"
                maxLength={15}
              />
              <Input
                ref={InputNickName}
                name="nickName"
                label="Nick Name"
                width="w-[80%]"
                placeholder="Optional nickname"
                className="mx-auto select-none"
                maxLength={10}
              />
              <Input
                ref={InputPassword}
                getValue={MainPass}
                name="password"
                type="password"
                label="Password"
                width="w-[80%]"
                placeholder="********"
                className="mx-auto select-none"
                maxLength={15}
              />

              <Input
                ref={InputPasswordConfirmation}
                label="Confirm Password"
                name="passwordConfirmation"
                type="password"
                width="w-[80%]"
                mainPass={MainPass}
                placeholder="Re-enter password"
                className="mx-auto select-none"
                maxLength={15}
              />

              <Footer
                center={
                  <Button
                    onClick={() => uploadData()}
                    right={
                      <img
                        className="w-11 h-11 pointer-events"
                        src="/asset/ow-ta_Logo.png"
                        alt="Logo"
                      />
                    }
                    children="Join"
                    className="mt-2 py-1 px-6 flex gap-1"
                  ></Button>
                }
              />
            </Section>
          )}

          {/* === STEP 5 : Success === */}
          {currentStep === 5 && (
            <div className="text-center space-y-6">
              <h4 className="text-2xl font-bold text-green-600">
                Registration Successful
              </h4>
              <Button>Login</Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
