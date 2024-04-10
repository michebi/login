import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

interface InputFieldProps {
  label?: string;
  name: string;
  placeholder?: string;
  type?: string;
  isActive?: boolean;
  isFocused?: boolean;
  isError?: boolean;
  isDisabled?: boolean;
  helperText?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  placeholder,
  type = "text",
  isActive,
  isFocused,
  isError,
  helperText,
  isDisabled,
  value,
  onChange,
}) => {
  // Define base classes
  let inputClasses =
    "text text-base text-font-primary bg-background-primary-default border border-border-primary focus:border-border-brand mt-2 block w-full px-4 py-3 rounded-xl placeholder-font-placeholder focus:outline-none focus:ring focus:ring-border-focus sm:text-base transition duration-300 ease-in-out";

  // Conditionally apply styles based on props
  inputClasses += isError
    ? " border-border-negative"
    : " border-border-primary";
  inputClasses += isFocused ? " ring ring-border-focus" : "";
  inputClasses += isActive
    ? " bg-bg-background-primary-default"
    : " bg-bg-background-primary-default";
  inputClasses += isDisabled
    ? " bg-background-secondary-disabled text-font-disabled cursor-not-allowed border-border-disabled"
    : "";

  return (
    <div className="inputField">
      <label htmlFor={name} className="block text-sm text-font-secondary">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className={inputClasses}
        disabled={isDisabled} // Apply the disabled attribute based on the isDisabled prop
        value={value} // Controlled component
        onChange={onChange} // Handle changes
      />

      {helperText && (
        <p
          className={`mt-2 text-sm ${isError ? "text-font-negative" : "text-font-secondary"}`}
        >
          {helperText}
        </p>
      )}
    </div>
  );
};

export default InputField;
