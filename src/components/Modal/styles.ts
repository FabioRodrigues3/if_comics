import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Container = styled(Dialog.Content)`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 30%;
  left: 35%;
  right: 50%;
  bottom: 50%;
  transform: translate(-50%, 50%);
  width: 100vw;
  max-width: 450px;
  max-height: 85vh;
  padding: 25px;
  height: 300px;
  transition: 8s ease-in;

  text-align: center;
  line-height: 150%;
`

export const Overlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  inset: 0;
`

export const Close = styled(Dialog.Close)`
  position: absolute;
  top: 20px;
  right: 30px;
`
export const Controllers = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  font-family: 'Poppins';
`

export const ButtonDefault = styled.button`
  border-radius: 6px;
  border: none;
  padding: 1rem 2rem;
  color: white;
  font-size: 1.5rem;
  font-family: 'Poppins';
`

export const ProceedButton = styled(ButtonDefault)`
  background-color: teal;
`

export const RetroceedButton = styled(ButtonDefault)`
  background-color: #cc3300;
`
