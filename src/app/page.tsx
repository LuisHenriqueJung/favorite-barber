import Header from "@/components/header";
import Search from "@/components/search";
import BookingItem from "@/components/booking-item";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import BarberItem from "@/components/barber-item";
import { db } from "./_lib/prisma";

export default async function Home() {
  const barbershops = await db.barbershop.findMany();
  return (
    <div>
      <Header />
      <div className="sm:w-full md:w-6/12 ">
        <div className="p-5">
          <h2>Olá, Miguel!</h2>
          <p className="capitalize mt-5">
            {format(new Date(), "EEEE',' dd ' de ' MMMM", {
              locale: ptBR,
            })}
          </p>
          <div className="pt-5">
            <Search />
          </div>
        </div>
        <div className="p-5">
          <h3 className="uppercase py-3 text-gray-400">Agendamentos</h3>
          <BookingItem />
        </div>

        <div className="py-5 ">
          <h3 className="uppercase py-3 px-5 text-gray-400">Recomendados</h3>
          <div className="flex px-5 gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
            {barbershops.map((barbershop: any) => (
              <BarberItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </div>
        </div>
        <div className="py-5 ">
          <h3 className="uppercase py-3 px-5 text-gray-400">Populares</h3>
          <div className="flex px-5 gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
            {barbershops.map((barbershop: any) => (
              <BarberItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
