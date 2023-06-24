import React, {useState, useEffect} from 'react'
import { 
  Container,
  IntroducaoResumo,
  Titulo,
  Introducao,
  BolinhaArea,
  Bolinha,
  AreaResumo,
  TituloExperiencia,
  ClasseExperiencia,
  Resumos,
  ResumoExpecifico,
  DataResumo,
  TituloResumo,
  ResumoExperiencia,
  Lista,
  ItemResumo,
  TituloEducacao,
  EducacaoArea,
  EducacaoExpecifica,
  ItemExperiencia,
  DataEducacao,
  NomeEducacao,
  ResumoEducacao,
  ClasseExpecifica,
  MeusCursos,
  MinhasSkills,
  TituloSkills,
  ClasseSkills,
  SkillExpecifica,
  NomeSkill,
  ListaEstrelas,
  ListaEstrelaItem,
  ClasseEstrela,
  CuriosidadesArea,
  TituloCuriosidades,
  ClasseCuriosidades,
  ListaCuriosidades,
  CuriosidadeExpecifica,
  ClasseFunFacts,
  DataCuriosidade,
  TextoCuriosidade
} from './styled'



export const Resume = () =>{
  const [bolinhaExperiencia, setBolinhaExperiencia] = useState<any>('')
  const [bolinhaEducacao, setBolinhaEducacao] = useState<any>('')
  const [activeExperiencia,  setActiveExperiencia] = useState<string>("0")
  const [activeEducacao,  setActiveEducacao] = useState<string>("0")

  useEffect(()=>{
    if(bolinhaExperiencia === "0"){
      setActiveExperiencia("0")
    }if(bolinhaExperiencia === "1"){
      setActiveExperiencia("1")
    }if(bolinhaExperiencia === "2"){
      setActiveExperiencia("2")
    }if(bolinhaExperiencia === "3"){
      setActiveExperiencia("3")
    }
  },[bolinhaExperiencia])

  useEffect(()=>{
    if(bolinhaEducacao === "0"){
      setActiveEducacao("0")
    }if(bolinhaEducacao === "1"){
      setActiveEducacao("1")
    }
  },[bolinhaEducacao])



  const setBolinhaEx = (e :React.MouseEvent<HTMLElement>) =>{
    setBolinhaExperiencia(e.currentTarget.getAttribute('id'))
    
  }
  const setBolinhaEd = (e :React.MouseEvent<HTMLElement>) =>{
    setBolinhaEducacao(e.currentTarget.getAttribute('id'))
    
  }

  return(
    <Container>
      <IntroducaoResumo>
        <Titulo>Resumo</Titulo>
        <Introducao>Perfil Profissional - Resumo profissional e academico</Introducao>
        <BolinhaArea>
          <Bolinha></Bolinha>
          <Bolinha></Bolinha>
          <Bolinha></Bolinha>
        </BolinhaArea>
      </IntroducaoResumo>
      <AreaResumo>
        <TituloExperiencia><ClasseExperiencia className='fa-solid fa-handshake'/>EXPERIENCIAS</TituloExperiencia>
        <Resumos>
          <ResumoExpecifico id = "0" active={activeExperiencia}>
            <DataResumo>2018-2019</DataResumo>
            <TituloResumo>Eletricista Veicular - Metropole Paulista S/A</TituloResumo>
            <ResumoExperiencia>Responsavel pela manutenção eletrica de veiculos da empresa.</ResumoExperiencia>
          </ResumoExpecifico>
          <ResumoExpecifico id = "1" active={activeExperiencia}>
            <DataResumo>2019-2020</DataResumo>
            <TituloResumo>Contínuo - MRD</TituloResumo>
            <ResumoExperiencia>Responsavel por todos processos basicos de vendas da empresa. </ResumoExperiencia>
          </ResumoExpecifico>
          <ResumoExpecifico id = "2" active={activeExperiencia}>
            <DataResumo>2020-2022</DataResumo>
            <TituloResumo>Auxiliar de escritório - Allnetsys</TituloResumo>
            <ResumoExperiencia>Responsavel por todos processos basicos de vendas da empresa e organização de estoque.</ResumoExperiencia>
          </ResumoExpecifico>
          <ResumoExpecifico id = "3" active={activeExperiencia}>
            <DataResumo>2022-2023</DataResumo>
            <TituloResumo>Assistente Administrativo - Rede7</TituloResumo>
            <ResumoExperiencia>Responsavel por administrar e avaliar diversas informações de venda de cartões de credito.</ResumoExperiencia>
          </ResumoExpecifico>
          <Lista>
            <ItemResumo
              id = "0" 
              active={activeExperiencia}
              onClick={setBolinhaEx}>
            <ClasseExpecifica className='fa-sharp fa-solid fa-circle'/>
            </ItemResumo>
            
            <ItemResumo
            id = "1"
            active={activeExperiencia}
            onClick={setBolinhaEx}>
            <ClasseExpecifica className='fa-sharp fa-solid fa-circle'/>
            </ItemResumo>

            <ItemResumo
            id = "2"
            active={activeExperiencia}
            onClick={setBolinhaEx}>
            <ClasseExpecifica  
            className='fa-sharp fa-solid fa-circle'/>
            </ItemResumo>

            <ItemResumo
            id = "3"
            active={activeExperiencia}
            onClick={setBolinhaEx}>
            <ClasseExpecifica  
            className='fa-sharp fa-solid fa-circle'/>
            </ItemResumo>

          </Lista>
        </Resumos>
          <TituloEducacao><ClasseExpecifica className='fa-solid fa-book' />EDUCAÇÃO</TituloEducacao>
          <EducacaoArea>
            <EducacaoExpecifica id = "0" active={activeEducacao}>
              <DataEducacao>2020 - 2022</DataEducacao>
              <NomeEducacao>Análise e desenvolvimento de sistemas - Faculdade Impacta</NomeEducacao>
              <ResumoEducacao>Graduação de nível tecnológico que me deixou apto a projetar, testar e gerenciar sistemas.</ResumoEducacao>
            </EducacaoExpecifica>

            <EducacaoExpecifica id = "1" active={activeEducacao}>
              <DataEducacao>2023 - 2023</DataEducacao>
              <NomeEducacao>Curso - D7web</NomeEducacao>
              <ResumoEducacao>Curso que me ajudou a me aprofundar mais no mundo de desenvolvimentro web.</ResumoEducacao>
            </EducacaoExpecifica>
            <Lista>
              <ItemExperiencia
              id = "0" 
              active={activeEducacao}
              onClick={setBolinhaEd}>
                <ClasseExpecifica className='fa-sharp fa-solid fa-circle'/>
              </ItemExperiencia>

              <ItemExperiencia
              id = "1"
              active={activeEducacao}
              onClick={setBolinhaEd}>
              <ClasseExpecifica className='fa-sharp fa-solid fa-circle'/>
              </ItemExperiencia>

          </Lista>
          </EducacaoArea>
      </AreaResumo>
      <MeusCursos>
        <MinhasSkills>
          <TituloSkills><ClasseSkills className='fa-sharp fa-regular fa-star'/>Principais Conhecimentos</TituloSkills>
          <SkillExpecifica>
            <NomeSkill>HTML 5</NomeSkill>
            <ListaEstrelas>
              <ListaEstrelaItem><ClasseEstrela className="fa-sharp fa-solid fa-star"/></ListaEstrelaItem>
              <ListaEstrelaItem><ClasseEstrela className="fa-sharp fa-solid fa-star"/></ListaEstrelaItem>
              <ListaEstrelaItem><ClasseEstrela className="fa-sharp fa-solid fa-star"/></ListaEstrelaItem>
              <ListaEstrelaItem><ClasseEstrela className="fa-sharp fa-solid fa-star"/></ListaEstrelaItem>
              <ListaEstrelaItem><ClasseEstrela className='fa-sharp fa-regular fa-star'/></ListaEstrelaItem>
            </ListaEstrelas>
          </SkillExpecifica>
          <SkillExpecifica>
            <NomeSkill>CSS 3</NomeSkill>
            <ListaEstrelas>
              <ListaEstrelaItem><ClasseEstrela className="fa-sharp fa-solid fa-star"/></ListaEstrelaItem>
              <ListaEstrelaItem><ClasseEstrela className="fa-sharp fa-solid fa-star"/></ListaEstrelaItem>
              <ListaEstrelaItem><ClasseEstrela className="fa-sharp fa-solid fa-star"/></ListaEstrelaItem>
              <ListaEstrelaItem><ClasseEstrela className="fa-sharp fa-solid fa-star"/></ListaEstrelaItem>
              <ListaEstrelaItem><ClasseEstrela className='fa-sharp fa-regular fa-star'/></ListaEstrelaItem>
            </ListaEstrelas>
          </SkillExpecifica>
          <SkillExpecifica>
            <NomeSkill>REACT JS</NomeSkill>
            <ListaEstrelas>
              <ListaEstrelaItem><ClasseEstrela className="fa-sharp fa-solid fa-star"/></ListaEstrelaItem>
              <ListaEstrelaItem><ClasseEstrela className="fa-sharp fa-solid fa-star"/></ListaEstrelaItem>
              <ListaEstrelaItem><ClasseEstrela className="fa-sharp fa-solid fa-star"/></ListaEstrelaItem>
              <ListaEstrelaItem><ClasseEstrela className="fa-sharp fa-solid fa-star"/></ListaEstrelaItem>
              <ListaEstrelaItem><ClasseEstrela className='fa-sharp fa-regular fa-star'/></ListaEstrelaItem>
            </ListaEstrelas>
          </SkillExpecifica>
          <SkillExpecifica>
            <NomeSkill>JAVASCRIPT</NomeSkill>
            <ListaEstrelas>
              <ListaEstrelaItem><ClasseEstrela className="fa-sharp fa-solid fa-star"/></ListaEstrelaItem>
              <ListaEstrelaItem><ClasseEstrela className="fa-sharp fa-solid fa-star"/></ListaEstrelaItem>
              <ListaEstrelaItem><ClasseEstrela className="fa-sharp fa-solid fa-star"/></ListaEstrelaItem>
              <ListaEstrelaItem><ClasseEstrela className="fa-sharp fa-solid fa-star"/></ListaEstrelaItem>
              <ListaEstrelaItem><ClasseEstrela className='fa-sharp fa-regular fa-star'/></ListaEstrelaItem>
            </ListaEstrelas>
          </SkillExpecifica>
          <SkillExpecifica>
            <NomeSkill>TYPESCRIPT</NomeSkill>
            <ListaEstrelas>
              <ListaEstrelaItem><ClasseEstrela className="fa-sharp fa-solid fa-star"/></ListaEstrelaItem>
              <ListaEstrelaItem><ClasseEstrela className="fa-sharp fa-solid fa-star"/></ListaEstrelaItem>
              <ListaEstrelaItem><ClasseEstrela className="fa-sharp fa-solid fa-star"/></ListaEstrelaItem>
              <ListaEstrelaItem><ClasseEstrela className="fa-sharp fa-solid fa-star"/></ListaEstrelaItem>
              <ListaEstrelaItem><ClasseEstrela className='fa-sharp fa-regular fa-star'/></ListaEstrelaItem>
            </ListaEstrelas>
          </SkillExpecifica>
          <SkillExpecifica>
            <NomeSkill>GIT HUB</NomeSkill>
            <ListaEstrelas>
              <ListaEstrelaItem><ClasseEstrela className="fa-sharp fa-solid fa-star"/></ListaEstrelaItem>
              <ListaEstrelaItem><ClasseEstrela className="fa-sharp fa-solid fa-star"/></ListaEstrelaItem>
              <ListaEstrelaItem><ClasseEstrela className="fa-sharp fa-solid fa-star"/></ListaEstrelaItem>
              <ListaEstrelaItem><ClasseEstrela className="fa-sharp fa-solid fa-star"/></ListaEstrelaItem>
              <ListaEstrelaItem><ClasseEstrela className='fa-sharp fa-regular fa-star'/></ListaEstrelaItem>
            </ListaEstrelas>
          </SkillExpecifica>
        </MinhasSkills>
        <CuriosidadesArea>
          <TituloCuriosidades><ClasseCuriosidades className="fa-solid fa-heart"/>CURIOSIDADES</TituloCuriosidades>
          <ListaCuriosidades>
            <CuriosidadeExpecifica>
              <ClasseFunFacts className="fa-solid fa-mug-hot"/>
              <DataCuriosidade>React Redux</DataCuriosidade>
              <TextoCuriosidade>Breve conhecimento sobre a biblioteca</TextoCuriosidade>
            </CuriosidadeExpecifica>
            <CuriosidadeExpecifica>
              <ClasseFunFacts className="fa-solid fa-medal"/>
              <DataCuriosidade>Styled Components</DataCuriosidade>
              <TextoCuriosidade>Bons conhecimentos sobre a biblioteca</TextoCuriosidade>
            </CuriosidadeExpecifica>
            <CuriosidadeExpecifica>
              <ClasseFunFacts className="fa-solid fa-user"/>
              <DataCuriosidade>React-Router</DataCuriosidade>
              <TextoCuriosidade>Bons conhecimentos sobre a biblioteca</TextoCuriosidade>
            </CuriosidadeExpecifica>
            <CuriosidadeExpecifica>
              <ClasseFunFacts className="fa-solid fa-users"/>
              <DataCuriosidade>21/06/2021</DataCuriosidade>
              <TextoCuriosidade>Rede 7</TextoCuriosidade>
            </CuriosidadeExpecifica>
          </ListaCuriosidades>
        </CuriosidadesArea>
      </MeusCursos>
    </Container>
  )

}

export default Resume