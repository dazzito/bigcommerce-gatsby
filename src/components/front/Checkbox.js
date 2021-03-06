import React from 'react'
import styled from 'styled-components'

const CheckboxContainer = styled.label`
  display: inline-block;
  vertical-align: middle;
`

const Icon = styled.svg`
  fill: none;
 
  stroke-width: 3px;
  position: absolute;
  top: 0;
 
`
// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: relative;
  white-space: nowrap;
  width: 1px;
`

const StyledCheckbox = styled.div`
  display: inline-block;
  position: relative;
  width: 16px;
  height: 16px;
  border: solid black 2px;
  background: ${props => (props.checked ? 'black' : 'white')};
  /* border-radius: 3px; */

  transition: ease all 0.1s 0s;
    &:hover{
        transform: scale(1.1)
    }

  /* ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  } */

  ${Icon} {
    display:  ${props => (props.checked ? 'inline-block' : 'none')};
    /* visibility: ${props => (props.checked ? 'visible' : 'hidden')}; */
    stroke:  ${props => (props.checked ? 'white' : 'black')};
    transform: scale(1.25)
  } 

  
`

const Checkbox = ({ className, checked, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
)

export default Checkbox
