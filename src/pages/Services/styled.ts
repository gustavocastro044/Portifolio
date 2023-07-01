import styled from "styled-components";


export const Container = styled.div`
`
export const AreaIntroducaoServicos = styled.div`
  margin: 30px 0;
  grid-column: 1/-1;
  text-align: center;
  color: white;
`
export const Titulo = styled.h1`
  font-size: 2.5rem;
  color: #ff5d56;
  margin-bottom: 15px;
  font-family: 'Berkshire Swash', cursive;
`
export const IntroducaoServicos = styled.p`
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
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #dc3545;
`

export const MeusServicos = styled.div`
  color: white;
  padding: 60px;
  @media (max-width: 360px) {
    padding: 0px;
    width: 250px;
  }
`
export const Lista = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: center;
`
export const ListaItem = styled.li`
  border-radius: 6px;
  position: relative;
  padding: 10px;
  display: grid;
  gap: 30px;
  text-align: center;
  max-width: 300px;
  align-content: center;
  height: 300px;
  background-color: #222;
  &:before{
    content: "";
    transition: .5s ease-in-out;
    border-radius: 6px;
    width: 0px;
    height: 0px;
    position: absolute;
    top: -2px;
    right: -2px;
    border-top: 2px solid transparent;
    border-right: 2px solid transparent;
  }
  &:after{
    content: "";
    transition: .5s ease-in-out;
    border-radius: 6px;
    width: 0px;
    height: 0px;
    position: absolute;
    bottom: -2px;
    left: -2px;
    border-bottom: 2px solid transparent;
    border-left: 2px solid transparent;
  }
  &:hover:before{
    width: 100%;
    height: 100%;
    border-top: 2px solid red;
    border-right: 2px solid red;
  }
  &:hover:after{
    width: 100%;
    height: 100%;
    border-bottom: 2px solid red;
    border-left: 2px solid red;
  }
  @media (max-width: 360px) {
    width: 300px;
  }
`
export const ClasseItem = styled.i`
font-size: 2.7rem;
color: #dc3545;
`
export const TituloItem = styled.h3`
color: white;
font-size: 1.6rem;
font-family: 'poppins';
font-weight: 500;
`
export const TextoItem = styled.p`
  color: #707070;
  font-size: 1.1rem;
`