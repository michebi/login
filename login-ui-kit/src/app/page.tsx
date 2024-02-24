import Image from "next/image";
import InputField from "./components/InputField";


export default function Home() {
  return (
    <main className="flex flex-row items-stretch bg-background-primary-default">
      {/* Ensure this container takes the full viewport width */}  
            
        {/* Each child now explicitly set to take up half of the container's width */}
        <div className="flex w-full flex-1 justify-center">
          <div className="">
          <InputField
            label="Email"
            name="email"
            placeholder="example@email.com"
            type="email"
            isError={false}
          />
          </div>
        </div>

        
        
        <div className="flex w-full flex-1 justify-center">
          <InputField
            label="Password"
            name="password"
            placeholder="Enter your password"
            type="password"
            isError={false}
          />
      </div>
    </main>
  );
}


