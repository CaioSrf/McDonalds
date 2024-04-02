import logo from "../../assets/logo.png"
import app from "../../assets/app1.png"
import appCel from "../../assets/app.png"
import * as S from "./HeaderStyled"

export default function Header() {
  return (
    <S.Header>
        <img src={logo} alt="" />
        <S.AppBtn>
            <S.App>
                <img src={app} alt="" />
                <p>Baixe o App</p>
            </S.App>
            <S.App color="#FFC72C" > 
                <p>Peça seu Méqui</p>
                <img src={appCel} alt="" />
            </S.App>
        </S.AppBtn>
    </S.Header>
  )
}
