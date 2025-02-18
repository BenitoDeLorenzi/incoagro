import Link from "next/link";

interface CardInscricaoProps {
  children: React.ReactNode;
  href: string;
}

export const CardInscricao = ({ children, href }: CardInscricaoProps) => {
  return <Link href={href}>{children}</Link>;
};
