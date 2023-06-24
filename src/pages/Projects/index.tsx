import React,{useState} from 'react'

import { 
  Container,
  IntroducaoProjetos,
  Titulo,
  Introducao,
  BolinhaArea,
  Bolinha,
  OpcoesLista,
  ListaOpcoes,
  AreaProjetos,
  AreaOpcoes,
  ListaProjetos,
  ProjetosExpecificos,
  ImagemProjeto,
  LinkProjects
} from './styled'


export const Projects = () =>{
  const [projetoAtivo, setProjetoAtivo] = useState<any>("0")

  const GuardarNumeroProjeto = (e :React.MouseEvent<HTMLElement>) =>{
    if(e.currentTarget.getAttribute('id') === "0"){
      setProjetoAtivo("0")
    }else{
      setProjetoAtivo(e.currentTarget.getAttribute('id'))
      
    }
  }


  return(
    <Container>
      <IntroducaoProjetos>
        <Titulo>Projetos</Titulo>
        <Introducao>Professional Profile - there is All About me</Introducao>
        <BolinhaArea>
          <Bolinha></Bolinha>
          <Bolinha></Bolinha>
          <Bolinha></Bolinha>
        </BolinhaArea>
      </IntroducaoProjetos>
      <AreaOpcoes>
        <ListaOpcoes>
          <OpcoesLista onClick={GuardarNumeroProjeto} active ={projetoAtivo} id='0' >Todos</OpcoesLista>
          <OpcoesLista onClick={GuardarNumeroProjeto} active ={projetoAtivo} id='2'>Sistemas</OpcoesLista>
          <OpcoesLista onClick={GuardarNumeroProjeto} active ={projetoAtivo} id='3'>Comercios</OpcoesLista>
          <OpcoesLista onClick={GuardarNumeroProjeto} active ={projetoAtivo} id='4'>WebSites</OpcoesLista>
        </ListaOpcoes>
        <AreaProjetos>
          <ListaProjetos>
            <ProjetosExpecificos active ={projetoAtivo} id='3'><ImagemProjeto src='../assets/DevsFood.png' alt='WebSite para comercio gastronomico'/></ProjetosExpecificos>
            <ProjetosExpecificos active ={projetoAtivo} id='2'><ImagemProjeto src='../assets/Financas.png'  alt='Sistema de finanças'/></ProjetosExpecificos>
            <ProjetosExpecificos active ={projetoAtivo} id='4'><ImagemProjeto src='../assets/Portifolio.png' alt='WebSite para introdução pessoal'/></ProjetosExpecificos>
            <ProjetosExpecificos active ={projetoAtivo} id='4'><ImagemProjeto src='../assets/Medicenter.png' alt='estrutura de um website'/></ProjetosExpecificos>
            <ProjetosExpecificos active ={projetoAtivo} id='0'><ImagemProjeto src='../assets/EmBreve.png' alt='Em breve'/></ProjetosExpecificos>
            <ProjetosExpecificos active ={projetoAtivo} id='1'><ImagemProjeto src='../assets/EmBreve.png' alt='Em breve'/></ProjetosExpecificos>
            <ProjetosExpecificos active ={projetoAtivo} id='1'><ImagemProjeto src='../assets/EmBreve.png' alt='Em breve'/></ProjetosExpecificos>
            <ProjetosExpecificos active ={projetoAtivo} id='1'><ImagemProjeto src='../assets/EmBreve.png' alt='Em breve'/></ProjetosExpecificos>
          </ListaProjetos>
        </AreaProjetos>
      </AreaOpcoes>
      <LinkProjects>Mais sobre projetos</LinkProjects>
    </Container>
  )
}


export default Projects