import React from 'react';

interface TextProps {
  text: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  line?: boolean;
  position?: 'center' | 'left' | 'right';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'; // 텍스트 크기 prop 추가
}

const Text: React.FC<TextProps> = ({
  text,
  onClick,
  line,
  position = 'center',
  size = 'md' // 기본값 설정
}) => {
  // size에 따라 Tailwind 클래스 매핑
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-md',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl'
  };

  return (
    <span
      onClick={onClick}
      className={`relative w-full ${
        position === 'center'
          ? 'text-center'
          : position === 'left'
            ? 'text-left'
            : 'text-right'
      } text-white transition hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-70 ${
        line && 'underline underline-offset-2'
      } ${sizeClasses[size]}`}>
      {text}
    </span>
  );
};

export default Text;
