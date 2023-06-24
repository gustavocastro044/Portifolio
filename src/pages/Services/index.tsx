import React from 'react'
import { Container,
  AreaIntroducaoServicos,
  Titulo,
  IntroducaoServicos,
  BolinhaArea,
  Bolinha,
  MeusServicos,
  Lista,
  ListaItem,
  ClasseItem,
  TituloItem,
  TextoItem
} from './styled'



export const Services = () =>{
  return(
    <Container>
      <AreaIntroducaoServicos>
        <Titulo>Serviços</Titulo>
        <IntroducaoServicos>Perfil Profissional - Serviços que posso oferecer</IntroducaoServicos>
        <BolinhaArea>
          <Bolinha></Bolinha>
          <Bolinha></Bolinha>
          <Bolinha></Bolinha>
          <Bolinha></Bolinha>
        </BolinhaArea>
      </AreaIntroducaoServicos>
      <MeusServicos>
        <Lista>
            <ListaItem>
              <ClasseItem className='fa-sharp fa-solid fa-pen-to-square'/>
              <TituloItem>WebDesign</TituloItem>
              <TextoItem>Criação de designs bem elaborados solicitados por clientes.</TextoItem>
            </ListaItem>

            <ListaItem>
              <ClasseItem className='fa-solid fa-medal'/>
              <TituloItem>Design Criativo</TituloItem>
              <TextoItem>Criação de designs próprio caso seja necesario </TextoItem>
            </ListaItem>
        
            <ListaItem>
              <ClasseItem className='fa-solid fa-globe'/>
              <TituloItem>WebDeveloper</TituloItem>
              <TextoItem>Criação de funcionalidades de diversos tipos necessitadas por clientes.</TextoItem>
            </ListaItem>
        
          <ListaItem>
            <ClasseItem className='fa-solid fa-layer-group'/>
            <TituloItem>Codigo Limpo</TituloItem>
            <TextoItem>Sempre tentar codificar da melhor maneira possivel com Legibilidade e formatação adequada em cada projeto.</TextoItem>
          </ListaItem>

        </Lista>
      </MeusServicos>
      
    </Container>
  )
}

export default Services