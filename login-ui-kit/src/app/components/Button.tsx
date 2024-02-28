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
  const baseStyles = 'px-4 py-3 font-base font-medium rounded-xl flex items-center justify-center gap-2 hover:transition duration-300 ease-in-out'; // Ensure flex layout
  const variantStyles = {
    primary: 'bg-black text-white hover:bg-neutral-800',
    secondary: 'bg-green-500 hover:bg-green-700',
    outline: 'bg-transparent text-font-primary border border-primary hover:bg-neutral-100',
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
