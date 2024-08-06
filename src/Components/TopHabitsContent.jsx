import imgText from "../assets/imgText.png"
import styled from "styled-components"

import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

export default function TopHabitsContent(){

    const {img} = useContext(AuthContext);
   

    return(
        <StyleTopContent>
                <StyleLogo>
                    <img src={imgText}></img>
                </StyleLogo>
                <StyleImgPerfil>
                   <img src={img}></img>
                </StyleImgPerfil>
        </StyleTopContent>
    )
}

const StyleTopContent = styled.div`
    
    height: 78px;
    width: 375px;
    background-color: #126BA5;
    display:flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 8px;

`

const StyleLogo = styled.div`
img{
    margin-left: 20px;
    width: 100px;
    height: 52 px;
}
`

const StyleImgPerfil = styled.div`
    img{
        width: 51px;
        height: 51px;
        border-radius: 50%;
        margin-right: 15px;
    }
`