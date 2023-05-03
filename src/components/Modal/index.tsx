import * as Dialog from '@radix-ui/react-dialog'
import { Container, Overlay } from './styles'

interface ModalProps {
  openModal: boolean
  image: JSX.Element
  title: string
}

export function Modal({ openModal, image, title }: ModalProps) {
  return (
    <Dialog.Root open={openModal}>
      <Dialog.Portal>
        <Overlay />
        <Container>
          {image}
          <h3>{title}</h3>
        </Container>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
