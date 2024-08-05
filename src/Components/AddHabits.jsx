import DaysSelected from "./DaysSelected"
import styled from "styled-components"
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import UserContext from "../contexts/UseContext";
import AuthContext from "../contexts/AuthContext";

export default function AddHabits({ setShowAddHabits, setShowList, setShowAddText, fetchHabits}){

    const [nameHabit, setNameHabit] = useState("");
    const [arrayDays, setArrayDays] = useState([]);
    const navigate = useNavigate();
    const {token} = useContext(AuthContext)


    function createHabits(e) {

        e.preventDefault()

        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
        const body = { name: nameHabit, days: arrayDays }

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
            
        axios.post(url, body, config)
            .then(() => console.log("adicionado com sucesso"),
                        fetchHabits(),
                        setShowList(true),
                        setShowAddHabits(false),
                        setShowAddText(false)                        
                        
            )
            .catch(err => alert(err.response.data))
    }
    

    function closeAddHabits(){
        setShowAddHabits(false);
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
                        <span onClick={closeAddHabits}>Cancelar</span>
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