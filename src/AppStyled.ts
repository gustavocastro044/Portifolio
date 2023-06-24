import styled, {keyframes} from 'styled-components';

const inicializar = keyframes`  
  from{
    opacity:0;
    transform: translate3d(0, -60px, 0);
  }
  to{
    opacity:1;
    transform: translate3d(0, 0, 0)
  }
`;

const pisca = keyframes`  
  from{
    opacity:1;
    
  }
  to{
    opacity:0;
  }
`;


export const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  background-color: black;
`
export const Header = styled.div`
  position: fixed;
  top: 0;
  width: 1300px;
  height: 80px;
  background-color: #000;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 9999;
  @media (max-width: 1025px) {
    width: 100%;
  }
  @media (max-width: 986px) {
    width: 100%;
  }
`

export const PageBody = styled.section`
  animation: ${inicializar} .7s forwards;
  background-color: black;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-around;
  align-items: center;
  gap: 100px;
  padding: 60px 60px 0px 60px;
  @media (max-width: 1025px) {
    background-image: url(/assets/FotoCinza.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right;
  }
`

export const ListaArea = styled.nav`

`
export const PageBodyHome = styled.div`
  align-self: start;
  display: grid;
  gap: 50px;
  padding-top: 90px;
`


export const Lista = styled.ul <{active?:boolean}>`
  gap: 30px;
  align-items: center;
  display: flex;
  @media (max-width: 1025px) {
    display: ${props => props.active ? 'grid' : "none"};
    background: ${props => props.active ? ' rgba(46,46,46, 0.724)' : "transparent"};
    position: ${props => props.active ? 'absolute' : ""};
    font-weight: bold;
    border-radius: 10px;
    padding: 25px;
    right: 50px;
    top: 90px;
    list-style-type: none;
    align-items: center;
    justify-content: center;
    animation: ${inicializar} .7s ease-in-out forwards;
  }
  
`

export const ListaResumida = styled.i`
  @media (max-width: 1025px) {
    color: #f7f7f7;
    font-size: 2rem;
    cursor: pointer;
  }
  
`


export const ListaItem = styled.li`
  
`

export const ListaRef = styled.a`
  width: 0px;
  width: 0px;
  color: white;
  font-size: 1,3rem;
  text-decoration: none;
  cursor: pointer;
  &:after{
    content: "";
    width: 0px;
    height: 0px;
    display: block;
    border-bottom: 4px solid transparent;
    transition: .9s;
  }
  &:hover:after{
    width: 100%;
    height: 0;
    padding: 0;
    border-bottom: 4px solid #dc3545;
  }
`

export const Titulo = styled.h2`
  font-family: 'Poppins';
  font-weight: 600px;
  color: #f7f7f7;
`

export const Resumo = styled.h2`
    font-family: 'Poppins';
    font-weight: 600px;
    color: #f7f7f7;
    white-space: nowrap;
    &:after{
        content: '|';
        margin-left: 5px;
        opacity: 1;
        animation: ${pisca} .5s infinite;
    }

`
export const Introducao = styled.p`
    font-family: 'Poppins';
    font-weight: 200px;
    color: #f7f7f7;
    width: 50ch;
  @media (max-width: 1170px) {
    width: 30ch;
  }
  @media (max-width: 670px) {
    width: 30ch;
  }
`

export const DownloadItem = styled.a`
  cursor: pointer;
  justify-self: start;
  color: #f7f7f7;
  padding: 15px 40px;
  border-radius: 5px;
  border: 2px solid white;
  text-decoration: none;
`
export const Foto = styled.img`
width: 500px;
height: 600px;
@media (max-width: 1025px) {
    display: none;
  }
`
export const PrimeiroNome = styled.h1`
  color: #ff5d56;
  font-size: 2.5rem;
  font-family: 'Berkshire Swash', cursive;
`
export const Sobrenome = styled.span`
  color: white;
`

export const PageBodyAbout = styled.section`
  background-color: #111;
  color: white;
`
export const PageBodyServices = styled.section`
  background-color: #151515;
  margin-top: -30px;
  padding: 60px;
`

export const PageBodyprojects = styled.section`
  padding-top: 10px;
`
export const PageBodyresume = styled.section`
  padding-top: 60px;
`
export const PageBodyfooter = styled.section`
  padding-top: 30px;
`







