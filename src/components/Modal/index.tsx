import * as Dialog from '@radix-ui/react-dialog'
import {
  Container,
  Controllers,
  Overlay,
  ProceedButton,
  RetroceedButton,
} from './styles'
import React from 'react'

interface ModalProps {
  openModal: boolean
  image: React.ReactNode
  title: string
  desiredFunction?: () => void
  goBackFunction?: () => void
}

export function Modal({
  openModal,
  image,
  title,
  desiredFunction,
  goBackFunction,
}: ModalProps) {
  return (
    <Dialog.Root open={openModal}>
      <Dialog.Portal>
        <Overlay />
        <Container className="slide-in-top">
          {image}
          <h3>{title}</h3>
          {desiredFunction && (
            <Controllers>
              <ProceedButton onClick={desiredFunction}>Sim</ProceedButton>
              <RetroceedButton onClick={goBackFunction}>Não</RetroceedButton>
            </Controllers>
          )}
        </Container>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
