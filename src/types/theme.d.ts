import 'styled-components'

import { Theme } from '../styles/variables'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
