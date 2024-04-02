import Card from "./Card"
import * as S from "./MainStyled"
import sofa from "../../assets/sofa.png"
import loja from "../../assets/loja.png"
import mac from "../../assets/bigmac.png"
import batata from "../../assets/batata.png"
import sorvete from "../../assets/sorvete.png"
import frita from "../../assets/frita.png"
import hamburguermac from "../../assets/hamburguer.png"
import supcasca from "../../assets/supcasca.png"
import banner from "../../assets/banner.jpg"
import { useState } from "react"

export default function Main() {

  const[item, setItem] = useState(hamburguermac)

  function casquinha(){
    setItem(supcasca)
  }


  return (
    <main>
      <S.BoxProdutos>
        <S.Caixa>
        <S.Principal>
          <img src={item} alt="" />
        </S.Principal>
        <h2>BATEU AQUELA <span>#FOME</span> DE <span>MÉQUI</span>?</h2>
        </S.Caixa>
        <S.Opcao>
          <img onClick={()=>{setItem(hamburguermac)}} src={mac} alt="" />
          <img onClick={()=>{setItem(frita)}} src={batata} alt="" />
          <img onClick={casquinha} src={sorvete} alt="" />
        </S.Opcao>
      </S.BoxProdutos>
        <S.Promocao>
            <h2>Promoção</h2>
            <S.Center>
           <Card imagem={sofa} texto={"Que tal um #MéquiNoSofá"} />
           <Card imagem={banner} texto={"Confira as medidas que o Méqui adotou!"} />
           <Card imagem={loja} texto={"Venha conhecer nossa nova loja"} />
            </S.Center>
        </S.Promocao>
    </main>
  )
}
