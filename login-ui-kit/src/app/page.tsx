import Image from "next/image";
import InputField from "./components/InputField";
import Button from "./components/Button";
import Divider from "./components/Divider";
import { FcGoogle } from "react-icons/fc";

export default function Home() {
  return (
    <main className="flex flex-row items-stretch h-screen bg-background-primary-default">  
    {/* Main container 100% VH */}

        {/* Left section */}
        <div className="flex w-full flex-1 justify-center items-center">

          {/* Form Container  */}
          <div className="flex flex-col justify-center items-stretch gap-8 min-w-[416px]">

          {/* Email Input Field */}
          <InputField
            label="Email"
            name="email-input"
            type="email"
            isError={false}
          />

          {/* Password Input Field  */}
          <InputField
            label="Password"
            name="password-input"
            type="password"
            isError={false}
          />
          {/* Button Component */}
          <Button 
          variant="primary">Log in</Button>

          <div className="flex items-center gap-4">
            <Divider color="gray-200" thickness="1" className="flex-1" />
              <span className="text-font-secondary text-sm whitespace-nowrap">or</span>
            <Divider color="gray-200" thickness="1" className="flex-1" />
          </div>
            <Button variant="primary" icon={<FcGoogle size={24} />}>
              Sign in with Google
            </Button>
              </div>
            </div>
      
        {/* Right section */}
        <div className="flex w-full flex-1 justify-center bg-neutral-900">
          </div>
    </main>
  );
}


