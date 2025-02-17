import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { Info, Map, PencilLine } from "lucide-react";

export const Hero = () => {
  return (
    <section className="flex flex-col">
      <div className="relative overflow-hidden h-[180px] md:h-[350px] lg:h-[450px] ">
        <Image
          src="/header.png"
          alt="header"
          className="object-cover"
          fill
          priority
          quality={100}
        />
      </div>
      <div className="flex flex-col lg:flex-row w-full  p-4 justify-center items-center bg-[#b0e849] text-[#02452a] text-lg">
        <Button variant="ghost" className="font-bold" size="lg" asChild>
          <Link href="/sobre">
            <Info />
            Sobre a Incoagro
          </Link>
        </Button>
        <Button variant="ghost" className="font-bold" size="lg" asChild>
          <Link href="/mapa">
            <Map />
            Mapa do evento
          </Link>
        </Button>
        <Button variant="ghost" className="font-bold" size="lg" asChild>
          <Link href="/inscricoes">
            <PencilLine />
            Inscrições
          </Link>
        </Button>
      </div>
    </section>
  );
};
