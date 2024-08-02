
import imgText from "../assets/imgText.png"
import styled from "styled-components"
import { Link } from "react-router-dom"
import TopHabitsContent from "./TopHabitsContent"
import AddHabits from "./AddHabits"
import BottomContent from "./BottomContent"
import HabitsList from "./HabitsList"
import TodayList from "./TodayList"
import { useEffect, useState } from "react"

import axios from "axios"


export default function Habits({ token }) {

    // const [arrayHabits, setArrayHabits] = useState([]);
    const [habitsBtn, setHabitsBtn] = useState(true);
    const [showAddHabits, setShowAddHabits] = useState(false);
    const [list, setList] = useState([]);
    const [showList, setShowList] = useState(false);
    const [showAddText, setShowAddText] = useState(true);

    let arrayTodayList = [
        {
            "id": 3,
            "name": "Acordar",
            "done": true,
            "currentSequence": 1,
            "highestSequence": 1
        },

        {
            "id": 2,
            "name": "Estudar",
            "done": false,
            "currentSequence": 2,
            "highestSequence": 4
        }

    ]

    // useEffect(() => {
    //     const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"

    //     const config = {
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         }
    //     }

    //     axios.get(url, config)
    //         .then(res => {setList(res.data)
    //             console.log("list = " + list.length)
    //             if(res.data.length>0){
    //                 setShowList(true),
    //                 setShowAddHabits(false),
    //                 setShowAddText(false),
    //                 console.log("deu certo a requizição")
    //             }else{
    //                 console.log("entrou no else"),
    //                 setShowList(false),
    //                 setShowAddHabits(false),
    //                 setShowAddText(true)
    //             }
            
    // })
    //         // setToken(res.data.token)
    //         // navigate("/habitos")

    //         .catch(err => console.log(err.response.data))
    
    //     },    
    // [])

    const fetchHabits = () => {
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        axios.get(url, config)
            .then(res => {
                setList(res.data)
                if (res.data.length > 0) {
                    setShowList(true)
                    setShowAddHabits(false)
                    setShowAddText(false)
                } else {
                    setShowList(false)
                    setShowAddHabits(false)
                    setShowAddText(true)
                }
            })
            .catch(err => console.log(err.response.data))
    }

    useEffect(() => {
        fetchHabits()
    }, [])


    if ( list=== null) {
        return <div>Carregando...</div>
    }


        
    // function createHabits(e) {

    //     e.preventDefault()

    //     const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
    //     const body = { name: nameHabit, days: arrayDays }

    //     axios.post(url, body)
    //         .then(() => navigate("/"))
    //         .catch(err => alert(err.response.data))
    // }

  
    function showAdd() {
        setShowAddHabits(prevState => !prevState)
    }

    return (
        <>
            <StyleHabitsContent>
                <TopHabitsContent />

                {habitsBtn && (
                    <>
                        <StyleContent>
                            <span>Meus Habitos</span>
                            <button onClick={showAdd}>+</button>
                        </StyleContent>
                        {showAddHabits && (
                            <AddHabits setShowAddHabits={setShowAddHabits} token={token} setShowList={setShowList} setShowAddText={setShowAddText}  fetchHabits={fetchHabits} />
                            
                        )}
                        {showAddText && (
                            <StyleText>
                                <span >Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</span>
                            </StyleText>
                        )}


                        
                        {showList && (
                            <StyleList>
                                {list.map((habit, index) => (
                                    <HabitsList key={index} arrayId={habit.id} arrayName={habit.name} arrayDays={habit.days} />
                                ))}
                            </StyleList>
                        )}
                    </>
                )}
                {!habitsBtn && (
                    <>
                        <StyleTodayList>
                            {arrayTodayList.map((day, index) => (
                                <TodayList key={index} Id={day.id} name={day.name} done={day.done} currentSequence={day.currentSequence} highestSequence={day.highestSequence} />
                            ))}
                        </StyleTodayList>
                    </>
                )}

                <BottomContent habitsBtn={habitsBtn} setHabitsBtn={setHabitsBtn} />



            </StyleHabitsContent>
        </>
    )
}


const StyleHabitsContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 136px;
    height: 485px;
    width: 100%;
    flex-direction: column;
    background-color: #d5d2d2;
    overflow-y: auto;

`

const StyleText = styled.div`
    margin-top: 30px;
    margin-left: 28px;
    margin-right:20px;
    text-decoration: none;
span{
    color:#666666;
    font-size: 18px;
}
`

const StyleContent = styled.div`
    top: 80px;
    
    margin-bottom: 15px;
    width: 375px;
    height: 65px;
    background-color: #d5d2d2;
    display:flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
button{
    margin-right: 20px;
    margin-top: 10px;
    width: 40px;
    height: 35px;
    background-color: #52B6FF;
    color: #ffffff;
    border-radius: 5px;
    border: 0px;
    font-size: 23px;
}
span{
    background-color: #d5d2d2;
    margin-left: 15px;
    font-size: 23px;
    color: #126BA5;
    font-family: 'Lexend Deca', sans-serif;
}
`


const StyleList = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    
    
`
const StyleTodayList = styled.div`
`