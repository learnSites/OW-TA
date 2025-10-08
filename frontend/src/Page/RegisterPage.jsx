import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../Components/InputFeild"

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});

  const uploadData = async () => {
    try {
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

  function ValidityState(name, value) {
    let pattern = "";
    switch (name) {
      case "firstName":
        pattern = /^[A-Za-z\s]+$/;
        break;

      case "email":
        pattern = /\S+@\S+\.\S+/;
        break;

      case "phoneNo":
        pattern = /^[0-9]{10}$/;
        break;

      case "otp":
        pattern = /^[0-9]{6}$/;
        break;

      case "userName":
        pattern = /^[A-Za-z0-9]{7}$/;
        break;

      case "nickName":
        pattern = /^[A-Z a-z0-9]{10}$/;
        break;

      case "password":
        pattern = /^[A-Z a-z0-9]{10}$/;
        break;

      case "confirmPassword":
        pattern = /^[A-Z a-z0-9]{10}$/;
        break;
    }

    if (pattern !== "") {
      if (!pattern.test(value)) {
        setFormErrors((prev) => ({
          ...prev,
          [name]: value,
        }));
      } else {
        setFormErrors((prev) => ({
          ...prev,
          [name]: value,
        }));
      }
    }

    console.log(formErrors);
  }

  function Section({ children }) {
    return (
      <div className="space-y-6">
        <div className="space-y-4">{children}</div>
      </div>
    );
  }

  function Button({ children, ...props }) {
    return (
      <button
        {...props}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold
                    px-6 py-2 rounded-lg transition-colors shadow"
      >
        {children}
      </button>
    );
  }

  function Footer({ left, right }) {
    return (
      <div className="flex justify-between items-center mt-4">
        {left || <span />}
        {right}
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat absolute px-4 sm:px-6 lg:px-8 top-0 left-0 z-[999]">
        <div className="absolute inset-0 bg-black/2 backdrop-blur-lg top-0 left-0"></div>
        {/* Card */}
        <div
          className="relative w-full max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-[30rem]
                bg-white shadow-2xl rounded-2xl
                  p-6 sm:p-10 flex flex-col gap-8 relative"
        >
          {/* Header */}
          <div className="relative flex justify-center items-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
              Welcome to OWTA.
            </h1>
            <img
              src="/asset/ow-ta_logo.png"
              alt="Logo"
              className="w-20 h-20 rounded-full absolute left-[22rem] bottom-0"
            />
          </div>

          {/* === STEP 1 : Personal Info === */}
          {currentStep === 1 && (
            <Section>
              <Input
                label="Phone No"
                name="phoneNo"
                placeholder="Phone No"
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
              />
              <Footer
                right={
                  <Button onClick={() => setCurrentStep(2)}>To Verify</Button>
                }
              />
            </Section>
          )}

          {/* === STEP 2 : Verification === */}
          {currentStep === 2 && (
            <Section title="Verification Info">
              <Input
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
              />
              <Footer
                right={
                  <Button onClick={() => setCurrentStep(3)}>Verify</Button>
                }
              />
            </Section>
          )}

          {/* === STEP 3 : Account Info === */}
          {currentStep === 3 && (
            <Section title="Account Info">
              <Input
                name="userName"
                label="User Name"
                placeholder="Choose a username"
              />
              <Input
                name="nickName"
                label="Nick Name"
                placeholder="Optional nickname"
              />
              <Input
                name="password"
                type="password"
                label="Password"
                placeholder="********"
              />
              <Input
                name="confirmPassword"
                type="password"
                label="Confirm Password"
                placeholder="Re-enter password"
              />
              <Footer
                left={
                  <Button onClick={() => setCurrentStep(1)}>&lt; Prev</Button>
                }
                right={
                  <Button
                    onClick={() => {
                      uploadData();
                      console.log(formData);
                    }}
                    style={{ backgroundColor: "#238d23" }}
                  >
                    Create Account
                  </Button>
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
