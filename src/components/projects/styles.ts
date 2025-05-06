import styled from "styled-components";

export const ProjectsContent = styled.section`
   
   width: 100%;
   max-height: 400vh;
   padding: 3rem 4rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 30px;

   h2{
    font-size: 2rem;
    font-weight: bold;
    color: ${props => props.theme['white']}
 }

`

export const ProjectsContainer = styled.div`
   
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 20px;
   
   @media (max-width:990px) {
      grid-template-columns: repeat(2, 1fr);
      
   }

   @media (max-width:590px) {
      grid-template-columns: repeat(1, 1fr);
     
   }

`