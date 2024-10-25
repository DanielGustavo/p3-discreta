import { useState } from 'react'

import Button from './components/Button'

import * as S from './styles'
import Input from './components/Input'

function App() {
  const [degree, setDegree] = useState(1)

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
                  <Input type="number" />
                  <span>X</span>
                </S.InputContainer>

                <span>+</span>

                <S.InputContainer>
                  <Input type="number" />
                </S.InputContainer>
              </S.FomulaContainer>
            )}

            {degree === 2 && (
              <S.FomulaContainer>
                <S.InputContainer>
                  <Input type="number" />
                  <span>X <span className="pow">2</span></span>
                </S.InputContainer>

                <span>+</span>

                <S.InputContainer>
                  <Input type="number" />
                  <span>X</span>
                </S.InputContainer>

                <span>+</span>

                <S.InputContainer>
                  <Input type="number" />
                </S.InputContainer>
              </S.FomulaContainer>
            )}

            {degree === 3 && (
              <S.FomulaContainer>
                <S.InputContainer>
                  <Input type="number" />
                  <span>X <span className="pow">3</span></span>
                </S.InputContainer>

                <span>+</span>

                <S.InputContainer>
                  <Input type="number" />
                  <span>X <span className="pow">2</span></span>
                </S.InputContainer>

                <span>+</span>

                <S.InputContainer>
                  <Input type="number" />
                  <span>X</span>
                </S.InputContainer>

                <span>+</span>

                <S.InputContainer>
                  <Input type="number" />
                </S.InputContainer>
              </S.FomulaContainer>
            )}
          </section>
        </S.HeaderContent>
      </header>

      <S.Body>
        <S.BodyForm>
          <Input label="Insira alguma mensagem" placeholder="mensagem" />

          <div className="buttons">
            <Button>Criptografar</Button>
            <Button>Descriptografar</Button>
          </div>
        </S.BodyForm>

        <S.BodyResult>
          <Input label="Resultado" placeholder="resultado" disabled />
        </S.BodyResult>
      </S.Body>
    </S.Container>
  )
}

export default App
