import { Button } from '@/components/ui';
import { Check, Clock, LockKeyhole, Pencil, Trash2 } from 'lucide-react';
import React from 'react';

interface Props {
  className?: string;
}

export const TableListItems: React.FC<Props> = ({ className }) => {
  const items = [
    {
      id: 1,
      status: 'success',
      date: '13 февраля 2026',
      category: 'Расход',
      subCategory: 'Жильё',
      sum: -18000,
    },
    {
      id: 2,
      status: 'expection',
      date: '3 января 2026',
      category: 'Расход',
      subCategory: 'Продукты',
      sum: -35000,
    },
    {
      id: 3,
      status: 'expection',
      date: '27 января 2026',
      category: 'Доход',
      subCategory: 'Зарплата',
      sum: 150000,
    },
    {
      id: 4,
      status: 'success',
      date: '4 февраля 2026',
      category: 'Расход',
      subCategory: 'Топливо',
      sum: -24000,
    },
  ];

  return (
    <>
      {items.map((item) => (
        <tr key={item.id} className="border-b border-black/30">
          <td className="text-center flex">
            {item.status === 'success' ? (
              <Check className="mx-auto" />
            ) : (
              item.status === 'expection' && <Clock className="mx-auto" />
            )}
          </td>
          <td className="text-center">{item.date}</td>
          <td className="text-center">{item.subCategory}
          </td>
          <td className={`${item.sum > 0 ? 'text-green-700' : 'text-red-700'} text-center`}>{item.sum}</td>
          <td className="flex justify-center gap-2">
            <Button className=" bg-blue-100/45! hover:bg-blue-200! rounded-sm! my-2 p-1!">
              <Pencil />
            </Button>
            <Button className=" bg-yellow-100/45! hover:bg-yellow-200! rounded-sm! px-1 py-1 my-2 p-1!">
              <LockKeyhole />
            </Button>
            <Button className=" bg-red-100/45! hover:bg-red-200! rounded-sm! px-1 py-1 my-2 p-1!">
              <Trash2 />
            </Button>
          </td>
        </tr>
      ))}
    </>
  );
};
