import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const Header = () => {
  return (
    <Card>
      <CardContent className="p-5 justify-between flex flex-row items-center">
        <Image src="/logo.png" alt="logo" height={22} width={120} />
        <Button variant="outline" size="icon">
          <HamburgerMenuIcon className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default Header;
