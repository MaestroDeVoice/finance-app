import React from 'react';
import { Container } from '@/components/shared';
import { LayoutDashboard, UserRound } from 'lucide-react';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <div className={`${className} flex justify-between`}>
      <Container className="mr-4 items-center">
        <LayoutDashboard className="mr-4" size={52} color="grey" />
        <div>
          <h1 className="text-2xl uppercase">Finance dashboard</h1>
          <span>Краткая сводка по приложению</span>
        </div>
      </Container>
      <Container className="items-center h-fit bg-black/10">
        <UserRound size={16} strokeWidth={1.5} className="mr-1" />
        <button>Войти</button>
      </Container>
    </div>
  );
};
