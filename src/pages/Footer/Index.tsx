import React from "react";
import RedeSocialArea from "../../Components/RedeSocialArea";
import { 
  Container,
  IntroducaoFooter,
  Titulo,
  Introducao,
  BolinhaArea,
  Bolinha,
  ContainerNav,
  ListaSociais,
  FotterComercial
} from "./styled";



export const Footer = () =>{
  return(
    <Container>
      <IntroducaoFooter>
        <Titulo>Gustavo de Castro</Titulo>
        <Introducao>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Delectus error non quia impedit velit eaque corrupti facere vitae voluptatibus facilis.</Introducao>
        <BolinhaArea>
          <Bolinha></Bolinha>
          <Bolinha></Bolinha>
          <Bolinha></Bolinha>
        </BolinhaArea>
      </IntroducaoFooter>
      <ContainerNav>
        <ListaSociais>
          <RedeSocialArea classIcon={"fa-brands fa-facebook-f"} LinkRede={"https://www.facebook.com/gustavo.decastro.92"}/>
          <RedeSocialArea classIcon={"fa-brands fa-twitter"} LinkRede={"https://twitter.com/Gustavo78112841"}/>
          <RedeSocialArea classIcon={"fa-brands fa-linkedin-in"} LinkRede={"https://www.linkedin.com/in/gustavo-castro-9a2590196/"}/>
          <RedeSocialArea classIcon={"fa-brands fa-instagram"} LinkRede={"https://www.instagram.com/gustavocastroosp/"}/>
          <RedeSocialArea classIcon={"fa-brands fa-github-alt"} LinkRede={"https://github.com/gustavocastro044"}/>
        </ListaSociais>
      </ContainerNav>
      <FotterComercial>Todos os direitos reservados - Gustavo de Castro &copy; - 2023 </FotterComercial>
    </Container>
  )

}

export default Footer