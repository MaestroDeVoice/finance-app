import React from 'react';
import { Button } from '@/components/ui';
import { CalendarDays, Funnel, Plus } from 'lucide-react';

interface Props {
  className?: string;
}

export const ActionsBar: React.FC<Props> = ({ className }) => {
  return (
    <div className={`${className} w-full flex justify-between items-center`}>
      <Button className="w-fit p-3!">
        <Plus />
      </Button>

      {/* Filters */}
      <div className="flex gap-4">
        <Button text="Февраль">
          <CalendarDays />
        </Button>
        <Button text="Фильтр">
          <Funnel />
        </Button>
      </div>
    </div>
  );
};
