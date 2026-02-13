import {
  Container,
  Header,
  PaymentCalendarTable,
  ActionsBar,
  FooterNavBar,
} from '@/components/shared';

export default function Home() {
  return (
    <Container className="relative flex flex-col gap-4 max-w-[700px] h-full backdrop-blur-xs">
      <Header />
      <ActionsBar />
      <PaymentCalendarTable />
      <FooterNavBar />
    </Container>
  );
}
