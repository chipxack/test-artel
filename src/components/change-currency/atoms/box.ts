import styled from "styled-components";


export const CurrencyBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 5px;
  border: 1px solid blue;
  border-radius: 5px;
  box-shadow: 0 0 5px 0 blue;
  margin: 0 5px;
  input{
    text-align: right;
    box-shadow: none;
    border: none;
    outline: none;
  }
  select{
    border: none;
    box-shadow: none;
    outline: none;
    appearance: none;
  }
`