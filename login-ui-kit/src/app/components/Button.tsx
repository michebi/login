// components/Button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'outline' | 'tertiary';
  state?: 'danger' | 'success';
  icon?: React.ReactNode; // Accept an icon component
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  state,
  className,
  disabled,
  icon, // Destructure the icon prop
  ...props
}) => {
  const baseStyles = 'px-4 py-3 font-base text-white rounded-xl flex items-center justify-center gap-2'; // Ensure flex layout
  const variantStyles = {
    primary: 'bg-blue-500 hover:bg-blue-600',
    secondary: 'bg-green-500 hover:bg-green-700',
    outline: 'bg-transparent hover:bg-blue-500 text-blue-700 border border-blue-500 hover:text-white',
    tertiary: 'bg-yellow-500 hover:bg-yellow-700',
  };
  const stateStyles = {
    danger: 'bg-red-500 hover:bg-red-700',
    success: 'bg-green-500 hover:bg-green-700',
  };
  const disabledStyles = 'opacity-50 cursor-not-allowed';

  const buttonStyles = `${baseStyles} ${
    variantStyles[variant]
  } ${state ? stateStyles[state] : ''} ${disabled ? disabledStyles : ''} ${className}`;

  return (
    <button
      {...props}
      className={buttonStyles}
      disabled={disabled}
    >
      {icon && <span className="icon">{icon}</span>} {/* Render the icon */}
      {children}
    </button>
  );
};

export default Button;
