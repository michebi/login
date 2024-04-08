'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import InputField from './InputField';
import Button from './Button';
import Divider from './Divider';
import { FcGoogle } from 'react-icons/fc';
import { IoWarningOutline } from "react-icons/io5";

interface LoginFormProps {
    onLogin: (email: string, password: string) => void;
    onGoogleSignIn: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin, onGoogleSignIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(false);
    const router = useRouter();

    const testEmail = 'test@example.com';
    const testPassword = 'testpassword';

    const handleTestLogin = (email: string, password: string) => {
        if (email === testEmail && password === testPassword) {
            // Successful test login
            console.log('Test login successful');
            setLoginError(false);

            // Navigate to the homepage
            router.push('/Homepage');
        } else {
            // Login failed
            setLoginError(true);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleTestLogin(email, password);
    };

    return (
        <div className="flex flex-col justify-center items-stretch gap-2">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <InputField
                        placeholder="Email"
                        name="email-input"
                        type="email"
                        isError={loginError}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <InputField
                        placeholder="Password"
                        name="password-input"
                        type="password"
                        isError={loginError}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {/* Validation Messages */}
                {loginError && (
                    <div className="flex flex-col items-start gap-1">
                        <div className="flex items-center gap-2 text-red-500 text-sm">
                            <IoWarningOutline size={16} />
                            <span>Your email or password is incorrect.</span>
                        </div>
                    </div>
                )}
                <Button variant="primary" type="submit">
                    Log in
                </Button>
            </form>
            <div className="flex items-center gap-4 my-4">
                <Divider color="gray-200" thickness="1" className="flex-1" />
                <span className="text-font-secondary text-sm whitespace-nowrap">
                    or
                </span>
                <Divider color="gray-200" thickness="1" className="flex-1" />
            </div>
            <Button
                variant="outline"
                icon={<FcGoogle size={24} />}
                onClick={onGoogleSignIn}
            >
                Continue with Google
            </Button>
        </div>
    );
};

export default LoginForm;