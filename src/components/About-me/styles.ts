import styled from "styled-components";

export const AboutMeContent = styled.section`
   
 width: 100%;
 height: 70vh;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 gap: 20px;

 h2{
    font-size: 2rem;
    font-weight: bold;
    color: ${props => props.theme['white']}
 }



`

export const AboutMeTextContent = styled.div`

   width: 700px;
   text-align: center;
   padding: 0 20px;

  p{
    font-size: 1.2rem;
    color: ${props => props.theme['gray-300']}
   }

   @media (max-width: 700px) {
     max-width: 400px;
   }

`



