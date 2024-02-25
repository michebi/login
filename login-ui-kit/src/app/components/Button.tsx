// components/Button.tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'outline' | 'tertiary';
  state?: 'danger' | 'success';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  state,
  className,
  disabled,
  ...props
}) => {
  const baseStyles = 'px-4 py-3 font-base text-white rounded-xl';
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

  // Merge styles based on props
  const buttonStyles = `${baseStyles} ${
    variantStyles[variant]
  } ${state ? stateStyles[state] : ''} ${disabled ? disabledStyles : ''} ${className}`;

  return (
    <button
      {...props}
      className={buttonStyles}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
