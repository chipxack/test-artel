import styled from "styled-components";


export const BoxCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  flex-direction: column;
  padding: 0 20px;
  button{
    padding: 0;
    border: 0;
    background: none;
    box-shadow: none;
    font-size: 24px;
    &.green{
      color: green;
    }
    &.red{
      color: red;
      font-size: initial;
    }
  }
  
`