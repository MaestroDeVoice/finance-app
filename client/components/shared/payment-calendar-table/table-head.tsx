import React from 'react';

interface Props {
  className?: string;
}

export const TableHead: React.FC<Props> = ({ className }) => {
  return (
    <thead
      className={`${className} bg-black/15 backdrop-blur-lg shadow-md/90 inset-shadow-sm inset-shadow-black/35 sticky top-0 left-0 h-12 border-b border-black/30`}
    >
      <tr>
        <th className="w-20">Статус</th>
        <th className="w-40">Дата</th>
        <th className="w-40">Категория</th>
        <th>Сумма</th>
        <th className="w-40">Действия</th>
      </tr>
    </thead>
  );
};
