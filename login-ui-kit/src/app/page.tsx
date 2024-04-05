"use client"

import Image from "next/image";
import InputField from "./components/InputField";
import Button from "./components/Button";
import Divider from "./components/Divider";
import { FcGoogle } from "react-icons/fc";
import Spline from '@splinetool/react-spline';
import LoginForm from "./components/LoginForm";
import { ThemeProvider } from 'next-themes'

export default function Home() {
  // Define the callback function for handling normal login
  const handleLogin = (email: string, password: string) => {
    console.log('Login attempt with:', email, password);
    // Here you would typically check the credentials or pass them to an API
  };

  // Define the callback function for handling Google Sign-In
  const handleGoogleSignIn = () => {
    console.log('Google Sign-In attempt');
    // Here you would handle the Google Sign-In flow
  };

  const isTestLogin = true; // Set to false to render the actual login form

  return (
    <main className="flex flex-row md:flex-row items-stretch h-screen">
      {/* Main container 100% VH */}
      {/* Left section */}
      <div className="flex w-full md:w-1/2 lg:flex-1 justify-center items-center bg-background-primary-default dark: bg-background-primary-default">
        {/* Left Body */}
        <div className="flex flex-col justify-center w-full gap-8 mx-8 max-w-[416px]">
          {/* Login Title */}
          <h1 className="text-2xl font-medium text-font-primary text-center">Login into Michebi</h1>
          {/* LoginForm */}
          {isTestLogin ? (
            <LoginForm onLogin={handleLogin} onGoogleSignIn={handleGoogleSignIn} />
          ) : (
            // Render the actual login form with the appropriate onLogin and onGoogleSignIn functions
            <LoginForm onLogin={handleLogin} onGoogleSignIn={handleGoogleSignIn} />
          )}
        </div>
      </div>
      {/* Right section - hidden on mobile, displayed from md breakpoint and up */}
      <div className="hidden md:flex w-full md:w-1/2 lg:flex-1 justify-center bg-black">
        <Spline scene="https://prod.spline.design/Du252TdoVyULk5MM/scene.splinecode" />
      </div>
    </main>
  );
}