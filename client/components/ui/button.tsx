import React from 'react';
import { Container } from '@/components/shared';

interface Props {
  text?: string;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<Props> = ({ text, children, className }) => {
  return (
    <Container
      className={`${className} h-fit p-0! justify-center bg-black/15! hover:bg-black/10! cursor-pointer`}
    >
      <button
        className={
          text
            ? `flex justify-center p-3 cursor-pointer w-full`
            : 'cursor-pointer'
        }
      >
        {children}
        <span className={text && 'ml-3'}>{text}</span>
      </button>
    </Container>
  );
};
