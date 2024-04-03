import React, { useState } from 'react';
import InputField from './InputField'; // Adjust the import path according to your project structure
import Button from './Button';
import Divider from './Divider';
import { FcGoogle } from 'react-icons/fc'; // Ensure this import is included for the Google icon

interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
  onGoogleSignIn: () => void; // Make sure this prop is handled if using TypeScript
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin, onGoogleSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    // Email Input Form
    <div className="flex flex-col justify-center items-stretch gap-2">

        {/* Flex to separate input field and button */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        {/* Flex to add gap between input fields, but not the button */}
        <div className="flex flex-col gap-2">
            <InputField
            placeholder="Email"
            name="email-input"
            type="email"
            isError={false}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />

            {/* Password Input Form */}
            <InputField
            placeholder="Password"
            name="password-input"
            type="password"
            isError={false}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>

        {/* Login Button */}
        <Button variant="primary" type="submit">Log in</Button>
      </form>

      {/* Or Divider */}
      <div className="flex items-center gap-4 my-4">
        <Divider color="gray-200" thickness="1" className="flex-1" />
        <span className="text-font-secondary text-sm whitespace-nowrap">or</span>
        <Divider color="gray-200" thickness="1" className="flex-1" />
      </div>

      {/* Continue with Google Button */}
      <Button variant="outline" icon={<FcGoogle size={24} />} onClick={onGoogleSignIn}>
        Continue with Google
      </Button>
    </div>
  );
};

export default LoginForm;
