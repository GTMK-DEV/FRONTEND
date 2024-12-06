import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  width?: string;
  height?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  width = '100%',
  height = '64px',
  size = 'lg'
}) => {
  const sizeClasses = {
    sm: 'text-[0.5rem] py-1',
    md: 'text-[1rem] py-2',
    lg: 'text-[1.5rem] py-3'
  };

  return (
    <button
      type="submit"
      disabled={disabled}
      onClick={onClick}
      style={{ width, height }} // 인라인 스타일로 처리
      className={`${sizeClasses[size]} ${!disabled ? 'bg-primary-main' : 'bg-gray-600'} relative w-full rounded-[15px] transition hover:opacity-80 disabled:cursor-not-allowed`}>
      {label}
    </button>
  );
};

export default Button;
