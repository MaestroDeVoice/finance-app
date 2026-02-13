import React from 'react';
import { TableListItems } from '@/components/shared/payment-calendar-table';

interface Props {
  className?: string;
}

export const TableBody: React.FC<Props> = ({ className }) => {
  return (
    <tbody className={`${className} h-4`}>
      <TableListItems />
    </tbody>
  );
};
