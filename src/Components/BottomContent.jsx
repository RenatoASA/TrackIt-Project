
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { useState } from 'react'
import styled from "styled-components"



export default function BottomContent({habitsBtn, setHabitsBtn}){
    
    function clickHabits(status){
        setHabitsBtn(status);

    }

    return(
        <StyleButtons>
            <ButtonLeft $habitsBtn={habitsBtn}><button onClick={()=>clickHabits(true)}><StyledLeftCalendarMonthIcon $habitsBtn={habitsBtn} /><span>Hábitos</span></button></ButtonLeft>
            <ButtonRight $habitsBtn={habitsBtn}><button onClick={() => clickHabits(false)}><StyledRightCalendarMonthIcon $habitsBtn={habitsBtn} /><span>Hoje</span></button></ButtonRight>
        </StyleButtons>
    )
}

const StyleButtons = styled.div`
width:  375px;
height: 65px;
position: fixed;
bottom:0px;
display: flex;
`

const ButtonLeft = styled.div`
button{
width: 188px;
height: 65px;
color:#ffffff;
background-color:  ${props => props.$habitsBtn ?"#52B6FF":""};
align-items: center;
justify-content: center;
display: flex;
}
span{
    margin-left: 10px;
    font-size: 18px;
    color:${props => props.$habitsBtn ?"#ffffff":"#bebcbc"};
}
`

const ButtonRight = styled.div`
button{
width: 187px;
height: 65px;
color:#ffffff;
background-color: ${props => props.$habitsBtn ?  "" : "#52B6FF"};
align-items: center;
justify-content: center;
display: flex;
}
span{
    margin-left: 10px;
    font-size: 18px;
    color:${props => props.$habitsBtn ?  "#bebcbc" : "#ffffff"};
}
`
const StyledLeftCalendarMonthIcon = styled(CalendarMonthIcon)`
    color: ${props => props.$habitsBtn ? "#ffffff" : "#bebcbc"}; 
`
const StyledRightCalendarMonthIcon = styled(CalendarMonthIcon)`
    color: ${props => props.$habitsBtn ? "#bebcbc" : "#ffffff" }; 
`
