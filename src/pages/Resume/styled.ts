import styled, {keyframes} from "styled-components";

const animacaoEducacao = keyframes`  
  from{
    transition: .5s;
    transform: translate3d(60px, 0, 0);
  }
  to{
    transform: translate3d(0, 0, 0)
  }
`;

const animacaoExperiencia = keyframes`  
  from{
    transition: .5s;
    transform: translate3d(-60px, 0, 0);
  }
  to{
    transform: translate3d(0, 0, 0)
  }
`;



export const Container = styled.div`
  margin: 30px 0;
  grid-column: 1/-1;
  text-align: center;
  color: white;
`
export const IntroducaoResumo = styled.div`

`
export const Titulo = styled.h1`
  font-size: 2.5rem;
  color: #ff5d56;
  margin-bottom: 15px;
  font-family: 'Berkshire Swash', cursive;
`
export const Introducao = styled.p`
  color: #707070;
  font-size: 1,4rem;
  margin-bottom: 1rem;
  position: relative;
`
export const BolinhaArea = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`
export const Bolinha = styled.span`
  display: block;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: #dc3545;
`
export const AreaResumo = styled.div`
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  gap: 10px;
  align-items: start;
`
export const TituloExperiencia = styled.h2`
  font-family: 'Poppins';
  font-size: 1.5rem;
  background-color: #ff5d56;
  justify-self: start;
  padding: 10px;
  border-radius: 5px;

`
export const ClasseExperiencia = styled.i`
  margin-right: 10px;
`
export const Resumos = styled.div`

`
export const ResumoExpecifico = styled.div<{ active?:string, id?:string }>`
  display: ${props => props.active === props.id ? 'block' : 'none'};
  background-color: #222;
  padding: 40px;
  position: relative;
  animation: ${animacaoExperiencia} .6s ease-in-out forwards;
  &:before{
    content: "";
    border-right: 30px solid transparent;
    border-bottom: 30px solid #222;
    position: absolute;
    top: -20px;
    left: 30px;
    display: inline-block;
  }
`
export const DataResumo = styled.span`
  color: #dc3546;
  font-family: "Poppins";
  font-weight: bold;
`
export const TituloResumo = styled.h3`
  font-family: "Poppins";
  margin: 10px 0;
`
export const ResumoExperiencia = styled.p`
  color: #707070;
  font-size: 1.1rem;
`
export const Lista = styled.ul`
  gap: 10px;
  display: flex;
  cursor: pointer;
  margin-top: 20px;
  justify-content: center;
`
export const ItemExperiencia = styled.li<{ active?:string, id?:string }>`
  list-style-type: none;
  color: ${props => props.active === props.id ? '#222' : '#ff5d56'};
`
export const ItemResumo = styled.li<{ active?:string, id?:string }>`
  list-style-type: none;
  color: ${props => props.active === props.id ? '#222' : '#ff5d56'};
`

export const TituloEducacao = styled.h2`
  font-family: 'Poppins';
  font-size: 1.5rem;
  background-color: #ff5d56;
  justify-self: start;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 30px;
  grid-column: 2;
  grid-row: 1;
`
export const EducacaoArea = styled.div`

`
export const EducacaoExpecifica = styled.div<{ active?:string, id?:string }>`
  display: ${props => props.active === props.id ? 'block' : 'none'};
  background-color: #222;
  padding: 40px;
  position: relative;
  animation: ${animacaoEducacao} .6s ease-in-out forwards;
  &:before{
    content: "";
    border-right: 30px solid transparent;
    border-bottom: 30px solid #222;
    position: absolute;
    top: -20px;
    left: 30px;
    display: inline-block;
  }
`
export const DataEducacao = styled.span`
  color: #dc3546;
  font-family: "Poppins";
  font-weight: bold;
`
export const NomeEducacao = styled.h3`
  font-family: "Poppins";
  margin: 10px 0;
`
export const ResumoEducacao = styled.p`
  color: #707070;
  font-size: 1.1rem;
`
export const ClasseExpecifica = styled.i`
  font-size: 1.7rem;
  padding-right: 15px;
  
`

export const MeusCursos = styled.div`
  max-width: 1300px;
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: start;
  padding: 30px;
  gap: 30px;
  justify-content: center;
`
export const MinhasSkills = styled.div`
  display: grid;
`
export const TituloSkills = styled.h2`
  padding: 10px 30px;
  border-radius: 5px;
  background-color: #ff5d56;
  font-size: 1.5rem;
  font-family: 'Poppins';
  margin-bottom: 30px;
  justify-self: start;
`
export const ClasseSkills = styled.i`
  padding-right: 10px;
`
export const SkillExpecifica = styled.div`
  font-size: 1.5rem;
  grid-column: 1/2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-top: 10px;
`
export const NomeSkill = styled.h3`
font-size: 1.5rem;
`
export const ListaEstrelas = styled.ul`
  display: flex;
`
export const ListaEstrelaItem = styled.li`
  list-style-type: none;
`
export const ClasseEstrela = styled.i`

`





export const CuriosidadesArea = styled.div`
  grid-column: 3/-1;
  grid-row: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
`
export const TituloCuriosidades = styled.h2`
  grid-column: 1/-1;
  padding: 10px 30px;
  border-radius: 5px;
  background-color: #ff5d56;
  font-size: 1.5rem;
  font-family: 'Poppins';
  margin-bottom: 30px;
  justify-self: start;
`
export const ClasseCuriosidades = styled.i`
  padding-right: 10px;
`
export const ListaCuriosidades = styled.ul`
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  justify-self: start;
`
export const CuriosidadeExpecifica = styled.li`
  list-style-type: none;
  background-color: #222;
  border: 3px solid #2f2b2b;
  display: grid;
  grid-template-columns: auto 1fr;
  align-self: start;
  width: 300px;
  height: 150px;
`
export const ClasseFunFacts = styled.i`
  grid-row: 1/3;
  margin: auto;
  padding: 20px;
  font-size: 2rem;
  color: #ff5d56;
  border-right: 2px solid #3e3d3d;
`
export const DataCuriosidade = styled.span`
font-size: 1.5rem;
color: white; 
font-family: 'Poppins';
font-weight: bold;
padding-top: 10px;
padding-left: 10px;
`
export const TextoCuriosidade = styled.p`
  padding-left: 10px;
  color: #707070;
  font-weight: bold;
  font-family: 'Poppins';

`
