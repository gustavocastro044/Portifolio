import styled, {keyframes} from 'styled-components'

const animacaoTexto = keyframes`  
  from{
    transition: .5s;
    transform: translate3d(60px, 0, 0);
  }
  to{
    transform: translate3d(0, 0, 0)
  }
`;

const animacaoFoto = keyframes`  
  from{
    transition: .5s;
    transform: translate3d(-60px, 0, 0);
  }
  to{
    transform: translate3d(0, 0, 0)
  }
`;

export const Container = styled.div`
  margin-top: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  justify-content: center;
  padding: 40px;
  padding-bottom: 60px;
`

export const Titulo = styled.h1`
  font-size: 2.5rem;
  color: #ff5d56;
  margin-bottom: 15px;
  font-family: 'Berkshire Swash', cursive;
`

export const Introducao = styled.p`
  color: #707070;
  font-size: 1,4rem;
  margin-bottom: 1rem;
  position: relative;
`
export const BolinhaArea = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`
export const Bolinha = styled.span`
  display: block;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: #dc3545;
`

export const IntroducaoPessoal = styled.div`
  margin: 30px 0;
  grid-column: 1/-1;
  text-align: center;
  color: white;
`
export const FotoPessoa = styled.img`
  animation: ${animacaoFoto} .2s ease-in-out forwards;
  cursor: pointer;
  grid-row: 2;
  max-width: 100%;
  border-radius: 4px;
  height: 400px;
  filter: blur(0);
  &:hover{
    transition: .5s ease-in;
    filter: blur(1px);
  }

  @media (max-width: 1025px) {
    grid-column: 1/-1;
    justify-self: center;
    width: 600px;
    height: 500px;
  }
`

export const Conteudo = styled.div`
  animation: ${animacaoTexto} .6s ease-in-out forwards;
  display: grid;
  grid-column: 2/-1;
  color: #707070;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 1025px) {
    grid-column: 1/-1;
  }
`
export const SobreMin = styled.div`
  display: grid;
  grid-column: 1/-1;
  grid-template-columns: 1fr 1fr;
`
export const TituloSobre = styled.h1`
  font-size: 2.3rem;
  color: white;
  grid-column: 1/-1;
  &:after{
    background-color: #ff5d56;
    height: 6px;
    width: 60px;
    margin: 20px 0;
    content: '';
    display: block;
    border-radius: 5px;
  }
`
export const TextoSobre = styled.p`
  font-size: 1.3rem;
  grid-row: 2;
  grid-column: 1/-1;
`
export const ConteudoInfo = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column: 1/-1;
  gap: 15px;
  align-items: center;
`
export const InfoExpecifica = styled.p`
  color: #dc3545;
  display: inline-block;
  padding-right: 15px;
  font-size: 1.2rem;
`

export const ClasseExpecifica = styled.i`
  font-size: 2rem;
  padding-right: 15px;
`

