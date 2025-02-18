"use client";

import { z } from "zod";
import { useState } from "react";
import { mask, unmask } from "remask";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { pracaDeAlimentacaoSchema } from "../schemas";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CircleCheck } from "lucide-react";

const checkIfExists = async (field: string, value: string) => {
  const q = query(
    collection(db, "pracaAlimentacao"),
    where(field, "==", value)
  );
  const querySnapshot = await getDocs(q);
  return !querySnapshot.empty;
};

export const PracaAlimentacaoForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const form = useForm<z.infer<typeof pracaDeAlimentacaoSchema>>({
    resolver: zodResolver(pracaDeAlimentacaoSchema),
    defaultValues: {
      nome: "",
      cpf: "",
      email: "",
      celular: "",
      razao_social: "",
      cnpj: "",
      termos: false,
    },
  });

  const onSubmit = async (data: z.infer<typeof pracaDeAlimentacaoSchema>) => {
    setLoading(true);
    try {
      const cpfExists = await checkIfExists("cpf", data.cpf);
      if (cpfExists) {
        form.setError("cpf", {
          message: "O CPF informado já está cadastrado.",
        });
        setLoading(false);
        return;
      }

      const cnpjExists = await checkIfExists("cnpj", data.cnpj);
      if (cnpjExists) {
        form.setError("cnpj", {
          message: "O CNPJ informado já está cadastrado.",
        });
        setLoading(false);
        return;
      }

      const docRef = await addDoc(collection(db, "pracaAlimentacao"), data);
      console.log("Documento salvo com ID: ", docRef.id);
      setSuccess(true);
      return docRef.id;
    } catch (error) {
      console.error("Erro ao salvar o documento: ", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <Card className="border-none shadow-none max-w-[600px]">
        <CardContent className="p-7 flex flex-col items-center justify-center gap-7">
          <CircleCheck size={150} color="#2ecc71" />
          <h1 className="text-2xl font-bold text-center">
            Cadastro realizado com sucesso!
          </h1>
          <p className="text-sm text-muted-foreground text-center">
            Você receberá um email com todas as informações, e entraremos em
            contato com você o mais breve possível.
          </p>
          <Button asChild className="" size="lg">
            <Link href="/">Voltar para o site</Link>
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-none shadow-none max-w-[600px]">
      <CardHeader>
        <CardTitle className="text-lg">
          Precisamos coletar e validar alguns dados.
        </CardTitle>
        <CardDescription>
          Por favor, preencha o formulário abaixo com as informações
          solicitadas.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-1">
              <h1 className="font-bold">Dados pessoais</h1>
              <FormField
                control={form.control}
                name="nome"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input disabled={loading} {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cpf"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CPF</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        {...field}
                        value={field.value}
                        onChange={(e) => {
                          const patterns = ["999.999.999-99"];
                          field.onChange(
                            mask(unmask(e.target.value), patterns)
                          );
                        }}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input disabled={loading} {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="celular"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Celular</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        {...field}
                        value={field.value}
                        onChange={(e) => {
                          const patterns = [
                            "(99) 9999-9999",
                            "(99) 99999-9999",
                          ];
                          field.onChange(
                            mask(unmask(e.target.value), patterns)
                          );
                        }}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Separator className="my-4" />

            <div className="flex flex-col gap-1">
              <h1 className="font-bold">Dados da empresa</h1>
              <FormField
                control={form.control}
                name="razao_social"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Razão social</FormLabel>
                    <FormControl>
                      <Input disabled={loading} {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cnpj"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CNPJ</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        {...field}
                        value={field.value}
                        onChange={(e) => {
                          const patterns = ["99.999.999/9999-99"];
                          field.onChange(
                            mask(unmask(e.target.value), patterns)
                          );
                        }}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="termos"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="termos">
                        Eu aceito os{" "}
                        <Link
                          href="/termos-de-uso"
                          className="text-blue-500 underline"
                        >
                          Termos de Uso
                        </Link>{" "}
                        e{" "}
                        <Link
                          href="/politica-de-privacidade"
                          className="text-blue-500 underline"
                        >
                          Política de Privacidade
                        </Link>{" "}
                        do site IncoAgro.
                      </label>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
            </div>

            <Separator className="my-4" />

            <div className="flex items-center justify-end mt-2">
              <Button className="w-full" size="lg" disabled={loading}>
                {loading ? "Aguarda..." : "Registrar"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
