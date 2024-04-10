'use client'

import lottieanimation from "./lottieanimation.json"
import React from 'react';
import Lottie from "lottie-react";
import LogOutButton from "../components/LogOutButton";


export default function Homepage() {
  return (
    <div className="h-screen bg-background-primary-default w-full flex items-center justify-center">
      <div className="flex flex-col max-w-[416px] text-center gap-9 items-center justify-center opacity-0 scale-0 animate-fade-in">
        <div className="flex flex-col gap-3 justify-center items-center">
        <div className="w-24 h-24">
          <Lottie animationData={lottieanimation} loop={false} />
        </div>
        <div className="text-font-primary font-medium text-xl">
          You have successfully logged in!
        </div>
        <p className="text-font-secondary text-base break-all">
          Great job, you logged in! It's now time to log out. <br />Click on the button below to log out.
        </p>
        </div>
        <LogOutButton />
      </div>
    </div>
  );
}