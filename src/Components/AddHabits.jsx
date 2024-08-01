import DaysSelected from "./DaysSelected"
import styled from "styled-components"
import { useState, useEffect } from "react";
import axios from "axios";


export default function AddHabits({showListHabits, setShowListHabits, token}){

    const [nameHabit, setNameHabit] = useState("");
    const [arrayDays, setArrayDays] = useState([]);


    function createHabits(e) {

        e.preventDefault()

        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
        const body = { name: nameHabit, days: arrayDays }
        console.log("name"+nameHabit);
        console.log("days"+arrayDays);
        console.log("corpo"+body.data);
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        axios.post(url, body, config)
            .then(() => {navigate("/habitos");
                        setShowListHabits(true);
                        console.log("adicionado com sucesso");
            })
            .catch(err => alert(err.response.data))
    }

    return(

        <StyleAddHabits>
                  <form>
                    <input
                        type="text"
                        id="nameHabit"
                        value={nameHabit}
                        onChange={(e) => setNameHabit(e.target.value)}
                        required
                        placeholder='nome do habito'
                    />

                    <DaysSelected arrayDays={arrayDays} setArrayDays={setArrayDays} />
                    <Buttons>
                        <span>Cancelar</span>
                        <button onClick={createHabits} type='submit'>Salvar</button>
                    </Buttons>
                    </form>
        </StyleAddHabits>
    )
}

const StyleAddHabits = styled.div`
        background-color: #ffffff;
        margin-top: 10px;
        margin-left: 20px;
        width: 340px;
        height: 180px;
        border-radius: 5px;
    input{
        height: 45px;
        width: 303px;  
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        font-size: 20px;
        padding-left: 10px;
        margin: 10px;
        
    }
    input::placeholder{
        color: #D4D4D4;
    }
`
const Buttons = styled.div`
        margin-top: 35px;
    span{
        margin-left: 165px;
        text-decoration: underline;
        color:#52B6FF;
    }
    button{
        background-color: #52B6FF;
        color: #ffffff;
        border-radius: 5px;
        border: 0px;
        font-size: 18px;
        margin-left:15px;
        width: 84px;
        height: 35px;
    }
`