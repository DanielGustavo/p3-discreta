import { api } from "./api";

type TEncryptRequest = {
  formula: { a: number, b?: number, c?: number }
  msg: string
  degree: number
}

type TEncryptResponse = {
  texto: string
  textoEmNumero: number[]
}

export type TParsedEncryptResponse = {
  msg: string
  msgInNumbers: number[]
}

export async function encrypt({ formula, msg, degree }: TEncryptRequest) {
  const parsedFormula = {
    a: formula.a,
    b: formula.b ?? 0,
    c: formula.c ?? 0,
  }

  const response = await api.post<TEncryptResponse>('/criptografar', {
    texto: msg,
    id: degree,
    ...parsedFormula
  })

  const parsedResponse: TParsedEncryptResponse = {
    msg: response.data.texto,
    msgInNumbers: response.data.textoEmNumero
  }

  const key = `${degree}${parsedResponse.msg.toLowerCase()}`
  localStorage.setItem(key, JSON.stringify(parsedResponse.msgInNumbers))

  return parsedResponse
}
