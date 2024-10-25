import { toast } from "react-toastify";
import { api } from "./api";

type TEncryptRequest = {
  formula: { a: number; b?: number; c?: number };
  msg: string;
  degree: number;
};

type TEncryptResponse = {
  texto: string;
  textoEmNumero: number[];
};

export type TParsedEncryptResponse = {
  msg: string;
  msgInNumbers: number[];
};

function checkDuplicatedValues(vector: number[]) {
  let hasDuplicated = false;

  for (let i = 0; i < vector.length; i++) {
    for (let j = 1; j < vector.length; j++) {
      if (hasDuplicated) break;
      if (i === j) continue;

      hasDuplicated = vector[i] === vector[j];
    }
  }

  return hasDuplicated;
}

let alphabet = "abcdefghijklmnopqrstuvwxyz.,";

export async function encrypt({ formula, msg, degree }: TEncryptRequest) {
  const parsedFormula = {
    a: formula.a,
    b: formula.b ?? 0,
    c: formula.c ?? 0,
  };

  const response = await api.post<TEncryptResponse>("/criptografar", {
    texto: msg,
    id: degree,
    ...parsedFormula,
  });

  const parsedResponse: TParsedEncryptResponse = {
    msg: response.data.texto,
    msgInNumbers: response.data.textoEmNumero,
  };

  if (degree === 2) {
    const response2 = await api.post<TEncryptResponse>("/criptografar", {
      texto: alphabet,
      id: degree,
      ...parsedFormula,
    });

    if (checkDuplicatedValues(response2.data.textoEmNumero)) {
      toast("Chave de criptografia incompatível", { type: "error" });
      parsedResponse.msg = "";
    }
  }

  const key = `${degree}${parsedResponse.msg.toLowerCase()}`;
  localStorage.setItem(key, JSON.stringify(parsedResponse.msgInNumbers));

  return parsedResponse;
}
