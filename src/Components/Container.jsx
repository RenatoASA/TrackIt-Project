
import styled from "styled-components"
import Register from "./Register"
import Login from "./Login"
import Habits from "./Habits"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"

export default function Container() {

    const [token, setToken] = useState("")

    return (
        <BrowserRouter>
            <StyleContainer>
                {/* <TopContent /> */}
                <Routes>
                    <Route path="/" element={<Login setToken={setToken}/>}/>
                    <Route path="/cadastro" element={<Register />} />
                    <Route path="/habitos" element={<Habits token={token}/>} />
                    {/* <Route path="/assentos/:idSessao" element={<Seats />} />
                    <Route path="/sucesso" element={<Success />} /> */}
                </Routes>


            </StyleContainer>
        </BrowserRouter>
    )
}

const StyleContainer = styled.div`
    background-color: #ffffff;
    width: 375px;
    height: 720px;
    display: flex;
    top: 0px;

`