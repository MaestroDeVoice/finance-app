import React from 'react';
import { Container } from '@/components/shared';
import { BanknoteArrowUp, DoorOpen, LayoutDashboard, LogIn, NotebookPen, UserRound, Wallet } from 'lucide-react';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <div className={`${className} flex justify-between`}>
      <div className="flex mr-4 items-center">
      <NotebookPen className="mr-4" size={52} />
        {/* <BanknoteArrowUp className="mr-4" size={52} color="green" /> */}
        <div>
          <h1 className="text-2xl">Амбарная книга</h1>
          <span>Краткая сводка по приложению</span>
        </div>
      </div>
      <Container className="items-center h-fit bg-black/10!">
        {/* <DoorOpen className="mr-3" /> */}
        <LogIn className="mr-3" />
        {/* <UserRound className="mr-3" /> */}
        <button>Войти</button>
      </Container>
    </div>
  );
};
