import { Guitar } from "lucide-react";
import { Card, CardContent, CardTitle } from "./ui/card";
import Image from "next/image";
import { CardInscricao } from "./card-inscricao";

export const Main = () => {
  return (
    <section className="bg-[#f7e9d1] py-10">
      <div className="container px-4 lg:px-16 mx-auto text-white">
        <div className="grid grid-cols-3 gap-8">
          {/* LEFT */}
          <div className="col-span-3 lg:col-span-2">
            <div className="flex flex-col gap-4">
              <CardInscricao href="/inscricoes/praca-alimentacao">
                <div className="relative w-100 h-[160px] lg:h-[450px] ">
                  <Image
                    src="/inscricao-praca-alimentacao.png"
                    alt="inscricaoPracaAlimentacao"
                    fill
                    priority
                    quality={100}
                    className="object-cover hover:scale-105 duration-300 rounded-lg"
                  />
                </div>
              </CardInscricao>
              <CardInscricao href="/inscricoes/praca-alimentacao">
                <div className="relative w-100 h-[160px] lg:h-[450px]">
                  <Image
                    src="/inscricao-feira.png"
                    alt="inscricaoFeira"
                    fill
                    priority
                    quality={100}
                    className="object-cover hover:scale-105 duration-300 rounded-lg"
                  />
                </div>
              </CardInscricao>
            </div>
          </div>
          {/* RIGHT */}
          <div className="col-span-3 lg:col-span-1">
            <div className="flex flex-col gap-6">
              <Card className="border-none shadow-none p-7 bg-[#02452a] text-[#f7e9d1]">
                <CardTitle>DUVIDAS ?</CardTitle>
                <CardContent className="p-0 flex flex-col mt-4">
                  <p className="my-4">
                    Dúvidas, dificuldades na compra ou demais informações, entre
                    em contato com a gente!
                  </p>
                  <p>atendimento@incoagro.com.br</p>
                  <p>contato@incoagro.com.br</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-none p-7">
                <CardContent className="p-0 text-[#02452a]">
                  <div className="flex w-full gap-4">
                    <div className="flex">
                      <Guitar className="w-16 h-16" />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm">PROGRAMAÇÃO</p>
                      <div className="flex items-center gap-4">
                        <p className="text-3xl font-bold">SHOWS</p>
                        <p className="text-sm">{`(EM BREVE)`}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-none p-7">
                <CardContent className="p-0 ">
                  <div className="flex flex-col space-y-4">
                    <div className="bg-[#02452a]">
                      <Image
                        src="/logo-left.png"
                        alt="LogoLeft"
                        width={600}
                        height={600}
                        priority
                        quality={100}
                        className="object-contain"
                      />
                    </div>
                    <div className="bg-[#02452a]">
                      <Image
                        src="/logo-right.png"
                        alt="LogoRight"
                        width={600}
                        height={600}
                        priority
                        quality={100}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
