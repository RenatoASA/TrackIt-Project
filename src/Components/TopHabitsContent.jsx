import imgText from "../assets/imgText.png"
import styled from "styled-components"

export default function TopContent(){
    return(
        <StyleTopContent>
                <img src={imgText}></img>
                <StyleImgPerfil>
                   <img src="https://img.olhardigital.com.br/wp-content/uploads/2020/12/jair_bolsonaro_solenidade_de_acao_de_gracas_mcamgo_16122000792.jpg"></img>
                </StyleImgPerfil>
        </StyleTopContent>
    )
}

const StyleTopContent = styled.div`
    margin-top: 0px;
    height: 70px;
    width: 375px;
    background-color: #126BA5;
    display:flex;
    align-items: center;
    justify-content: space-between;
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