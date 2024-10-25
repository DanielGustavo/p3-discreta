import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  min-height: 90vh;
   
  header {
    width: 100%;
     
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 32px;

    h1 {
      color: #06F08D;
    }

    nav {
      display: flex;
      gap: 8px;
    }
  }
`

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 8px;

  section {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`

export const FomulaContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
   
  span {
    font-size: 40px;
  }
`

export const InputContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
   
  span {
    display: flex;
    font-size: 30px;

    span.pow {
      font-size: 12px;
    }
  }

  label {
    width: 50px;
  }
`

export const Body = styled.div`
  width: 80%;
  margin: auto;

  display: flex;
  flex-direction: column;
  gap: 40px;
`

export const BodyForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    width: 100%;
  }

  .buttons {
    display: flex;
    width: 100%;
    gap: 16px;

    button {
      flex: 1;
    }
  }
`

export const BodyResult = styled.div`
  label {
    width: 100%;
  }
`
