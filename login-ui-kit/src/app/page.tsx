'use client'

import Image from "next/image";
import InputField from "./components/InputField";
import Button from "./components/Button";
import Divider from "./components/Divider";
import { FcGoogle } from "react-icons/fc";
import Spline from '@splinetool/react-spline';
import LoginForm from "./components/LoginForm";
import { ThemeProvider } from 'next-themes'
import { useTheme } from 'next-themes'
import RightSection from "./components/RightSection";

export default function Home() {

  const handleLogin = (email: string, password: string) => {
    console.log('Login attempt with:', email, password);
    // Here you would typically check the credentials or pass them to an API
  };

  // Define the callback function for handling Google Sign-In
  const handleGoogleSignIn = () => {
    console.log('Google Sign-In attempt');
  };

  const isTestLogin = true;

  return (
    // Overall Layout
    <main className="flex flex-row md:flex-row items-stretch h-screen">

      {/* Left-section */}
      <div className="flex w-full md:w-1/2 lg:flex-1 justify-center items-center bg-background-primary-default">

        <div className="flex flex-col justify-center w-full gap-8 mx-8 max-w-[416px]">
          <h1 className="text-2xl font-medium text-font-primary text-center">Login into Michebi</h1>

          {/* Login Form */}
          {isTestLogin ? (
            <LoginForm onLogin={handleLogin} onGoogleSignIn={handleGoogleSignIn} />
          ) : (
            <LoginForm onLogin={handleLogin} onGoogleSignIn={handleGoogleSignIn} />
          )}
        </div>
      </div>
      <RightSection
        roundedCorners={true}
        background="spline"
        spline="https://prod.spline.design/Du252TdoVyULk5MM/scene.splinecode"
      />
    </main>
  );
}