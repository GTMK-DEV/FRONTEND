import Logo from '@/components/Common/Logo';
import React from 'react';

interface RegisterSelectButtonProps {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  image?: React.FC;
  color: string;
  isSelected?: boolean; // 선택 상태
}

const RegisterSelectButton: React.FC<RegisterSelectButtonProps> = ({
  label,
  onClick,
  image,
  color,
  isSelected = false
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${color === 'main' ? 'bg-primary-main' : 'bg-primary-sub'} ${
        isSelected
          ? 'border-white opacity-100'
          : 'border-transparent opacity-70'
      } relative box-border flex h-full w-full flex-col items-center justify-center gap-[20px] rounded-[15px] border-2 border-solid transition disabled:cursor-not-allowed`}>
      <Logo.RegisterLogo />
      <span className="text-3xl">{label}</span>
    </button>
  );
};

export default RegisterSelectButton;
