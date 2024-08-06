
import imgText from "../assets/imgText.png"
import styled from "styled-components"
import TopHabitsContent from "./TopHabitsContent"
import AddHabits from "./AddHabits"
import BottomContent from "./BottomContent"
import HabitsList from "./HabitsList"
import TodayList from "./TodayList"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import AuthContext from "../contexts/AuthContext"

import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import localeData from "dayjs/plugin/localeData";
import updateLocale from "dayjs/plugin/updateLocale";
import advancedFormat from "dayjs/plugin/advancedFormat";
import "dayjs/locale/pt-br"; 


dayjs.extend(weekday);
dayjs.extend(localeData);
dayjs.extend(updateLocale);
dayjs.extend(advancedFormat);


dayjs.updateLocale('pt-br', {
    weekdays: ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"]
});




export default function Habits() {


    const [habitsBtn, setHabitsBtn] = useState();
    const [showAddHabits, setShowAddHabits] = useState(false);
    const [list, setList] = useState([]);
    const [showList, setShowList] = useState(false);
    const [showAddText, setShowAddText] = useState(true);
    const [todayList, setTodayList] = useState([])
    const navigate = useNavigate();
    const {token} = useContext(AuthContext)

    useEffect(()=> {
        if(!token){
            navigate("/")
        }
    },[])

    useEffect(()=> {
        if(todayList!=0){
            setHabitsBtn(false)
        }else{
            setHabitsBtn(true)
        }
    },[])

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


    
    const fetchHabitsToday = () => {
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        axios.get(url, config)
            .then(res => {
                setTodayList(res.data)
            })
            .catch(err => console.log(err.response.data))
    }

    useEffect(() => {
        fetchHabits()
        fetchHabitsToday()
    }, [])


    if ( list=== null) {
        return <div>Carregando...</div>
    }

    const formattedDate = dayjs().locale('pt-br').format('dddd, DD/MM');
  
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
                            <AddHabits setShowAddHabits={setShowAddHabits} setShowList={setShowList} setShowAddText={setShowAddText}  fetchHabits={fetchHabits} />
                            
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
                        <StyleContent>
                            <span>{formattedDate}</span>
                        </StyleContent>
                        <StyleTodayList>
                            {todayList.map((day, index) => (
                                <TodayList key={index} id={day.id} name={day.name} done={day.done} currentSequence={day.currentSequence} highestSequence={day.highestSequence} fetchHabitsToday={fetchHabitsToday} />
                            ))}
                        </StyleTodayList>
                    </>
                )}

                <BottomContent habitsBtn={habitsBtn} setHabitsBtn={setHabitsBtn} fetchHabitsToday={fetchHabitsToday}/>



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
    margin-left: 20px;
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