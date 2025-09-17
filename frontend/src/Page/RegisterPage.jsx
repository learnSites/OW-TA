import React, { useState } from "react";
import { Link } from "react-router-dom";

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
    let pattern = '';
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

    if(pattern !== ''){
        if (!pattern.test(value)) {
            setFormErrors(prev => ({
                ...prev,
                [name]: false
            }));
        } else {
            setFormErrors(prev => ({
                ...prev,
                [name]: true
            }));
        }
    }
}

export default function RegisterPage() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({});
    const [formErrors, setFormErrors] = useState({});

    return (
        <div
            className="min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat px-4 sm:px-6 lg:px-8"
            style={{ backgroundImage: "url('/asset/register-bg.png')" }}
        >
            {/* Card */}
            <div className="w-full max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl
                  backdrop-blur-md bg-white/30 shadow-2xl rounded-2xl
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
                        <Input name="firstName" label="Full Name" placeholder="Enter your full name" />
                        <Input name="email" type="email" label="Email Id" placeholder="you@example.com" 
                            onChange={(e) => emailValidation(e.target)}
                            onBlur={(e) => handleEmailChange(e.target.value)}
                        />
                        <Input name="phoneNo" label="Phone No" maxlength={10} placeholder="9876543210"
                            onKeyDown={(e) => {
                                if (
                                    !/[0-9]/.test(e.key) &&
                                    !["Backspace", "ArrowLeft", "ArrowRight", "Delete"].includes(e.key)
                                ) {
                                    e.preventDefault();
                                }
                            }}
                        />
                        <Footer
                            left={
                                <p className="text-sm">
                                    Already have an account?{" "}
                                    <Link to="/login" className="text-blue-600 underline">
                                        Login
                                    </Link>
                                </p>
                            }
                            right={<Button onClick={() => setCurrentStep(2)}>Next &gt;</Button>}
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
                                    !["Backspace", "ArrowLeft", "ArrowRight", "Delete"].includes(e.key)
                                ) {
                                    e.preventDefault();
                                }
                            }}
                        />
                        <Footer right={<Button onClick={() => setCurrentStep(3)}>Verify</Button>} />
                    </Section>
                )}

                {/* === STEP 3 : Account Info === */}
                {currentStep === 3 && (
                    <Section title="Account Info">
                        <Input name="userName" label="User Name" placeholder="Choose a username" />
                        <Input name="nickName" label="Nick Name" placeholder="Optional nickname" />
                        <Input name="password" type="password" label="Password" placeholder="********" />
                        <Input
                            name="confirmPassword"
                            type="password"
                            label="Confirm Password"
                            placeholder="Re-enter password"
                        />
                       <Footer
                            left={<Button onClick={() => setCurrentStep(1)}>&lt; Prev</Button>}
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

    );
}

function Section({ title, children }) {
    return (
        <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-700">
                {title}
            </h3>
            <div className="space-y-4">{children}</div>
        </div>
    );
}

function Input({ name, label, type = "text", ...props }) {
    return (
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
            <label
                htmlFor={name}
                className="w-full sm:w-1/3 font-[550] text-gray-700 text-base"
            >
                {label}:
            </label>
            <input
                id={name}
                name={name}
                type={type}
                onChange={(e) => {
                    setFormData({ ...formData, [name]: e.target.value});
                    ValidityState(name, e.target.value);
                }}
                {...props}
                className={`flex-grow p-3 rounded-xl border border-gray-300
                   focus:outline-none ${formErrors.name ? "focus:ring-2 focus:ring-blue-400" : "ring-2 ring-red-400"}
                   text-gray-900 text-base`}
                value={formErrors.name ? props.value : ''}
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
