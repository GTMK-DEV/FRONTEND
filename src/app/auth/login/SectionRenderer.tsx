import RegisterSelectButton from '@/components/atoms/Button/RegisterSelectButton';
import Input from '@/components/atoms/Input/Input';
import { useEffect, useState } from 'react';

export const SectionRenderer = ({
  currentStep,
  watch,
  setValue,
  register,
  errors,
  setIsButtonDisabled
}: {
  currentStep: number;
  watch: (field: string) => any;
  setValue: (field: string, value: any) => void;
  register: any;
  errors: any;
  setIsButtonDisabled: (value: boolean) => void;
}) => {
  const [isDuplicated, setIsDuplicated] = useState(''); // 중복 상태 관리
  const [passwordMatch, setPasswordMatch] = useState(false); // 비밀번호 일치 여부 상태 관리
  console.log(currentStep);
  switch (currentStep) {
    case 0: // 유저 타입 선택
      return (
        <div className="flex h-[170px] w-full gap-[12px]">
          <RegisterSelectButton
            label="개인"
            color="main"
            isSelected={watch('userType') === '개인'}
            onClick={() => {
              setValue('userType', '개인');
              setIsButtonDisabled(false);
            }}
          />
          <RegisterSelectButton
            label="가게"
            color="sub"
            isSelected={watch('userType') === '가게'}
            onClick={() => {
              setValue('userType', '가게');
              setIsButtonDisabled(false);
            }}
          />
        </div>
      );
    case 1: // 아이디 입력 및 중복 확인
      return (
        <div className="flex w-full flex-col gap-[20px]">
          <div className="relative flex w-full gap-4">
            <Input
              id="id"
              placeholder="아이디"
              register={register}
              errors={errors}
              required={true}
            />
            <button
              type="button"
              className={`${
                isDuplicated === 'Duplicate'
                  ? 'text-red-500'
                  : isDuplicated === 'notDuplicate'
                    ? 'text-gray-500'
                    : 'text-primary-main'
              } absolute bottom-0 right-7 top-0 m-auto`}
              onClick={() => {
                const duplicateCheck = watch('id') === 'takenID'; // 'takenID'가 중복된 아이디
                setIsDuplicated(duplicateCheck ? 'Duplicate' : 'notDuplicate');
                if (duplicateCheck) {
                  setValue('errors', {
                    ...errors,
                    id: '아이디가 중복되었습니다.'
                  });
                  setIsButtonDisabled(true);
                } else {
                  setValue('errors', {});
                  setIsButtonDisabled(false);
                }
              }}>
              중복 확인
            </button>
          </div>
          {errors.id && <p className="text-red-500">{errors.id}</p>}
        </div>
      );
    case 2: // 비밀번호 및 비밀번호 확인
      return (
        <div className="flex w-full flex-col gap-[20px]">
          <Input
            id="password"
            placeholder="비밀번호"
            type="text"
            register={register}
            errors={errors}
            required={true}
          />
          <Input
            id="confirmPassword"
            placeholder="비밀번호 확인"
            type="text"
            register={register}
            errors={errors}
            required={true}
            onChange={e => {
              const password = watch('password');
              const confirmPassword = e.target.value;

              // 비밀번호가 일치하는지 확인
              if (password === confirmPassword) {
                setPasswordMatch(true); // 일치
                setIsButtonDisabled(false);
              } else {
                setPasswordMatch(false); // 불일치
              }
            }}
          />
          {/* 상태에 따라 메시지 표시 */}
          {passwordMatch ? (
            <p className="text-primary-main">비밀번호가 일치합니다.</p>
          ) : (
            <p className="text-red-500">비밀번호가 일치하지 않습니다.</p>
          )}
        </div>
      );
    case 3: // 전화번호 입력
      return (
        <Input
          id="phoneNumber"
          placeholder="전화번호"
          register={register}
          errors={errors}
          required={true}
          onChange={e => {
            let value = e.target.value;
            // 숫자만 허용
            value = value.replace(/[^0-9]/g, '');

            // 하이픈 자동 추가
            if (value.length > 3 && value.length < 8) {
              value = value.slice(0, 3) + '-' + value.slice(3);
            } else if (value.length > 7) {
              value =
                value.slice(0, 3) +
                '-' +
                value.slice(3, 7) +
                '-' +
                value.slice(7, 11);
            }
            setValue('phoneNumber', value);

            if (value.length === 13) setIsButtonDisabled(false);
          }}
        />
      );
    case 4: // 이름 입력
      return (
        <Input
          id="name"
          placeholder="닉네임"
          register={register}
          errors={errors}
          required={true}
          onChange={e => setIsButtonDisabled(e.target.value.length === 0)}
        />
      );
    case 5: // 가게 주소 입력 (가게일 경우만)
      if (watch('userType') === '가게') {
        return (
          <Input
            id="storeAddress"
            placeholder="가게 주소"
            register={register}
            errors={errors}
            required={true}
            onChange={e => setIsButtonDisabled(e.target.value.length === 0)}
          />
        );
      }
    default:
      return <div className="tx-white">회원가입 완료!</div>;
  }
};
