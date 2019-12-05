import styled from "styled-components";
import {space, layout, typography, color,position } from 'styled-system'





const Select = styled.select`
  ${layout}
  ${space}
  background: white;
  color: gray;
  border: solid whitesmoke 1px;
  padding: 0.5em;
  margin-left: 10px;
  /* font-size: large; */

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0.5em;
  }
`;


export default Select