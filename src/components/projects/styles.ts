import styled from "styled-components";

export const ProjectsContent = styled.section`
   
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;


`

export const ProjectsContainers = styled.div`
    
   width: 100%;
   padding: 3rem 4rem;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: center;
   gap: 30px;

   h2{
    font-size: 2rem;
    font-weight: bold;
    color: ${props => props.theme['white']};
    text-align: left;
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