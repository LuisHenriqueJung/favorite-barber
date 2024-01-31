import Header from "@/components/header";
import Search from "@/components/search";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="sm:w-full md:w-6/12 p-5">
        <h2>Olá, Miguel!</h2>
        <p className="capitalize mt-5">
          {format(new Date(), "EEEE',' dd ' de ' MMMM", {
            locale: ptBR,
          })}
        </p>
        <div>
          <Search />
        </div>
      </div>
    </div>
  );
}
