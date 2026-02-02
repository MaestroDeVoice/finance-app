import React from 'react';

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const Container: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={`${className} p-4 rounded-2xl bg-black/40 backdrop-blur-lg shadow-xl/70 inset-shadow-sm inset-shadow-white/65 text-white flex items-center`}
    >
      {children}
    </div>
  );
};
