"use client"

import Image from "next/image";
import InputField from "./components/InputField";
import Button from "./components/Button";
import Divider from "./components/Divider";
import { FcGoogle } from "react-icons/fc";
import Spline from '@splinetool/react-spline';

export default function Home() {
  return (
    <main className="flex flex-row md:flex-row items-stretch h-screen bg-background-primary-default">
      {/* Main container 100% VH */}

      {/* Left section */}
      <div className="flex w-full md:w-1/2 lg:flex-1 justify-center items-center">

        {/* Left Body */}
        <div className="flex flex-col justify-center w-full gap-8 mx-8 max-w-[416px]">

          {/* Login Title */}
          <h1 className="text-2xl font-medium text-font-primary text-center">Login into Michebi</h1> 

          {/* Form Container  */}
          <div className="flex flex-col justify-center items-stretch gap-4">

            {/* Email Input Field */}
            <InputField
              label="Email"
              name="email-input"
              type="email"
              isError={false}
            />

            {/* Button Component */}
            <Button variant="primary">Continue</Button>

            <div className="flex items-center gap-4">
              <Divider color="gray-200" thickness="1" className="flex-1" />
                <span className="text-font-secondary text-sm whitespace-nowrap">or</span>
              <Divider color="gray-200" thickness="1" className="flex-1" />
            </div>
              <Button variant="outline" icon={<FcGoogle size={24} />}>
                Sign in with Google
              </Button>
          </div>
        </div>
      </div>
      
      {/* Right section - hidden on mobile, displayed from md breakpoint and up */}
      <div className="hidden md:flex w-full md:w-1/2 lg:flex-1 justify-center bg-black">
      <Spline scene="https://prod.spline.design/Du252TdoVyULk5MM/scene.splinecode" />
      </div>
    </main>
  );
}