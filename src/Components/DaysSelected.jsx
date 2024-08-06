import styled from "styled-components"
import { useState } from "react"
import { useEffect } from "react";

export default function DaysSelected({ arrayDays, setArrayDays, loading }) {
    const [selectedDays, setSelectedDays] = useState(arrayDays)

    useEffect(() => {
        setSelectedDays(arrayDays);
    }, [arrayDays]);

    const DaysSelectedButton = (e, index) => {

        e.preventDefault()  
        let newArray = [...selectedDays]

        if (newArray.includes(index)) {
            newArray = newArray.filter(day => day !== index)
        } else {
            newArray.push(index)
        }

        setSelectedDays(newArray)
        setArrayDays(newArray) 
        
    }

    return (
        <StyleDays>
            {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((day, index) => (
                <button
                    key={index}
                    style={{ backgroundColor: selectedDays.includes(index) ? '#CFCFCF' : 'white', color: selectedDays.includes(index) ? '#ffffff' : '#CFCFCF' }}
                    onClick={(e) => DaysSelectedButton(e, index)} disabled={loading}
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


