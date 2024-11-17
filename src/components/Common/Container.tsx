import { pretendard } from '@/styles/font';
import React from 'react';

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      className={`${pretendard.className} bg bg-background-main mx-auto h-screen max-w-[430px]`}>
      {children}
    </main>
  );
};

export default Container;
