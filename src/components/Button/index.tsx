import { Button as DefaultButton, NavigatableButton } from './styles'

interface ButtonProps {
  title: string
  path?: string
  handleClick?: () => void
  isNavigatable?: boolean
}

export function Button({
  title,
  path = '/',
  handleClick,
  isNavigatable = false,
}: ButtonProps) {
  return (
    <>
      {isNavigatable ? (
        <NavigatableButton onClick={handleClick} to={path}>
          <span>{title}</span>
        </NavigatableButton>
      ) : (
        <DefaultButton onClick={handleClick}>
          <span>{title}</span>
        </DefaultButton>
      )}
    </>
  )
}
