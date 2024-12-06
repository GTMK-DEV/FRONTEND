'use client';

import Logo from '@/components/Common/Logo';
import Text from '@/components/atoms/Text/Text';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Button from '@/components/atoms/Button/Button';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { SectionRenderer } from '../login/SectionRenderer';

const Register = () => {
  const [currentStep, setCurrentStep] = useState(0); // 현재 섹션 상태
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // 버튼 활성화 상태
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm<FieldValues>({
    defaultValues: {
      userType: '',
      id: '',
      password: '',
      phoneNumber: '',
      name: '',
      storeAddress: ''
    }
  });
  const router = useRouter();

  // 유저 타입에 따른 최대 단계 설정
  const userType = watch('userType');
  const maxStep = userType === '가게' ? 5 : 4;

  const onSubmit: SubmitHandler<FieldValues> = async data => {
    console.log('Final Data:', data);
    router.push('/auth/login');
    // 서버에 데이터 전송
    // await axios.post('/api/register', data);
  };

  const handleNext = () => {
    if (currentStep === maxStep) {
      handleSubmit(onSubmit)();
    } else {
      setCurrentStep(prev => prev + 1);
      setIsButtonDisabled(true);
    }
  };

  return (
    <section className="relative flex w-full flex-col items-center gap-[30px] py-[80px]">
      <section>
        <div className="flex items-center gap-[4px]">
          <Logo.BilleasyTextLogo
            width={88}
            height={29}
          />
          <span className="text-[24px]">이용을 위해</span>
        </div>
        <span className="text-[24px]">회원 가입을 해주세요.</span>
      </section>
      {/* 바뀌는 섹션 */}
      <section className="flex h-[300px] w-full items-center justify-center">
        <SectionRenderer
          currentStep={currentStep}
          watch={watch}
          setValue={setValue}
          register={register}
          errors={errors}
          setIsButtonDisabled={setIsButtonDisabled}
        />
      </section>

      <Button
        label={currentStep === maxStep ? '완료' : '다음'}
        disabled={currentStep > maxStep ? true : isButtonDisabled}
        onClick={handleNext}
      />
      <Text
        text="이미 회원이신가요?"
        line={true}
        position="center"
        size="xl"
        onClick={() => router.push('/auth/login')}
      />
    </section>
  );
};

export default Register;
