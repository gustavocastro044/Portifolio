import React from "react";
import { ProjetosExpecificos,
ImagemProjeto
} from "./styled";

type Props = {
  active : any
  id : string
  imagem : string
  linkProjeto? : string
}

export const ProjetoExpecifico = ({linkProjeto, active, id, imagem}: Props) =>{
  const handleClick = () =>{
    if(linkProjeto){
      window.open(linkProjeto, '_blank');
    }  
  }

  return(
    <ProjetosExpecificos onClick={handleClick} active={active} id={id}><ImagemProjeto src ={imagem}/></ProjetosExpecificos>
  )
}

export default ProjetoExpecifico