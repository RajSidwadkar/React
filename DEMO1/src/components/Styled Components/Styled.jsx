import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

const Styled = () => {
    const[active, setactive]= useState(true);
  return (
    <div>
        <Button act = {active}onClick={()=>setactive(!active)}>First Button</Button>
        <Peading>Styled Components</Peading>
        <Btn2 primary>Primary</Btn2>
        <Btn2 success>Success</Btn2>
        <Btn2 danger>Danger</Btn2>
    </div>
  )
}

export default Styled

const Button = styled.button`
  background-color: ${(props) =>{
    if (props.primary) return 'blue';
    if (props.success) return 'green';
    if (props.danger) return 'red';
    return 'gray';
  }};
    color: #fcf8f8;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
  `

const Btn2 = styled(Button)`
border : 1px solid black;
border-radius : 8px;
min-width : 200px;
padding : 10px 20px;
transition : 0.7s all;
        &:hover {
            opacity : 0.8;  
            background-color : black;
            transition : 0.7s all;}`

const Peading = styled.h1`
  text-align : center;`