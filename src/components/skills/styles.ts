import styled from "styled-components";

export const SkillsContent = styled.section`
   
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 30px;
   width: 100%;
   min-height: 80vh;
   margin: 4rem 0;

   
 h2{
    font-size: 2rem;
    font-weight: bold;
    color: ${props => props.theme['white']}
 }

 

`


export const SkillsGridContent = styled.div`
   display: grid;
   grid-template-columns: repeat(6, 1fr);
   justify-content: center;
   gap: 20px;
   width: 90%;

   @media (max-width: 990px) {
      grid-template-columns: repeat(4, 1fr);
   }

   @media (max-width: 600px) {
      grid-template-columns: repeat(3, 1fr);
   }

   
   @media (max-width: 450px) {
      grid-template-columns: repeat(2, 1fr);
   }
  
  
    

`