import logo from "../../assets/logo.png";
import googlePlayIcon from "../../assets/google-play-icon.png";
import appStoreIcon from "../../assets/app-store-icon.png";
import * as S from "./FooterStyled";

export default function Footer() {
    return (
        <S.Footer>
            <S.Logo>
               <S.LogoImage src={logo} alt="McDonald's"/>
               <S.LogoText>© McDonald’s 2024</S.LogoText>
            </S.Logo>
            <S.AppIcons>
                <S.Icon src={googlePlayIcon} alt="Google Play" />
                <S.Icon src={appStoreIcon} alt="App Store" />
            </S.AppIcons>
        </S.Footer>
    );
}
