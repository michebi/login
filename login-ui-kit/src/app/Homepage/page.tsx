'use client'
import lottieanimation from "./lottieanimation.json"
import React from 'react';
import Lottie from "lottie-react";


export default function Homepage() {
  return (
    <div className="h-screen bg-background-primary-default w-full flex items-center justify-center">
      <div className="flex flex-col justify-center max-w-[416px] text-center gap-2 items-center justify-center">
        <div className="w-40 h-40">
          <Lottie animationData={lottieanimation} loop={false} />
        </div>
        <div className="text-font-primary font-medium text-xl">
          You have successfully logged in!
        </div>
        <p className="text-font-secondary text-base">
          Great job on logging in. It's now time to log out (only if you want to).
          Click on the button below to log out.
        </p>
      </div>
    </div>
  );
}