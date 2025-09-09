import React from 'react'; 
import { Link } from "react-router-dom";
import { useState } from "react";

let userData = {};
const uploadData = async () => {
    try{
        const response = await fetch(`http://localhost:5000/api/users/register`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        const data = await response.json();
        if(response.ok){
            console.log('uploaded successfully :', data);
        }else{
            console.log('Error uploading data:', data);
        }
    }catch(err){
        console.log('Error uploading data:', err);
    }
}

export default function RegisterPage() {
    const [currentStep, setCurrentStep] = useState(1);

  return (
<div className="w-full h-screen flex items-center justify-center">
  <div className="bg-gray-200 w-[70%] flex flex-col gap-[15px] rounded-[15px] px-[20px] py-[30px]" style={{ boxShadow: "0px 4px 10px 1px" }}>
    <h1 className="text-2xl font-bold mb-4">Registration Page</h1>

    {/* Personal info */}
    <div className="space-y-4" style={{display: currentStep === 1 ? 'block' : 'none'}}>
        <h4 className="text-xl font-bold mb-4">Personal info</h4>

        <div className="flex items-center w-full">
            <label htmlFor="firstName" className="w-[30%]">Full Name :</label>
            <input type="text" id="firstName" className="p-2 border rounded flex-grow" name='firstName' onChange={(val) => userData[val.target.name] = val.target.value} />
        </div>

        <div className="flex items-center w-full">
            <label htmlFor="email" className="w-[30%]">Email Id :</label>
            <input type="email" id="email" className=" p-2 border rounded flex-grow" name='email' onChange={(val) => userData[val.target.name] = val.target.value}/>
        </div>

        <div className="flex items-center w-full">
            <label htmlFor="phoneNo" className="w-[30%]">Phone No :</label>
            <input type="text" id="phoneNo" className="p-2 border rounded flex-grow" name='phoneNo' onChange={(val) => userData[val.target.name] = val.target.value} />
        </div>
            
        <div className="flex justify-end gap-[15px]">
            <button onClick={() => {setCurrentStep(2);console.log(userData)} } data-id="1" className="bg-blue-500 text-white px-4 py-2 rounded">Next &gt;</button>
        </div>
    </div>

    {/* Verification info */}
    <div className="space-y-4" style={{display: currentStep === 2 ? 'block' : 'none'}}>
        <h4 className="text-xl font-bold mb-4">Verification info</h4>

        <div className="flex items-center w-full">
            <label htmlFor="otp" className="w-[30%]">OTP :</label>
            <input type="text" 
                onKeyDown={(e) => { 
                    if (!/[0-9]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight' && e.key !== 'Delete') { 
                        e.preventDefault(); 
                    } 
                }}
            id="otp" className="p-2 border rounded flex-grow" />
        </div>

        <div className="flex justify-end">
            <button onClick={() => setCurrentStep(3)} data-id="2" className="bg-blue-500 text-white px-4 py-2 rounded">Verify</button>
        </div>
    </div>

    {/* Account info */}
    <div className="space-y-4" style={{display: currentStep === 3 ? 'block' : 'none'}}>
        <h4 className="text-xl font-bold mb-4">Account info</h4>

        <div className="flex items-center w-full">
            <label htmlFor="userName" className="w-[30%]">User Name :</label>
            <input type="text" id="userName" className="p-2 border rounded flex-grow" name='userName' onChange={(val) => userData[val.target.name] = val.target.value}/>
        </div>

        <div className="flex items-center w-full">
            <label htmlFor="nickName" className="w-[30%]">Nick Name :</label>
            <input type="text" id="nickName" className=" p-2 border rounded flex-grow" name='nickName' onChange={(val) => userData[val.target.name] = val.target.value}/>
        </div>

        <div className="flex items-center w-full">
            <label htmlFor="password" className="w-[30%]">Password :</label>
            <input type="password" id="password" className="p-2 border rounded flex-grow" name='password' onChange={(val) => userData[val.target.name] = val.target.value}/>
        </div>

        <div className="flex items-center w-full">
            <label htmlFor="confirmPassword" className="w-[30%]">Confirm Password :</label>
            <input type="password" id="confirmPassword" className="p-2 border rounded flex-grow" name='confirmPassword' onChange={(val) => userData[val.target.name] = val.target.value}/>
        </div>
            
        <div className="flex justify-end gap-[15px]">
            <button onClick={() => setCurrentStep(1)} className="bg-blue-500 text-white px-4 py-2 rounded">&lt; Prev</button>
            <button onClick={() => setCurrentStep(4)} data-id="4" className="bg-blue-500 text-white px-4 py-2 rounded">Next &gt;</button>
        </div>
    </div>

    {/* Shipping info */}
    <div className="space-y-4" style={{display: currentStep === 4 ? 'block' : 'none'}}>
        <h4 className="text-xl font-bold mb-4">Shipping info</h4>

        <div className="flex items-center w-full">
            <label htmlFor="streetAddress" className="w-[30%]">Street Address</label>
            <input type="text" id="streetAddress" className="p-2 border rounded flex-grow" name='streetAddress' onChange={(val) => userData[val.target.name] = val.target.value}/>
        </div>

        <div className="flex items-center w-full">
            <label htmlFor="aptUnit" className="w-[30%] cursor-text user-select: allow">Apt/Unit :</label>
            <input type="text" id="aptUnit" className=" p-2 border rounded flex-grow" name='aptUnit' onChange={(val) => userData[val.target.name] = val.target.value}/>
        </div>

        <div className="flex items-center w-full">
            <label htmlFor="city" className="w-[30%]">City :</label>
            <input type="text" id="city" className="p-2 border rounded flex-grow" name='city' onChange={(val) => userData[val.target.name] = val.target.value}/>
        </div>

        <div className="flex items-center w-full">
            <label htmlFor="state" className="w-[30%]">State :</label>
            <input type="text" id="state" className="p-2 border rounded flex-grow" name='state' onChange={(val) => userData[val.target.name] = val.target.value}/>
        </div>

        <div className="flex items-center w-full">
            <label htmlFor="zipCode" className="w-[30%]">Zip Code :</label>
            <input type="text" id="zipCode" className="p-2 border rounded flex-grow" name='zipCode' onChange={(val) => userData[val.target.name] = val.target.value}/>
        </div>

        <div className="flex items-center w-full">
            <label htmlFor="alterEmail" className="w-[30%]">Alter Email Id :</label>
            <input type="text" id="alterEmail" className="p-2 border rounded flex-grow" name='alterEmail' onChange={(val) => userData[val.target.name] = val.target.value}/>
        </div>

        <div className="flex items-center w-full">
            <label htmlFor="alterPhone" className="w-[30%]">Alter Phone No :</label>
            <input type="text" id="alterPhone" className="p-2 border rounded flex-grow" name='alterPhone' onChange={(val) => userData[val.target.name] = val.target.value}/>
        </div>
            
        <div className="flex justify-end gap-[15px]">
            <button onClick={() => setCurrentStep(3)} className="bg-blue-500 text-white px-4 py-2 rounded">&lt; Prev</button>
            <button onClick={() => {uploadData(); console.log(userData);}} data-id="5" className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
        </div>
    </div>

    {/* Register Successful */}
    <div className="space-y-4" style={{display: currentStep === 5 ? 'block' : 'none'}}>
        <h4 className="text-xl font-bold mb-4 text-green-500">Register Successful</h4>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
    </div>

    <div style={{display: currentStep === 1 ? 'block' : 'none'}}>
        if you are a user? <Link to="/login"><a href="/register" className="text-blue-500">Login</a></Link>
    </div>
  </div>
</div>

  );
}