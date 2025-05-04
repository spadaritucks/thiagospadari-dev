import styled from "styled-components";

export const HomeContent = styled.section`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 20px;

   width: 100%;
   height: 100vh;
   padding: 0 10vw;
   
   color: ${props => props.theme['white']};

`

export const HomeTextContent = styled.div`
     display: flex;
     flex-direction: column;
     text-align: center;
     gap: 20px;

     h1{
        font-size: 4rem;
        font-weight: bold;
     }
     p{
        font-size: 1.2rem;
     }

     @media (max-width: 990px) {
       h1{
         font-size: 2.5rem;
       }

       p{
         font-size: 1.2rem;
       }
     }
`

export const HomeLinksContent = styled.div`
   display: flex;
   align-items: center;
   gap: 10px;

   img{
     width: 60px;
     height: 60px;
     border-radius: 8px;
   }

   img:hover{
    transform: scale(1.1);
    transition: all 0.2s;
   }

`