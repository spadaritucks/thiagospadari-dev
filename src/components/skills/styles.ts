import styled from "styled-components";

export const SkillsContent = styled.section`
   
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 30px;

   width: 100%;
   max-height: 400vh;
   margin-top: 4rem;
   margin-bottom: 4rem;
   
 h2{
    font-size: 2rem;
    font-weight: bold;
    color: ${props => props.theme['white']}
 }

 

`


export const SkillsGridContent = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   gap: 20px;
   width: 90%;
  
    

`