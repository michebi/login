import React from 'react';
import Image from 'next/image';
import Spline from '@splinetool/react-spline';

interface RightSectionProps {
  roundedCorners?: boolean;
  background: 'illustration' | 'spline';
  illustrationSrc?: string;
  spline?: string;
}

const RightSection: React.FC<RightSectionProps> = ({
  roundedCorners = false,
  background,
  illustrationSrc,
  spline,
}) => {
  return (
    <div className="hidden md:flex w-full md:w-1/2 lg:flex-1 justify-center items-center bg-black">
      <div
        className={`w-full h-full ${
          roundedCorners ? 'rounded-[32px] overflow-hidden' : ''
        }`}
      >
        {background === 'illustration' && illustrationSrc && (
          <div className="w-full h-full relative">
            <Image src={illustrationSrc} alt="Illustration" layout="fill" objectFit="cover" />
          </div>
        )}
        {background === 'spline' && spline && (
          <div className="w-full h-full">
            <Spline scene={spline} className="w-full h-full" />
          </div>
        )}
      </div>
    </div>
  );
};

export default RightSection;