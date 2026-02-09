import { Container, Header } from '@/components/shared';
import { Plus } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen gap-8 p-10 justify-center items-center bg-linear-45 from-purple-500 via-green-500 to-pink-500">
      {/* <img
        className="absolute w-full h-screen"
        src="https://images.hdqwalls.com/wallpapers/triumph-volumetric-nebula-4k-m6.jpg"
        alt=""
      /> */}
      <Container className="flex flex-col gap-4 w-full h-full">
        <Header className="w-full" />
        <Container className="items-center w-fit"><Plus className="mr-2" strokeWidth={3} color="black" />Добавить расход / доход</Container>

        {/* Table */}
        <Container className="w-full h-full overflow-y-auto">
          
          <table className="table-auto w-full items-start">
            <thead className="border-b border-black/30">
              <tr>
                <th className="text-start w-10">
                  Статус
                </th>
                <th className="w-fit">Дата</th>
                <th>Категория</th>
                <th>Сумма</th>
                <th className="w-40">Действия</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>{' '}
              <tr className="border-b border-black/30">
                <td className="text-start">+</td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <button className="border border-black rounded-sm p-1">
                    ред.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    забл.
                  </button>

                  <button className="border border-black rounded-sm p-1">
                    удал.
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </Container>
      </Container>
    </div>
  );
}
