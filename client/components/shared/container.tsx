import React from 'react';

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export const Container: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={`${className} p-4 rounded-xl bg-white/10 shadow-md/70 inset-shadow-sm inset-shadow-black/35 text-black flex`}
    >
      {children}
    </div>
  );
};
