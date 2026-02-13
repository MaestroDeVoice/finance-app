import React from 'react';
import { NotebookPen, User } from 'lucide-react';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <div className={`${className} flex justify-between pb-4 border-b border-black/30 `}>
      <div className="flex mr-4 items-center">
        <NotebookPen className="mr-4" size={52} />
        <div>
          <h1 className="text-2xl">Амбарная книга</h1>
          <div className="flex justify-between items-center">
            <span>Баланс: 145000р</span>
            <div className="w-4 h-4 rounded-full bg-green-500 inset-shadow-sm inset-shadow-black/50 border border-black/20 shadow-green-700 shadow-md/70"></div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between gap-4">
          <span>Дмитрий</span>
          <div className="bg-black/10 w-fit p-2 rounded-full">
            <User />
          </div>
        </div>
      </div>

      {/* <Button text="Войти">
        <LogIn className="mr-3" />
      </Button> */}
    </div>
  );
};
