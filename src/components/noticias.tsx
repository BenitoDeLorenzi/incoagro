"use client";

import useEmblaCarousel from "embla-carousel-react";

import { WhatsappLogo } from "@phosphor-icons/react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";

const noticias = [
  {
    title:
      "Festival de Música de Verão: Tudo Pronto para os Dias 23 a 25 de Maio!",
    description:
      "O aguardado Festival de Música de Verão acontecerá nos dias 23, 24 e 25 de maio, reunindo grandes nomes da música nacional e internacional em três dias de muita festa e diversão.",
    image: "https://example.com/festival-musica.jpg",
    createdAt: "2025-02-17",
  },
  {
    title: "Line-up Completo do Festival de Maio é Divulgado!",
    description:
      "A organização do Festival de Música de Verão divulgou o line-up completo. Estão confirmados artistas como Benito De Lorenzi, Anitta, Alok e a banda Jota Quest para animar os três dias de evento.",
    image: "https://example.com/lineup.jpg",
    createdAt: "2025-02-17",
  },
  {
    title: "Ingressos para o Festival de Maio Já Estão à Venda!",
    description:
      "Os ingressos para o Festival de Música de Verão, que ocorrerá de 23 a 25 de maio, já estão disponíveis. Garanta o seu antes que esgotem!",
    image: "https://example.com/ingressos.jpg",
    createdAt: "2025-02-17",
  },
  {
    title: "Infraestrutura do Festival de Maio Promete Conforto e Segurança",
    description:
      "Com uma estrutura moderna, o Festival de Música de Verão contará com áreas de alimentação, banheiros, estacionamento e seguranças para garantir o bem-estar de todos os participantes.",
    image: "https://example.com/infraestrutura.jpg",
    createdAt: "2025-02-17",
  },
  {
    title: "Contagem Regressiva para o Festival de Música de Verão!",
    description:
      "Faltam poucos meses para o Festival de Música de Verão, que acontece de 23 a 25 de maio. Prepare-se para viver uma experiência inesquecível com muita música e diversão.",
    image: "https://example.com/contagem-regressiva.jpg",
    createdAt: "2025-02-17",
  },
];

export const Noticias = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width-768px)": { slidesToScroll: 3 },
    },
  });

  const scrollPrev = () => {
    emblaApi?.scrollPrev();
  };

  const scrollNext = () => {
    emblaApi?.scrollNext();
  };

  return (
    <section className="bg-white py-10 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center mb-10">
          <h1 className="font-bold text-4xl text-[#02452a] mb-4">
            Últimas Notícias
          </h1>
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {noticias.map((noticia, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3"
                  >
                    <article className="bg-[#02452a] text-white rounded-2xl p-6 space-y-6 h-full flex flex-col">
                      <div className="flex flex-col gap-4 flex-1">
                        <h3 className="font-bold text-xl my-2 select-none">
                          {noticia.title}
                        </h3>
                        <p className="text-gray-400 text-sm select-none">
                          {noticia.description}
                        </p>
                      </div>

                      <div className="border-t border-gray-white pt-4 flex justify-between items-center">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="w-4 h-4" />
                          <span>{noticia.createdAt}</span>
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            <button
              className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
              onClick={scrollPrev}
            >
              <ChevronLeft className="w-6 h-6 text-gray-600  " />
            </button>

            <button
              className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
              onClick={scrollNext}
            >
              <ChevronRight className="w-6 h-6 text-gray-600  " />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
