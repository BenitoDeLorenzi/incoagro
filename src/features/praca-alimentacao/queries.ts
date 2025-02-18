import { db } from "@/lib/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

export interface PracaDeAlimentacaoProps {
  id?: string;
  cpf: string;
  email: string;
  celular: string;
  razao_social: string;
  cnpj: string;
  termos: boolean;
}

export const saveInscricaoPracaAlimentacao = async (
  data: PracaDeAlimentacaoProps
) => {
  try {
    const docRef = await addDoc(
      collection(db, "inscricaoPracaDeAlimentacao"),
      data
    );
    console.log("Documento salvo com ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Erro ao salvar o documento: ", error);
    throw error;
  }
};
