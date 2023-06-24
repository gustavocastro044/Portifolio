import styled, {keyframes} from "styled-components"

const animacaoProjetos = keyframes`  
  from{
    transition: .2s;
    transform: translate3d(0, -30px, 0);
  }
  to{
    transform: translate3d(0, 0, 0)
  }
`;


export const ProjetosExpecificos = styled.li<{ active?:string, id?:string }>`
display: ${props => props.active === props.id || props.active === "0"  ? 'block' : 'none'};
list-style-type: none;
max-width: 100%;
height: 100%;
animation: ${animacaoProjetos} .6s ease-in-out forwards;
`

export const ImagemProjeto = styled.img`
max-width: 100%;
height: 100%;
border-radius: 4px;
cursor: pointer;
`