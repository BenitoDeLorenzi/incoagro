import { Check, MapPin } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export const About = () => {
  return (
    <section className="bg-[#f7e9d1] py-10">
      <div className="container px-4 mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full h-[350px] rounded-3xl overflow-hidden">
              <Image
                src="/logo-center.png"
                alt="logoCenter"
                fill
                quality={100}
                priority
                className="object-cover hover:scale-110 duration-300"
              />
            </div>
            <div className="absolute w-40 h-40 right-8 -bottom-8 rounded-lg border-4 border-white overflow-hidden">
              <Image
                src="/logo-right.png"
                alt="logoRight"
                fill
                quality={100}
                priority
              />
            </div>
          </div>

          <div className="space-y-6 mt-6">
            <h2 className="text-4xl font-bold text-[#02452a]">SOBRE</h2>

            <p>
              Em sua 70ª edição, a Festa do Peão de Boiadeiro de Barretos
              acontecerá de 21 a 31 de agosto de 2025, no Parque do Peão, em
              Barretos. O maior evento da América Latina é realizado em uma área
              de mais de 2 milhões de metros quadrados com infraestrutura
              completa para receber todos os atrativos que incluem o mais
              tradicional e melhor rodeio do país em diferentes modalidades,
              quatro palcos com shows musicais, apresentações culturais, feira
              comercial, área de camping e muito mais. Em 2025 é em Barretos que
              vamos nos encontrar. Te esperamos!
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="text-[#02452a]" />
                Aberto desde 2025
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-[#02452a]" />
                Equipe com mais de 100 profissionais
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-[#02452a]" />
                Qualidade é a nossa prioridade.
              </li>
            </ul>

            <div className="flex items-center gap-2">
              <Button asChild className="bg-[#25D366]">
                <Link href="/">
                  <WhatsappLogo className="w-5 h-5 text-white" /> Contato via
                  WhatsApp
                </Link>
              </Button>
              <Button asChild className="bg-[#02452a]">
                <Link href="/">
                  <MapPin className="w-5 h-5 text-white" /> Endereço do evento
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
