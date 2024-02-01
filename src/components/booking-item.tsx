import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const BookingItem = () => {
  return (
    <Card>
      <CardContent className=" flex justify-between p-0">
        <div className="p-3">
          <Badge className="bg-[#221C3D] text-primary hover:bg-[#221C3D] w-fit mb-3">
            Confirmado
          </Badge>
          <h1>Corte de cabelo</h1>

          <div className="flex items-center gap-3 mt-3">
            <Avatar>
              <AvatarImage
                src="https://utfs.io/f/0ddfbd26-a424-43a0-aaf3-c3f1dc6be6d1-1kgxo7.png"
                alt="@shadcn"
              ></AvatarImage>
              <AvatarFallback>C</AvatarFallback>
            </Avatar>
            <span>Vintage Barber</span>
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center border-l border-solid border-secondary px-3">
          <p className="text-sm">Fevereiro</p>
          <p className="text-2xl">06</p>
          <p className="text-sm">09:45</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingItem;
