import styled from "styled-components";



export const Container = styled.section`
  margin: 30px 0;
  grid-column: 1/-1;
  text-align: center;
  color: white;
  padding: 30px;
  display: grid;
  justify-content: center;
  gap: 30px;
  background-color: #151515;
`
export const IntroducaoProjetos = styled.div`

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
export const AreaOpcoes = styled.div`

`
export const ListaOpcoes = styled.ul`
  display: flex;
  justify-content: center;
  gap: 30px;
`
export const OpcoesLista = styled.li<{ active?:string, id?:string }>`
list-style-type: none;
cursor: pointer;
font-family: 'Poppins';
background-color: ${props => props.active === props.id ? '#dc3545' : '#222'};
border: 1px solid #333;
padding: 6px 20px;
color: ${props => props.active === props.id ? 'white' : '#707070'};
`
export const AreaProjetos = styled.div`

`
export const ListaProjetos = styled.ul`
display: grid;
margin-top: 60px;
gap: 20px;
justify-content: center;
grid-template-columns: repeat(4, 1fr);
`
export const LinkProjects = styled.a`
cursor: pointer;
background-color: #222;
text-decoration: none;
justify-self: center;
padding: 20px 40px;
border: 1px solid #333;
color: #707070;
`
