import React from 'react';

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const Container: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={`${className} p-4 rounded-2xl bg-white/15 backdrop-blur-lg shadow-md/70 inset-shadow-sm inset-shadow-black/55 text-black flex`}
    >
      {children}
    </div>
  );
};
