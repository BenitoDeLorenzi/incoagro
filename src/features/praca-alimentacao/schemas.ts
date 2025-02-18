import { unmask } from "remask";
import { z } from "zod";

export const pracaDeAlimentacaoSchema = z.object({
  nome: z.string().nonempty("O nome é obrigatório."),
  cpf: z
    .string()
    .nonempty("O CPF é obrigatório.")
    .min(14, "CPF inválido.")
    .transform((value) => unmask(value)),
  email: z.string().nonempty("O email é obrigatório.").email("Email inválido."),
  celular: z
    .string()
    .nonempty("O celular é obrigatório.")
    .min(14, "Celular inválido.")
    .transform((value) => unmask(value)),
  razao_social: z.string().nonempty("A razão social é obrigatória."),
  cnpj: z
    .string()
    .nonempty("O CNPJ é obrigatório.")
    .min(18, "CNPJ inválido.")
    .transform((value) => unmask(value)),
  termos: z.boolean().refine((value) => value === true, {
    message: "Você deve aceitar os termos de uso e política de privacidade.",
  }),
});
