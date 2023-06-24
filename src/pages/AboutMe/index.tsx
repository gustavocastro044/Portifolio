import React from 'react'
import { Container,
  Titulo,
  Introducao,
  BolinhaArea,
  Bolinha,
  IntroducaoPessoal,
  FotoPessoa,
  Conteudo,
  SobreMin,
  TituloSobre,
  TextoSobre,
  ConteudoInfo,
  InfoExpecifica,
  ClasseExpecifica
} from './styled'

export const AboutMe = () =>{
  return(
    <Container>
      <IntroducaoPessoal>
        <Titulo>Sobre mim</Titulo>
        <Introducao>Perfil Profissional - Resumo sobre mim</Introducao>
        <BolinhaArea>
          <Bolinha></Bolinha>
          <Bolinha></Bolinha>
          <Bolinha></Bolinha>
        </BolinhaArea>
      </IntroducaoPessoal>
      <FotoPessoa src='../assets/FotoCinza.png'/>
      <Conteudo>
        <SobreMin>
          <TituloSobre>Sou Gustavo</TituloSobre>
          <TextoSobre>Tenho 23 anos e sou formado em Analise e Desenvolvimento de Sistemas.
            Atualmente não trabalho e não tenho experiencias profissionais direcionadas a programação!
            <br/>
            <br/>
            Sou uma pessoa que sempre busco conhecimento sobre diversas coisas, atualmente muito focado
            em estudar e apreder cada vez mais sobre o mundo do desenvolvimento web, valorizo muito o trabalho
            e a comunicação em equipe pois acredito que o trabalho em conjunto sempre é mais efetivo. 
            Sou uma pessoa que está sempre disposta a novos desafios e empenhada a buscar o sucesso
            nessa area que me identifiquei bastante.

            </TextoSobre>
        </SobreMin>
        <ConteudoInfo>
          <InfoExpecifica><ClasseExpecifica className='fa-solid fa-calendar-days'/>Data de Nascimento: 13/09/1999</InfoExpecifica>
          <InfoExpecifica><ClasseExpecifica className='fa-solid fa-location-dot'/>Endereço: Travessa Carolina Ferni São Paulo </InfoExpecifica>
          <InfoExpecifica><ClasseExpecifica className='fa-brands fa-whatsapp'/>Telefone:(11) 994330340</InfoExpecifica>
          <InfoExpecifica><ClasseExpecifica className='fa-solid fa-envelope'/>Email: gustavo.castro044@gmail.com</InfoExpecifica>

        </ConteudoInfo>
      </Conteudo>
    </Container>
  )
}

export default AboutMe