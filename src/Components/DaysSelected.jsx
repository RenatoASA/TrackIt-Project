import styled from "styled-components"
import { useState } from "react"

export default function DaysSelected({ arrayDays, setArrayDays }) {
    const [selectedDays, setSelectedDays] = useState(arrayDays)

    const DaysSelectedButton = (e, index) => {

        e.preventDefault()  
        let newArray = [...selectedDays]

        if (newArray.includes(index)) {
            newArray = newArray.filter(day => day !== index)
        } else {
            newArray.push(index)
        }

        setSelectedDays(newArray)
        setArrayDays(newArray) // Atualiza o estado no pai
        console.log("ArrayDays dentro do DaysSelected:", newArray)
    }

    return (
        <StyleDays>
            {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((day, index) => (
                <button
                    key={index}
                    style={{ backgroundColor: selectedDays.includes(index) ? '#CFCFCF' : 'white', color: selectedDays.includes(index) ? '#ffffff' : '#CFCFCF' }}
                    onClick={(e) => DaysSelectedButton(e, index)}
                >
                    {day}
                </button>
            ))}
        </StyleDays>
    )
}

const StyleDays = styled.div`
    button {
        color: #D4D4D4;
        margin-left: 15px;
        width: 30px;
        height: 30px;
        border-radius: 5px;
        border: 1px solid #D4D4D4;
    }
    display: flex;
    margin-left: 5px;
    flex-wrap: wrap;
`




// import styled from "styled-components";
    // import React from "react";
    // import { useState } from "react";

    // export default function DaysSelected({ arrayDays, setArrayDays}) {
        
    //     const [selectedDays, setSelectedDays] = useState(arrayDays);

    //     const DaysSelectedButton = (value, index) => {
    //         let newArray = [...selectedDays];
    
    //         if (newArray.includes(index)) {
    //             newArray = newArray.filter(day => day !== index);
    //         } else {
    //             newArray.push(index);
    //         }
    
    //         setSelectedDays(newArray);
    //         setArrayDays(newArray); // Atualiza o estado no pai
    //         console.log("ArrayDays dentro do DaysSelected:" +arrayDays);
    //     }

    //     return (
    //         <StyleDays>
                
    //             <button 
    //             style={{ backgroundColor: selectedDays.includes(0) ? '#CFCFCF' : 'white', color: selectedDays.includes(0) ? '#ffffff' : '#CFCFCF'  }}
    //             onClick={() => DaysSelectedButton("D", 0)}
    //         >D</button>
    //         <button 
    //             style={{ backgroundColor: selectedDays.includes(1) ? '#CFCFCF' : 'white', color: selectedDays.includes(1) ? '#ffffff' : '#CFCFCF'  }}
    //             onClick={() => DaysSelectedButton("S", 1)}
    //         >S</button>
    //         <button 
    //             style={{ backgroundColor: selectedDays.includes(2) ? '#CFCFCF' : 'white', color: selectedDays.includes(2) ? '#ffffff' : '#CFCFCF'  }}
    //             onClick={() => DaysSelectedButton("T", 2)}
    //         >T</button>
    //         <button 
    //             style={{ backgroundColor: selectedDays.includes(3) ? '#CFCFCF' : 'white', color: selectedDays.includes(3) ? '#ffffff' : '#CFCFCF'  }}
    //             onClick={() => DaysSelectedButton("Q", 3)}
    //         >Q</button>
    //         <button 
    //             style={{ backgroundColor: selectedDays.includes(4) ? '#CFCFCF' : 'white', color: selectedDays.includes(4) ? '#ffffff' : '#CFCFCF'  }}
    //             onClick={() => DaysSelectedButton("Q2", 4)}
    //         >Q</button>
    //         <button 
    //             style={{ backgroundColor: selectedDays.includes(5) ? '#CFCFCF' : 'white', color: selectedDays.includes(5) ? '#ffffff' : '#CFCFCF' }}
    //             onClick={() => DaysSelectedButton("S2", 5)}
    //         >S</button>
    //         <button 
    //             style={{ backgroundColor: selectedDays.includes(6) ? '#CFCFCF' : 'white', color: selectedDays.includes(6) ? '#ffffff' : '#CFCFCF'  }}
    //             onClick={() => DaysSelectedButton("S3", 6)}
    //         >S</button>

    //         </StyleDays>


    //     )
    // }

    // const StyleDays = styled.div`
    // button{
    //     color: #D4D4D4;
    //     margin-left: 15px;
    //     width: 30px;
    //     height: 30px;
    //     border-radius: 5px;
    //     border: 1px solid #D4D4D4;
    // }
    //     display: flex;
    //     margin-left: 5px;
    //     flex-wrap: wrap;    


    // `
    