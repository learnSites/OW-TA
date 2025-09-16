import React, { useState } from "react";
import { Link } from "react-router-dom";

let userData = {};
const uploadData = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    response.ok
      ? console.log("uploaded successfully :", data)
      : console.log("Error uploading data:", data);
  } catch (err) {
    console.log("Error uploading data:", err);
  }
};

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: "url('/asset/register-bg.png')" }}
    >
      {/* Card */}
      <div className="w-full max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl
                      backdrop-blur-sm bg-white/30 shadow-2xl rounded-2xl
                      p-6 sm:p-10 flex flex-col gap-8">
        {/* Header */}
        <div className="relative flex justify-center items-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
            Sign Up
          </h1>
          <img
            src="/asset/ow-ta_logo.png"
            alt="Logo"
            className="w-10 h-10 rounded-full absolute right-0 -top-3"
          />
        </div>

        {/* === STEP 1 : Personal Info === */}
        {currentStep === 1 && (
          <Section title="Personal Info">
            <Input name="firstName" label="Full Name" />
            <Input name="email" type="email" label="Email Id" />
            <Input name="phoneNo" label="Phone No" />
            <Footer
              left={
                <p className="text-sm">
                  Already have an account?{" "}
                  <Link to="/login" className="text-blue-600 underline">
                    Login
                  </Link>
                </p>
              }
              right={
                <Button onClick={() => setCurrentStep(2)}>Next &gt;</Button>
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
              onKeyDown={(e) => {
                if (
                  !/[0-9]/.test(e.key) &&
                  !["Backspace", "ArrowLeft", "ArrowRight", "Delete"].includes(
                    e.key
                  )
                ) {
                  e.preventDefault();
                }
              }}
            />
            <Footer
              right={<Button onClick={() => setCurrentStep(3)}>Verify</Button>}
            />
          </Section>
        )}

        {/* === STEP 3 : Account Info === */}
        {currentStep === 3 && (
          <Section title="Account Info">
            <Input name="userName" label="User Name" />
            <Input name="nickName" label="Nick Name" />
            <Input name="password" type="password" label="Password" />
            <Input
              name="confirmPassword"
              type="password"
              label="Confirm Password"
            />
            <Footer
              left={<Button onClick={() => setCurrentStep(1)}>&lt; Prev</Button>}
              right={<Button onClick={() => setCurrentStep(4)}>Next &gt;</Button>}
            />
          </Section>
        )}

        {/* === STEP 4 : Shipping Info === */}
        {currentStep === 4 && (
          <Section title="Shipping Info">
            <Input name="streetAddress" label="Street Address" />
            <Input name="aptUnit" label="Apt/Unit" />
            <Input name="city" label="City" />
            <Input name="state" label="State" />
            <Input name="zipCode" label="Zip Code" />
            <Input name="alterEmail" label="Alternate Email Id" />
            <Input name="alterPhone" label="Alternate Phone No" />
            <Footer
              left={<Button onClick={() => setCurrentStep(3)}>&lt; Prev</Button>}
              right={
                <Button
                  onClick={() => {
                    uploadData();
                    console.log(userData);
                  }}
                >
                  Save
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
  );
}

function Section({ title, children }) {
  return (
    <div className="space-y-6">
      <h4 className="text-xl sm:text-2xl font-semibold text-gray-700">
        {title}
      </h4>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function Input({ name, label, type = "text", ...props }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
      <label
        htmlFor={name}
        className="w-full sm:w-1/3 font-medium text-gray-700 text-base"
      >
        {label}:
      </label>
      <input
        id={name}
        name={name}
        type={type}
        onChange={(e) => (userData[e.target.name] = e.target.value)}
        {...props}
        className="flex-grow p-3 rounded-xl border border-gray-300
                   focus:outline-none focus:ring-2 focus:ring-blue-400
                   text-gray-900 text-base"
      />
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
