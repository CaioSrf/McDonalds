import styled,{css} from "styled-components";

const center = css`
 display: flex;
 justify-content: center;
 align-items: center;
`
export const Principal = styled.div`
//item da opcao
height: 47vh;
img{
    width: 35vw;
}
`

export const Caixa = styled.div`
//texto mequi
${center}
justify-content: space-between;
height: 80vh;
width: 90vw;
h2{
    
    font-size: 4rem;
    color: white;
    width: 50vw;
    span{
        color: red;
    }
}

`

export const Opcao = styled.figure`
//trocar fotos 
width: 40vw;
${center}
justify-content: space-around;
img{
    height: 15vh;
    cursor: pointer;
}
`

export const BoxProdutos = styled.section`

height: 80vh;
background-color: #FFC72C;
${center}
flex-direction: column;
justify-content: space-around;
`



export const Promocao = styled.section`
//promocao
background-color: #FEB706;
height: 70vh;
${center}
flex-direction: column;
justify-content: space-around;
h2{
    color: white;
}
`
export const Card = styled.div`
//card do promoção
height: 45vh;
text-align: center;
background-color: white;
border-radius: 14px;
p{

   height: 9vh;
   ${center}
}
button{
    background-color: #FFBC0D;
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
}
`
export const Center = styled.div`
//espaçamento cards
width: 81vw;
${center}
justify-content: space-around;
`