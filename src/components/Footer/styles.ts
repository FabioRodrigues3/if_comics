import styled from 'styled-components'
import * as Separator from '@radix-ui/react-separator'

export const Container = styled.footer`
  display: flex;
  width: 100%;
  margin-top: 120px;
  padding: 50px 0;
  justify-content: flex-start;
  box-shadow: 0px -1px 8px black;

  div {
    span {
      width: 100%;
    }
  }
`

export const FooterContent = styled.div`
  margin-left: 40px;
`

export const CustomSeparator = styled(Separator.Root)`
  margin-top: 2px;
  background: black;
  height: 1px;
  width: 100%;
`
