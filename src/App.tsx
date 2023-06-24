import React, { useEffect, useState, useRef }  from 'react'
import AboutMe from './pages/AboutMe';
import Services from './pages/Services';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Footer from './pages/Footer/Index';
import { Container,
  Header,
  Lista,
  ListaItem,
  ListaRef,
  ListaArea,
  PageBody,
  Titulo,
  Introducao,
  Resumo,
  DownloadItem,
  Foto,
  PrimeiroNome,
  Sobrenome,
  PageBodyAbout,
  PageBodyHome,
  ListaResumida,
  PageBodyServices,
  PageBodyprojects,
  PageBodyresume,
  PageBodyfooter
} from './AppStyled';


const App = () => {
  const inicioRef = useRef<any>(null)
  const sobreRef = useRef<any>(null)
  const servicosRef = useRef<any>(null)
  const resumoRef = useRef<any>(null)
  const portifolioRef = useRef<any>(null)
  const contatoRef = useRef<any>(null)
  const [titulo, setTitulo] = useState('D')
  const [active, setActive] = useState(false)
  const ativaMenu : any = useRef(null)
  

useEffect(()=>{
    if(titulo === 'D'){
    ativaLetra(titulo,setTitulo)
    }if(titulo === 'Desenvolvedor Front-End      '){
      setTitulo('D')
    }
},[titulo])

  const ativaLetra = (titulo: string, setTitulo: any) =>{
    titulo = 'Desenvolvedor Front-End      '
    const arrTitulo = titulo.split('')
    titulo = ''
    arrTitulo.forEach((Letra : string, i : number)=>{
      setTimeout(()=>{
        setTitulo(titulo += Letra)
      },90 * i)
    })   
  }

  const BaixarCurriculo = () =>{
    const fileUrl = './assets/curriculo/GustavoCV.pdf'
    window.open(fileUrl, '_blank')
  }

  const ativarMenu = () =>{
    console.log(ativaMenu.current.className)
    if(ativaMenu.current.className === "sc-kAkpmW jiemLN fa-solid fa-bars" || ativaMenu.current.className === "sc-kYxDKI cNTnyC fa-solid fa-bars" ){
      ativaMenu.current.className = "sc-kYxDKI cNTnyC fa-solid fa-x"
      setActive(true)
      
    }else{
      ativaMenu.current.className = "sc-kYxDKI cNTnyC fa-solid fa-bars"
      setActive(false)
    }
    
    
  }
  return (
    <Container>
        <Header>
          <PrimeiroNome>Gustavo <Sobrenome>de Castro</Sobrenome></PrimeiroNome>
        <ListaArea>
          <Lista active={active}>
            <ListaItem><ListaRef onClick={() => inicioRef.current.scrollIntoView({ behavior: "smooth" })}>Inicio</ListaRef></ListaItem>
            <ListaItem><ListaRef onClick={() => sobreRef.current.scrollIntoView({ behavior: "smooth" })}>Sobre</ListaRef></ListaItem>
            <ListaItem><ListaRef onClick={() => servicosRef.current.scrollIntoView({ behavior: "smooth" })}>Serviços</ListaRef></ListaItem>
            <ListaItem><ListaRef onClick={() => resumoRef.current.scrollIntoView({ behavior: "smooth" })}>Resumo</ListaRef></ListaItem>
            <ListaItem><ListaRef onClick={() => portifolioRef.current.scrollIntoView({ behavior: "smooth" })}>Projetos</ListaRef></ListaItem>
            <ListaItem><ListaRef onClick={() => contatoRef.current.scrollIntoView({ behavior: "smooth" })}>Contato</ListaRef></ListaItem>
          </Lista>
          <ListaResumida onClick={ativarMenu} ref={ativaMenu} className="fa-solid fa-bars"/>
        </ListaArea>
        </Header>
        <PageBody >
          <PageBodyHome ref={inicioRef} >
            <Titulo>Olá, eu sou Gustavo</Titulo>
            <Resumo>{titulo}</Resumo>
            <Introducao className="digitando" >
            Tenho 23 anos e busco uma oportunidade profissional na área de desenvolvimento web.
            Sou formado em Análise e Desenvolvimento de Sistemas e estou focado e aberto a 
            descobrir coisas novas, trabalhando diariamente em meus projetos pessoais, afim de 
            conseguir minha primeira oportunidade no mercado.
            </Introducao>
            <DownloadItem  onClick={BaixarCurriculo}>Baixar CV</DownloadItem>
          </PageBodyHome>
          <Foto src="./assets/fotocinza.png" alt='Gustavo foto'/>
        </PageBody>
        <PageBodyAbout ref={sobreRef} >
            <AboutMe/>
        </PageBodyAbout>
        <PageBodyServices ref={servicosRef}>
          <Services/>
        </PageBodyServices>
        <PageBodyresume ref={resumoRef}>
          <Resume/>
        </PageBodyresume>
        <PageBodyprojects ref={portifolioRef}>
          <Projects/>
        </PageBodyprojects>
        <PageBodyfooter ref={contatoRef}>
          <Footer/>
        </PageBodyfooter>
    </Container>
  );
}

export default App;
