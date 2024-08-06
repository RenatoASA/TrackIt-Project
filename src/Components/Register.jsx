import imgMain from '../assets/imgMain.png'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from "axios"
import { ThreeDots } from 'react-loader-spinner';


export default function Register() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    function createAccount(e){
        
        e.preventDefault()

        setLoading(true)

        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"
        const body = {email, name, image, password}

        axios.post(url, body)
        .then(()=>{ 
            navigate("/")
            setLoading(false)
        })
        .catch(err=> {
           
            console.log(err.response.data)
            setLoading(false)
            alert(err.response.data.message)
        })
    }

    return (
        <> 
            <form onSubmit={createAccount}>
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
                        disabled={loading}
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
                        disabled={loading}
                    />
                </StyleInputPassword>
                <StyleInputName>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder='nome'
                        disabled={loading}
                    />
                </StyleInputName>
                <StyleInputImage>
                    <input
                        type="text"
                        id="image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        required
                        placeholder='imagem'
                        disabled={loading}
                    />
                </StyleInputImage>
                <StyleButtonLogin>
                    <button type='submit' style={{ backgroundColor: !loading ? '#52B6FF' : '#b9ddf7'}}>{!loading ? "Cadastrar" : <ThreeDots
  visible={true}
  height="51"
  width="51"
  color="#ffffff"
  radius="9"
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />}</button>
                </StyleButtonLogin>
                <StyleText to={`/`} >
                    <span >Já tem uma conta? Faça login!</span>
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

const StyleInputName = styled.div`
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

const StyleInputImage = styled.div`
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