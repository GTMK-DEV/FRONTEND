'use client';
import Logo from '@/components/Common/Logo';
import Button from '@/components/atoms/Button/Button';
import Text from '@/components/atoms/Text/Text';
import { useRouter } from 'next/navigation';
import React from 'react';

const Login = () => {
  const router = useRouter();

  return (
    <section className="relative w-full">
      <div className="absolute m-auto flex h-screen w-full items-center justify-center">
        <Logo.BilleasyLogo />
      </div>
      <div className="absolute flex h-screen w-full flex-col justify-end">
        <div className="mb-[50px] flex w-full flex-col items-center gap-[20px]">
          <Button
            label="로그인 하기"
            onClick={() => router.push('/auth/login')}
          />
          <Text
            text="아직 회원이 아니신가요?"
            line={true}
            onClick={() => router.push('/auth/register')}
          />
        </div>
      </div>
    </section>
  );
};

export default Login;
