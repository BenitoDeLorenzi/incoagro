import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

const InscricaoPracaAlimentacaoPage = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center bg-no-repeat overflow-auto"
      style={{ backgroundImage: 'url("/fundo-praca-alimentacao.png")' }}
    >
      <div className="flex flex-col items-center gap-8">
        {/* Div da logo com opacidade */}
        <div className="flex flex-col bg-green-950 bg-opacity-70 w-full items-center justify-center py-2 gap-2">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={350}
              height={350}
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
          <Card className="border-none shadow-none max-w-[600px]">
            <CardHeader>
              <CardTitle className="text-lg">
                Bem-vindo ao cadastro para vagas nos stands da PRAÇA DE
                ALIMENTAÇÃO da 1ª Feira e Festival Incoagro de Içara - SC.
              </CardTitle>
              <CardDescription>
                Para garantir a sua participação, solicitaremos algumas
                informações essenciais durante o processo de inscrição:
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <p>
                <b>Dados pessoais:</b> Coletaremos seus dados básicos.
              </p>
              <Separator />
              <p>
                <b>Fotografia: </b>
                Será necessário o envio de uma fotografia do responsável pelo
                stand para validar sua identidade
              </p>
              <Separator />
              <p>
                <b>Documento</b> Solicitaremos uma foto legível de um de seus
                documentos devidamente válidos (Carteira de Identidade, CNH ou
                Passaporte).
              </p>
              <Separator />
              <p>
                O Cliente poderá efetuar o cancelamento em até 07 dias corridos
                a partir da data da compra, conforme previsto no artigo 49 do
                Código de Defesa do Consumidor (CDC). Após este período, o
                ingresso não poderá ser cancelado, e em caso de não utilização,
                será invalidado.
              </p>
              <p>
                Ressaltamos que a realização do pré cadastro não garante a
                compra, nem o lote apenas facilitará o processo.
              </p>
              <Separator />
              <Button asChild size="lg">
                <Link href="/inscricoes/praca-alimentacao/register">
                  Vamos começar
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InscricaoPracaAlimentacaoPage;
