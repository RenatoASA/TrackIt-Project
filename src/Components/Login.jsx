import imgMain from '../assets/imgMain.png'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function Login({setToken}) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    function sendLogin(e){
        e.preventDefault()
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
        const body = {email, password}
    
    axios.post(url, body)
        .then(res =>{
            setToken(res.data.token)
            navigate("/habitos")
        })
        .catch(err => console.log(err.response.data))
}


    return (
        <>
            <form onSubmit={sendLogin}>
            <StyleLoginContent>
                <StyleImage>
                    <img src={imgMain}></img>
                </StyleImage>
                <StyleInputEmail>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder='e-mail'
                    />
                </StyleInputEmail>
                <StyleInputPassword>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder='senha'
                    />
                </StyleInputPassword>
                <StyleButtonLogin>
                    <button>Entrar</button>
                </StyleButtonLogin>
                <StyleText to={`/cadastro`}>
                    <span >Não tem uma conta? Cadastre-se!</span>
                </StyleText>
                
            </StyleLoginContent>
            </form>
        </>
    )
}

const StyleLoginContent = styled.div`
        display: flex;
        flex-wrap: wrap;
        height: 100%;
        width: 100%;
        flex-direction: column;
        background-color: #ffffff;
 
 `


const StyleImage = styled.div`
        margin-top: 68px;
        margin-left: 97px;
    img{
        display: flex;
        align-items: center;
        height: 178px;
        width: 180px;
    }
 `
const StyleInputEmail = styled.div`
        margin-top: 28px;
        margin-left: 28px;
    input{
        display: flex;
        align-items: center;
        height: 45px;
        width: 293px;  
        border: 1px solid #8b8b8b;
        border-radius: 5px;
        font-size: 20px;
        padding-left: 10px;
    }
`
const StyleInputPassword = styled.div`
    input{
        margin-top: 5px;
        margin-left: 28px;
        top: 279px;
        display: flex;
        align-items: center;
        height: 45px;
        width: 293px;
        border: 1px solid #8b8b8b;
        border-radius: 5px;
        font-size: 20px;
        padding-left: 10px;
        
    }
 `
const StyleButtonLogin = styled.div`

    button{
        margin-top: 5px;
        margin-left: 28px;
        background-color: #52B6FF;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 45px;
        width: 303px;
        border-radius: 5px;
        font-size: 20px;
        border: 0px;
    }
 `
 const StyleText = styled(Link)`
        margin-top: 30px;
        margin-left: 48px;
    span{
        color:#52B6FF;
        text-decoration: underline;
    }
 `