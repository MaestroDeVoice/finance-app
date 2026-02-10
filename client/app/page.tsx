import { Container, Header } from '@/components/shared';
import {
  ChartLine,
  X,
  Banknote,
  BanknoteArrowDown,
  BanknoteArrowUp,
  ChevronLeft,
  ChevronRight,
  CircleCheckBig,
  LockKeyhole,
  Pencil,
  Plus,
  Trash2,
  ChevronDown,
  CalendarDays,
  Check,
  Clock3,
} from 'lucide-react';

export default function Home() {
  return (
    // bg-linear-45 from-purple-500 via-green-500 to-pink-500
    // bg-[url('https://static.vecteezy.com/system/resources/previews/059/588/474/large_2x/wide-squared-grid-paper-pattern-notebook-sheet-blank-printable-mockup-mathematics-simple-pattern-black-grid-texture-typography-layout-for-making-production-for-school-education-minimal-backdrop-vector.jpg')]
    <div className="flex flex-col w-full h-screen gap-8 p-10 justify-center items-center bg-[url('https://static.vecteezy.com/system/resources/previews/059/588/474/large_2x/wide-squared-grid-paper-pattern-notebook-sheet-blank-printable-mockup-mathematics-simple-pattern-black-grid-texture-typography-layout-for-making-production-for-school-education-minimal-backdrop-vector.jpg')] bg-contain">
      <Container className="relative flex flex-col gap-4 max-w-[700px] h-full backdrop-blur-lg">
        <Header className="w-full" />
        
        <div className="w-full flex justify-between">
          <Container className="py-2 items-center h-fit bg-black/15!">
            <Plus className="mr-3" strokeWidth={3} color="black" />
            Добавить расход / доход
          </Container>
          <Container className="py-2 h-fit bg-black/15!">
            <CalendarDays className="mr-3" />
            Февраль
          </Container>
          <Container className="py-2 h-fit bg-black/15!">
            Фильтр
            <ChevronDown className="ml-3" />
          </Container>
        </div>

        {/* Table */}
        <div className="py-0 px-0 w-full h-full overflow-y-auto rounded-2xl bg-white/10 shadow-md/70 inset-shadow-sm inset-shadow-black/35 ">
          <table className="relative table-fixed w-full h-fit items-start">
            <thead className="bg-black/15 backdrop-blur-lg shadow-md/90 inset-shadow-sm inset-shadow-black/35 sticky top-0 left-0 h-12 border-b border-black/30">
              <tr>
                <th className="w-20">Статус</th>
                <th className="w-fit">Дата</th>
                <th>Категория</th>
                <th>Сумма</th>
                <th className="w-50">Действия</th>
              </tr>
            </thead>
            <tbody className="h-4">
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" /> */}
                  <Check className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">+145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" color="green" /> */}
                  <Clock3 className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" /> */}
                  <Check className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">+145000</td>
                <td className="flex justify-center gap-2">
                  <Container className=" bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className=" bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className=" bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" color="green" /> */}
                  <Clock3 className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" /> */}
                  <Check className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">+145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" color="green" /> */}
                  <Clock3 className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" /> */}
                  <Check className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">+145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" color="green" /> */}
                  <Clock3 className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" /> */}
                  <Check className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">+145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" color="green" /> */}
                  <Clock3 className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" /> */}
                  <Check className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">+145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" color="green" /> */}
                  <Clock3 className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" /> */}
                  <Check className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">+145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" color="green" /> */}
                  <Clock3 className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" /> */}
                  <Check className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">+145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" color="green" /> */}
                  <Clock3 className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" /> */}
                  <Check className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">+145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" color="green" /> */}
                  <Clock3 className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" /> */}
                  <Check className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">+145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" color="green" /> */}
                  <Clock3 className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" /> */}
                  <Check className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">+145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" color="green" /> */}
                  <Clock3 className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" /> */}
                  <Check className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">+145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" color="green" /> */}
                  <Clock3 className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" /> */}
                  <Check className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">+145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" color="green" /> */}
                  <Clock3 className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" /> */}
                  <Check className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">+145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" color="green" /> */}
                  <Clock3 className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" /> */}
                  <Check className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">+145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" color="green" /> */}
                  <Clock3 className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" /> */}
                  <Check className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">+145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" color="green" /> */}
                  <Clock3 className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" /> */}
                  <Check className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">+145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" color="green" /> */}
                  <Clock3 className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" /> */}
                  <Check className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">+145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" color="green" /> */}
                  <Clock3 className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" /> */}
                  <Check className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">+145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" color="green" /> */}
                  <Clock3 className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" /> */}
                  <Check className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">+145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" color="green" /> */}
                  <Clock3 className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" /> */}
                  <Check className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">+145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" color="green" /> */}
                  <Clock3 className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" /> */}
                  <Check className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">+145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" color="green" /> */}
                  <Clock3 className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" /> */}
                  <Check className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">+145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" color="green" /> */}
                  <Clock3 className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" /> */}
                  <Check className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">+145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" color="green" /> */}
                  <Clock3 className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" /> */}
                  <Check className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">+145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" color="green" /> */}
                  <Clock3 className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" /> */}
                  <Check className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">+145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" color="green" /> */}
                  <Clock3 className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" /> */}
                  <Check className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">+145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" color="green" /> */}
                  <Clock3 className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" /> */}
                  <Check className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">+145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" color="green" /> */}
                  <Clock3 className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" /> */}
                  <Check className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">+145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" color="green" /> */}
                  <Clock3 className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" /> */}
                  <Check className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">+145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" color="green" /> */}
                  <Clock3 className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" /> */}
                  <Check className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">+145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" color="green" /> */}
                  <Clock3 className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" /> */}
                  <Check className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">+145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" color="green" /> */}
                  <Clock3 className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" /> */}
                  <Check className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">+145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" color="green" /> */}
                  <Clock3 className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" /> */}
                  <Check className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">+145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" color="green" /> */}
                  <Clock3 className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" /> */}
                  <Check className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">+145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" color="green" /> */}
                  <Clock3 className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" /> */}
                  <Check className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">+145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" color="green" /> */}
                  <Clock3 className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" /> */}
                  <Check className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">+145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" color="green" /> */}
                  <Clock3 className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" /> */}
                  <Check className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">+145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" color="green" /> */}
                  <Clock3 className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" /> */}
                  <Check className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">+145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" color="green" /> */}
                  <Clock3 className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" /> */}
                  <Check className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">+145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" color="green" /> */}
                  <Clock3 className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" /> */}
                  <Check className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">+145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" color="green" /> */}
                  <Clock3 className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" /> */}
                  <Check className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">+145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" color="green" /> */}
                  <Clock3 className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" /> */}
                  <Check className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">+145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" color="green" /> */}
                  <Clock3 className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" /> */}
                  <Check className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">+145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" color="green" /> */}
                  <Clock3 className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" /> */}
                  <Check className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">+145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
              <tr className="border-b border-black/30">
                <td className="text-center">
                  {/* <CircleCheckBig className="mx-auto" color="green" /> */}
                  <Clock3 className="mx-auto" />
                </td>
                <td className="text-center">9 февраля 2026</td>
                <td className="text-center">Доход</td>
                <td className="text-center">145000</td>
                <td className="flex justify-center gap-2">
                  <Container className="border border-black bg-blue-100/45! hover:bg-blue-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Pencil />
                    </button>
                  </Container>
                  <Container className="border border-black bg-yellow-100/45! hover:bg-yellow-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <LockKeyhole />
                    </button>
                  </Container>
                  <Container className="border border-black bg-red-100/45! hover:bg-red-200! rounded-sm px-1 py-1 my-2">
                    <button>
                      <Trash2 />
                    </button>
                  </Container>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex gap-4 justify-beetwen items-center">
          <Container className="min-w-14 w-fit h-14 px-3 bottom-6 left-6 bg-orange-400! items-center justify-center brightness-[1.4]!">
            {false ? (
              <div className="flex items-center mx-2">
                <span className="font-bold mr-3">Баланс:</span>
                <span>45000р</span>
              </div>
            ) : (
              <>
                {/* <BanknoteArrowUp size={28} className="" /> */}
                {/* <BanknoteArrowDown size={28} className="ml-3" />
              <Banknote size={28} className="ml-3" /> */}
              </>
            )}
          </Container>

          <Container className="flex-1 justify-center font-bold bg-black/15!">
          <ChartLine className="mr-3" />Аналитика
          </Container>
        </div>
      </Container>
    </div>
  );
}
