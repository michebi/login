import Image from "next/image";
import InputField from "./components/InputField";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <InputField
         label="Password"
         name="password"
         placeholder="Enter your password"
         type="password" 
         helperText="Your password must be 8-20 characters long."
         isError={false}
         />

      </div>
    </main>
  );
}
