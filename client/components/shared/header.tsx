import React from 'react';
import { Container } from '@/components/shared';
import { LayoutDashboard, UserRound } from 'lucide-react';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <Container className={`${className} flex justify-between items-center`}>
      <div className="flex items-center">
        <Container className="mr-4">
          <LayoutDashboard size={52} color="grey" />
        </Container>
        <div>
          <h1 className="text-2xl uppercase">Finance dashboard</h1>
          <span>Краткая сводка по приложению</span>
        </div>
      </div>
      <Container className="bg-black/10">
        <UserRound size={16} strokeWidth={1.5} className="mr-1" />
        <button>Войти</button>
      </Container>
    </Container>
  );
};
