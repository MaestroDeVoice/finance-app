import React from 'react';
import { Container } from '@/components/shared';
import {
  TableHead,
  TableBody,
} from '@/components/shared/payment-calendar-table';

interface Props {
  className?: string;
}

export const PaymentCalendarTable: React.FC<Props> = ({ className }) => {
  return (
    <Container
      className={`${className} py-0 px-0 w-full h-full overflow-y-auto`}
    >
      <table className="relative table-fixed w-full h-fit items-start">
        <TableHead />
        <TableBody />
      </table>
    </Container>
  );
};
