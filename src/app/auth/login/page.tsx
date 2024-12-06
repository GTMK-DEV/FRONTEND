'use client';

import Logo from '@/components/Common/Logo';
import Button from '@/components/atoms/Button/Button';
import Input from '@/components/atoms/Input/Input';
import Text from '@/components/atoms/Text/Text';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FieldValues>({
    defaultValues: {
      id: '',
      password: ''
    }
  });

  const onsubmit: SubmitHandler<FieldValues> = async body => {
    setIsLoading(true);
    try {
      const { data } = await axios.post('/api/register', body);
      console.log(data);
      //   router.push('/auth/login');
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative flex w-full flex-col items-center gap-[30px] py-[80px]">
      <Logo.BilleasyTextLogo
        width={132}
        height={43}
        onClick={() => router.push('/auth')}
      />
      <form
        onSubmit={handleSubmit(onsubmit)}
        className="mt-[20px] flex w-full flex-col gap-[20px]">
        <Input
          id="text"
          placeholder="아이디"
          disabled={isLoading}
          register={register}
          errors={errors}
          required={true}
        />
        <Input
          id="password"
          placeholder="비밀번호"
          disabled={isLoading}
          register={register}
          errors={errors}
          required={true}
        />
        <Button label="로그인" />
      </form>
      <Text
        text="회원가입히러 가기"
        line={true}
        size="lg"
        position="center"
        onClick={() => router.push('/auth/register')}
      />
    </section>
  );
};

export default Login;
