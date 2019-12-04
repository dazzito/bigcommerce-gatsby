


import styled from 'styled-components';
import {space, layout, typography, color} from 'styled-system'

import {Close} from 'styled-icons/evil/Close'

export const CloseIcon = styled(Close)`
  ${space}
  ${layout}
  ${typography} 
  ${color}

  transition: ease all 0.1s 0.35s;

  &:hover{
      background: black;
      color: whitesmoke;
  }
`


