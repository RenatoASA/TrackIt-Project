import styled from "styled-components";
import React, { useContext } from "react";
import CheckIcon from '@mui/icons-material/Check';
import axios from "axios";
import AuthContext from "../contexts/AuthContext";
// import { useState } from "react";

export default function TodayList({ id, name, done, currentSequence, highestSequence, fetchHabitsToday}) {
    
    
    const {token} = useContext(AuthContext)

    function checkToday(){
        if(done===false){
            checkTodayHabit()
            
        }else{
            uncheckTodayHabit()
            
        }
    }
    
    function checkTodayHabit() {        

        const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`
        const body = []

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
            
        axios.post(url, body, config)
            .then(() => fetchHabitsToday()                   
                        
            )
            .catch(err => alert(err.response.data))
    }

    function uncheckTodayHabit() {

        const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`
        const body = []

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
            
        axios.post(url, body, config)
            .then(() => fetchHabitsToday()                    
                        
            )
            .catch(err => alert(err.response.data))
    }

    return (
        <StyledContent>
        
        <StyleText>
        <StyleName>
        <span>{name}</span>
        </StyleName>

        <StyleCurrent>
        <span>Sequencia atual: {currentSequence} {currentSequence===1? "dia" : "dias"}</span>
        </StyleCurrent>

        <StyleHighest>
        <span>Seu recorde: {highestSequence} {highestSequence===1? "dia" : "dias"}</span>
        </StyleHighest>
            
        </StyleText>
        <StyleDone>
            <button onClick={checkToday} style={{backgroundColor: done ===true ? '#8FC549':'#E7E7E7'}}><CheckIcon style={{ fontSize: '3rem', color:'#ffffff'}} /></button>
        </StyleDone>
            
       
        </StyledContent>

    )
}
   
const StyleName = styled.div`
    height:30px;
    width:220px;
    margin-top: 10px;
    margin-left: 20px;;
    span{
    margin-bottom: 0px;
    font-size: 20px;
    color:#666666;
    }
`
const StyleHighest= styled.div`
    height:20px;
    width:190px;
    margin-left: 20px;
    margin-bottom:10px;
    span{
    margin-bottom: 0px;
    font-size: 15px;
    color:#666666;
    }
`

const StyleCurrent = styled.div`
    height:10px;
    width:190px;
    margin-bottom: 8px;
    margin-left: 20px; 
    span{
    margin-bottom: 0px;
    font-size: 15px;
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
    
`  
const StyleText = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const StyleDone = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    button{
    width: 69px;
    height: 69px;
    border-radius: 5px;
    border: 0px;
    
    }
`
