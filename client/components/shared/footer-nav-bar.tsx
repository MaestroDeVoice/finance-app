import React from 'react';
import { CalendarCheck2, ChartLine } from 'lucide-react';
import { Button } from '@/components//ui';

interface Props {
  className?: string;
}

export const FooterNavBar: React.FC<Props> = ({ className }) => {
  return (
    <div className={`${className} flex w-full items-center`}>
      <Button text="Платёжный календарь" className="w-full rounded-r-none">
        <CalendarCheck2 />
      </Button>
      <Button text="Аналитика" className="w-full rounded-l-none">
        <ChartLine />
      </Button>
    </div>
  );
};
