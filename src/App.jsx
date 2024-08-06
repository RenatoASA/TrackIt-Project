import { useState } from 'react'
import styled from 'styled-components'
import Container from './Components/Container'

function App() {


  return (
  <StyleMain>   
      <Container /> 
  </StyleMain> 
  )
}

export default App


const StyleMain = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Lexend Deca", sans-serif;
    background-color: #676767;

` 