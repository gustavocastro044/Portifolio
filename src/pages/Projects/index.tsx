import React,{useState} from 'react'
import ProjetoExpecifico from '../../Components/ProjetoExpecifico'

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
  const handleClick = () =>{
    const linkrepositorio = "https://github.com/gustavocastro044?tab=repositories"
    window.open(linkrepositorio, '_blank')
  }


  return(
    <Container>
      <IntroducaoProjetos>
        <Titulo>Projetos</Titulo>
        <Introducao>Perfil Profissional - Principais projetos</Introducao>
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
            <ProjetoExpecifico linkProjeto='https://github.com/gustavocastro044/Controle-financas' active ={projetoAtivo} id='2' imagem ={'./assets/financas.png'} />
            <ProjetoExpecifico linkProjeto='https://github.com/gustavocastro044/Portifolio' active ={projetoAtivo} id='4' imagem ={'./assets/portifolio.png'} />
            <ProjetoExpecifico linkProjeto='https://github.com/gustavocastro044/Medicenter' active ={projetoAtivo} id='4' imagem ={'./assets/medicenter.png'} />
            <ProjetoExpecifico linkProjeto='https://github.com/gustavocastro044/DevsFood' active ={projetoAtivo} id='3' imagem ={'./assets/devsfood.png'} />
            <ProjetoExpecifico  active ={projetoAtivo} id='0' imagem ={'./assets/embreve.png'} />
            <ProjetoExpecifico active ={projetoAtivo} id='1' imagem ={'./assets/embreve.png'} />
            <ProjetoExpecifico active ={projetoAtivo} id='1' imagem ={'./assets/embreve.png'} />
            <ProjetoExpecifico active ={projetoAtivo} id='1' imagem ={'./assets/embreve.png'} />
            
          </ListaProjetos>
        </AreaProjetos>
      </AreaOpcoes>
      <LinkProjects onClick={handleClick}>Todos projetos</LinkProjects>
    </Container>
  )
}


export default Projects