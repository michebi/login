import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

interface InputFieldProps {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  isActive?: boolean; 
  isFocused?: boolean;
  isError?: boolean; 
  isDisabled?: boolean; 
  helperText?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  placeholder,
  type = 'text',
  isActive,
  isFocused,
  isError,
  helperText,
  isDisabled,
}) => {
  // Define base classes
  let inputClasses =
    "text-lg text-font-primary font-regular bg-background-secondary-default border border-border-primary focus:border-border-brand mt-1 block w-full px-3 py-2 rounded-md placeholder-font-placeholder focus:outline-none focus:ring focus:ring-border-focus sm:text-sm transition duration-300 ease-in-out";

  // Conditionally apply styles based on props
  inputClasses += isError ? " border-border-negative" : " border-border-primary";
  inputClasses += isFocused ? " ring ring-border-focus" : "";
  inputClasses += isActive ? " bg-bg-background-secondary-default" : " bg-bg-background-secondary-default";
  inputClasses += isDisabled ? " bg-background-secondary-disabled text-font-disabled cursor-not-allowed border-border-disabled" : "";

  return (
    <div className="mt-4">
      <label htmlFor={name} className="block font-regular text-font-secondary">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className={inputClasses}
        disabled={isDisabled} // Apply the disabled attribute based on the isDisabled prop
      />
      
      {helperText && (
        <p className={`mt-2 text-sm ${isError ? 'text-font-negative' : 'text-font-secondary'}`}>
          {helperText}
        </p>
      )}

    </div>
  );
};


export default InputField;

