
import styled from "styled-components"
import Register from "./Register"
import Login from "./Login"
import Habits from "./Habits"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import UserContext from "../contexts/UseContext"
import AuthContext from "../contexts/AuthContext"

export default function Container() {

    const [token, setToken] = useState(localStorage.getItem("token"))
    const [user, setUser] = useState({})
    const [img, setImg] = useState("")
   

    return (
        <AuthContext.Provider value={{ token, setToken, setImg, img}}>
            <UserContext.Provider value={{ user, setUser }}>
                <BrowserRouter>
                    <StyleContainer>
                        <Routes>
                            <Route path="/" element={<Login />} />
                            <Route path="/cadastro" element={<Register />} />
                            <Route path="/habitos" element={<Habits />} />
                        </Routes>
                    </StyleContainer>
                </BrowserRouter>
            </UserContext.Provider>
        </AuthContext.Provider>
    )
}

const StyleContainer = styled.div`
    background-color: #ffffff;
    width: 375px;
    height: 720px;
    display: flex;
    top: 0px;

`