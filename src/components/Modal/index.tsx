import * as Dialog from '@radix-ui/react-dialog'
import {
  Close,
  Container,
  Controllers,
  Overlay,
  ProceedButton,
  RetroceedButton,
} from './styles'
import { Link } from 'react-router-dom'
import { X } from 'phosphor-react'
import React, { useState } from 'react'

interface ModalProps {
  openModal: boolean
  image: ReactElement
  title: string
  goTo?: string
  desiredFunction?: () => void
  goBackFunction?: () => void
}

export function Modal({
  openModal,
  image,
  title,
  goTo,
  desiredFunction,
  goBackFunction,
}: ModalProps) {
  const [modal, setModal] = useState(false)

  return (
    <Dialog.Root open={openModal}>
      <Dialog.Portal>
        <Overlay />
        <Container className="slide-in-top">
          <Link to={goTo}>
            <Close>
              <X />
            </Close>
          </Link>
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
