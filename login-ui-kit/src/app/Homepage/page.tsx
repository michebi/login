'use client'

import { Player, Controls } from '@lottiefiles/react-lottie-player';
import lottieanimation from "./lottieanimation.json"
import React from 'react';


export default function Homepage() {
  return (
    <div className="h-screen bg-background-primary-default w-full flex items-center justify-center">
      <div className="flex flex-col justify-center max-w-[416px] text-center gap-2">
        <Player
          autoplay
          loop = {false}
          src="src/app/Homepage/lottieanimation.json"
          style={{ height: '150px', width: '150x' }}
        >
          <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
        </Player>
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