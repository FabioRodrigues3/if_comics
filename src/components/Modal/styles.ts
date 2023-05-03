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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  max-width: 450px;
  max-height: 85vh;
  padding: 25px;
  height: 300px;
  transition: 8s ease-in;
`

export const Overlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.52);
  position: fixed;
  inset: 0;
`