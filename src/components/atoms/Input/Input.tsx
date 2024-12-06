import React from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface InputProps {
  id: string;
  label?: string;
  placeholder: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  register: UseFormRegister<FieldValues>;
  required?: boolean;
  errors: FieldErrors;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input: React.FC<InputProps> = ({
  id,
  label,
  placeholder,
  type = 'text',
  disabled,
  formatPrice,
  register,
  required,
  errors,
  onChange
}) => {
  return (
    <div className="relative w-full">
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        className={`w-full rounded-[13px] border-2 border-solid border-gray-600 bg-transparent p-5 font-light outline-none focus:placeholder-transparent disabled:cursor-not-allowed disabled:opacity-70 ${errors[id] ? 'border-rose-500' : 'border-gray-600'} ${errors[id] ? 'focus:border-rose-500' : 'focus:border-gray-400'} `}
      />
      {/* <label
        className={`text-md -transalte-y-3 absolute top-5 z-10 origin-[0] transform duration-150 ${
          formatPrice ? 'left-9' : 'left-4'
        } peer-foucs:-translate-y-4 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:text-neutral-700 ${errors[id] ? 'text-rose-500' : 'text-zinc-400'} `}>
        {label}
      </label> */}
    </div>
  );
};

export default Input;
