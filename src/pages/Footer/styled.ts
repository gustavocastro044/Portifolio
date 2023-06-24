import styled from "styled-components";

export const Container = styled.footer`
  margin: 30px 0;
  grid-column: 1/-1;
  text-align: center;
  color: white;
  padding: 30px;
  display: grid;
  justify-content: center;
  gap: 30px;
`
export const IntroducaoFooter = styled.div`

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

export const ContainerNav = styled.nav`

`
export const ListaSociais = styled.ul`
  display: flex;
  color: #f7f7f7;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  gap: 30px;
  &:before{
    content: '';
    height: 5px;
    position: absolute;
    width: 200px;
    bottom: -30px;
    background-color: #222;
  }
`
export const FotterComercial = styled.p`
  text-align: center;
  color: #ffff;
  margin: 50px auto;

`