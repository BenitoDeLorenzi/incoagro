import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="flex flex-col">
      <div className="grid grid-cols-3 items-center gap-2 overflow-hidden h-[150px] md:h-[250px] lg:h-[550px] bg-[#02452a]">
        <div className="relative w-full h-full">
          <Image
            src="/logo-left.png"
            alt="logoLeft"
            fill
            priority
            quality={100}
            className="object-contain"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 300px"
          />
        </div>
        <div className="relative w-full h-full">
          <Image
            src="/logo-center.png"
            alt="logoCenter"
            fill
            priority
            quality={100}
            className="object-contain"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 300px"
          />
        </div>
        <div className="relative w-full h-full">
          <Image
            src="/logo-right.png"
            alt="logoRight"
            fill
            priority
            quality={100}
            className="object-contain"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 300px"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full p-4 justify-evenly items-center bg-[#b0e849] text-[#02452a] gap-4 border-t-[#f7e9d1] border-t-4">
        <Link
          className="flex items-center justify-center font-bold text-xl"
          href="/sobre"
        >
          SOBRE A INCOAGRO
        </Link>
        <Link
          className="flex items-center justify-center font-bold text-xl"
          href="/mapa"
        >
          MAPA
        </Link>
        <Link
          className="flex items-center justify-center font-bold text-xl"
          href="/inscricoes"
        >
          INSCRIÇÕES
        </Link>
      </div>
    </section>
  );
};
