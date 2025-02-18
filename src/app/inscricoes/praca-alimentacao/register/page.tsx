import { PracaAlimentacaoForm } from "@/features/praca-alimentacao/components/praca-alimentacao-form";
import Image from "next/image";
import Link from "next/link";

const InscricaoPracaAlimentacaoRegisterPage = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center bg-no-repeat overflow-auto"
      style={{ backgroundImage: 'url("/fundo-praca-alimentacao.png")' }}
    >
      <div className="flex flex-col items-center gap-8">
        {/* Div da logo com opacidade */}
        <div className="flex flex-col bg-green-950 bg-opacity-70 w-full items-center justify-center py-3 gap-2">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={250}
              height={250}
              priority
              quality={100}
              className="z-10"
            />
          </Link>
          <h3 className="text-[#b0e849] text-2xl font-bold">
            23 A 25 MAIO DE 2025
          </h3>
        </div>
        <div className="flex w-full justify-center px-4 mb-4">
          <PracaAlimentacaoForm />
        </div>
      </div>
    </div>
  );
};

export default InscricaoPracaAlimentacaoRegisterPage;
