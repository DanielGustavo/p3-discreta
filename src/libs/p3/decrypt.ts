import { api } from "./api";

type TDecryptRequest = {
  formula: { a: number; b?: number; c?: number };
  msg: string;
  degree: number;
};

type TDecryptResponse = {
  texto: string;
  textoEmNumero: number[];
};

export type TParsedDecryptResponse = {
  msg: string;
  msgInNumbers: number[];
};

export async function decrypt({ formula, msg, degree }: TDecryptRequest) {
  const parsedFormula = {
    a: formula.a,
    b: formula.b ?? 0,
    c: formula.c ?? 0,
  };

  const key = `${degree}${msg.toLowerCase()}`;
  const msgInNumbersStringfied = localStorage.getItem(key);
  const msgInNumbers = JSON.parse(msgInNumbersStringfied || "[]");

  const response = await api.post<TDecryptResponse>("/descriptografar", {
    texto: msg,
    id: degree,
    textoEmNumero: msgInNumbers,
    ...parsedFormula,
  });

  const parsedResponse: TParsedDecryptResponse = {
    msg: response.data.texto,
    msgInNumbers: response.data.textoEmNumero,
  };

  return parsedResponse;
}
