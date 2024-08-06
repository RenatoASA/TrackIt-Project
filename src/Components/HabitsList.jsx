import styled from "styled-components";
import React from "react";


export default function HabitsList({ arrayName, arrayDays }) {
    
    return (
        <StyledContent>
        <StyleName>
        <span>{arrayName}</span>
        </StyleName>

        <StyleDays>
            
            <button 
            style={{ backgroundColor: arrayDays.includes(0) ? '#CFCFCF' : 'white', color: arrayDays.includes(0) ? '#ffffff' : '#CFCFCF'  }}
            // onClick={() => DaysSelectedButton("D", 0)}
        >D</button>
        <button 
            style={{ backgroundColor: arrayDays.includes(1) ? '#CFCFCF' : 'white', color: arrayDays.includes(1) ? '#ffffff' : '#CFCFCF'  }}
            // onClick={() => DaysSelectedButton("S", 1)}
        >S</button>
        <button 
            style={{ backgroundColor: arrayDays.includes(2) ? '#CFCFCF' : 'white', color: arrayDays.includes(2) ? '#ffffff' : '#CFCFCF'  }}
            // onClick={() => DaysSelectedButton("T", 2)}
        >T</button>
        <button 
            style={{ backgroundColor: arrayDays.includes(3) ? '#CFCFCF' : 'white', color: arrayDays.includes(3) ? '#ffffff' : '#CFCFCF'  }}
            // onClick={() => DaysSelectedButton("Q", 3)}
        >Q</button>
        <button 
            style={{ backgroundColor: arrayDays.includes(4) ? '#CFCFCF' : 'white', color: arrayDays.includes(4) ? '#ffffff' : '#CFCFCF'  }}
            // onClick={() => DaysSelectedButton("Q2", 4)}
        >Q</button>
        <button 
            style={{ backgroundColor: arrayDays.includes(5) ? '#CFCFCF' : 'white', color: arrayDays.includes(5) ? '#ffffff' : '#CFCFCF' }}
            // onClick={() => DaysSelectedButton("S2", 5)}
        >S</button>
        <button 
            style={{ backgroundColor: arrayDays.includes(6) ? '#CFCFCF' : 'white', color: arrayDays.includes(6) ? '#ffffff' : '#CFCFCF'  }}
            // onClick={() => DaysSelectedButton("S3", 6)}
        >S</button>

        </StyleDays>
        </StyledContent>

    )
}

const StyleDays = styled.div`
display: flex;
height: 43px;
margin-left: 10px;
flex-wrap: wrap; 

button{
   
    color: #D4D4D4;
    margin-left: 10px;
    width: 30px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #D4D4D4;
    margin-top: 0px;
}
   


`
const StyleName = styled.div`
    height:30px;
    width:300px;
    margin-top: 15px;
    margin-left: 20px;;
    background-color: #ffffff;
    span{
    margin-bottom: 0px;
    font-size: 20px;
    color:#666666;
    }
`
const StyledContent = styled.div`
    width: 340px;
    height: 91px;
    background-color: #ffffff;
    margin-left: 18px;
    margin-top: 10px;
    border-radius: 8px;
    display: flex;
    flex-wrap: wrap;
`