import { useState } from 'react'
import { useForm } from 'react-hook-form'

import Button from './components/Button'

import * as S from './styles'
import Input from './components/Input'
import { toast } from 'react-toastify'
import { encrypt } from './libs/p3/encrypt'
import { decrypt } from './libs/p3/decrypt'

type TFields = {
  a?: number
  b?: number
  c?: number
  msg?: string
}

function App() {
  const [degree, setDegree] = useState(1)
  const [result, setResult] = useState(undefined as undefined | string)

  const { register, getValues } = useForm<TFields>()

  function validation() {
    const fields = getValues()

    let a = Number(fields.a)
    let b = Number(fields.b)
    let c = Number(fields.c)

    if (degree === 3) {
      a = 1
      b = 1
      c = 1
    }
     
    if (a === 0) {
      toast('Insira o valor de "a"', { type: 'error' })
      throw Error
    }

    if (!fields.msg) {
      toast('Insira uma mensagem', { type: 'error' })
      throw Error
    }
  }

  async function onEncrypt() {
    try {
      validation()
    } catch {
      return
    }

    const fields = getValues()

    let a = Number(fields.a)
    let b = Number(fields.b)
    let c = Number(fields.c)

    if (degree === 3) {
      a = 1
      b = 1
      c = 1
    }

    const response = await encrypt({
      formula: { a, b, c },
      msg: fields.msg as string,
      degree
    })

    setResult(response.msg)
  }

  async function onDecrypt() {
    try {
      validation()
    } catch {
      return
    }

    const fields = getValues()

    const a = Number(fields.a)
    const b = Number(fields.b)
    const c = Number(fields.c)

    const response = await decrypt({
      formula: { a, b, c },
      msg: fields.msg as string,
      degree
    })

    setResult(response.msg)
  }

  return (
    <S.Container>
      <header>
        <h1>Criptografia por Cifra de César</h1>

        <S.HeaderContent>
          <section>
            <p>Grau da chave criptográfica:</p>

            <nav>
              <Button
                size="x-small"
                outlined={degree !== 1}
                onClick={() => setDegree(1)}
              >
                1° grau
              </Button>

              <Button
                size="x-small"
                outlined={degree !== 2}
                onClick={() => setDegree(2)}
              >
                2° grau
              </Button>

              <Button
                size="x-small"
                outlined={degree !== 3}
                onClick={() => setDegree(3)}
              >
                3° grau
              </Button>
            </nav>
          </section>

          <section>
            <p>Chave criptográfica:</p>

            {degree === 1 && (
              <S.FomulaContainer>
                <S.InputContainer>
                  <Input type="number" {...register('a')} />
                  <span>X</span>
                </S.InputContainer>

                <span>+</span>

                <S.InputContainer>
                  <Input type="number" {...register('b')} />
                </S.InputContainer>
              </S.FomulaContainer>
            )}

            {degree === 2 && (
              <S.FomulaContainer>
                <S.InputContainer>
                  <Input type="number" {...register('a')} />
                  <span>X <span className="pow">2</span></span>
                </S.InputContainer>

                <span>+</span>

                <S.InputContainer>
                  <Input type="number" {...register('b')} />
                  <span>X</span>
                </S.InputContainer>

                <span>+</span>

                <S.InputContainer>
                  <Input type="number" {...register('c')} />
                </S.InputContainer>
              </S.FomulaContainer>
            )}

            {degree === 3 && (
              <S.FomulaContainer>
                <S.InputContainer>
                  <Input type="number" value={1} />
                  <span>X <span className="pow">3</span></span>
                </S.InputContainer>

                <span>+</span>

                <S.InputContainer>
                  <Input type="number" value={0} />
                  <span>X <span className="pow">2</span></span>
                </S.InputContainer>

                <span>+</span>

                <S.InputContainer>
                  <Input type="number" value={1} />
                  <span>X</span>
                </S.InputContainer>

                <span>+</span>

                <S.InputContainer>
                  <Input type="number" value={1} />
                </S.InputContainer>
              </S.FomulaContainer>
            )}
          </section>
        </S.HeaderContent>
      </header>

      <S.Body>
        <S.BodyForm>
          <Input label="Insira alguma mensagem" placeholder="mensagem" {...register('msg')} />

          <div className="buttons">
            <Button onClick={onEncrypt}>Criptografar</Button>
            <Button onClick={onDecrypt}>Descriptografar</Button>
          </div>
        </S.BodyForm>

        <S.BodyResult>
          <Input label="Resultado" placeholder="resultado" disabled value={result} />
        </S.BodyResult>
      </S.Body>
    </S.Container>
  )
}

export default App
