import DaysSelected from "./DaysSelected"
import styled from "styled-components"
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import UserContext from "../contexts/UseContext";
import AuthContext from "../contexts/AuthContext";
import { ThreeDots } from 'react-loader-spinner';



export default function AddHabits({ setShowAddHabits, setShowList, setShowAddText, fetchHabits}){

    const [nameHabit, setNameHabit] = useState("");
    const [arrayDays, setArrayDays] = useState([]);
    const navigate = useNavigate();
    const {token} = useContext(AuthContext);
    const [loading, setLoading] = useState(false);


    function createHabits(e) {

        e.preventDefault()

        setLoading(true);
        
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
                        setShowAddText(false),
                        setLoading(false),
                        localStorage.removeItem('savedNameHabit'), 
                        localStorage.removeItem('savedDays')                   
                        
            )
            .catch(err => {
                            alert(err.response.data.message),
                            setLoading(false)
                        })
    }
    

    function closeAddHabits(){
        setShowAddHabits(false);
        localStorage.setItem('savedNameHabit', nameHabit);
        localStorage.setItem('savedDays', JSON.stringify(arrayDays));
    }

    useEffect(() => {
        const savedNameHabit = localStorage.getItem('savedNameHabit');
        const savedDays = localStorage.getItem('savedDays');
    
        if (savedNameHabit) {
            setNameHabit(savedNameHabit);
        }
    
        if (savedDays) {
            setArrayDays(JSON.parse(savedDays));
        }
    }, []); 

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
                        disabled={loading}
                    />

                    <DaysSelected arrayDays={arrayDays} setArrayDays={setArrayDays} loading={loading} />
                    <Buttons>
                        <span onClick={closeAddHabits}>Cancelar</span>
                        <button onClick={createHabits} type='submit' style={{ backgroundColor: !loading ? '#52B6FF' : '#b9ddf7'}}>
                            {!loading ? "Salvar" : <ThreeDots visible={true} height="51" width="51" color="#ffffff" radius="9" 
                            ariaLabel="three-dots-loading" wrapperStyle={{}}  wrapperClass=""  />}
                        </button>
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