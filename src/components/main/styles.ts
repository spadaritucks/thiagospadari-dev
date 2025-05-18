import styled from "styled-components";
import { motion } from "motion/react"

export const HomeContent = styled(motion.section)`
  
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  
`

export const HomeMainContent = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  height: 100vh;


  img {
    width: 400px;
    height: 400px;
    border-radius: 100%;
    border: 1rem solid ${props => props.theme['blue-500']}
  }


  img:hover {
    transform: scale(1.1);
    transition: all 0.3s;
  }


  @media (max-width: 990px) {
    flex-direction: column-reverse;

    img{
      width: 300px;
      height: 300px;
    }
  }



`

export const HomeTextContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 10px;


  h2 {
    font-size: 2rem;
    font-weight: bold;
    color: ${props => props.theme['white']};
  }

  p {
    font-size: 1rem;
    color: ${props => props.theme['gray-300']};
  }


  .typing {
    display: flex;
    overflow: hidden;
    white-space: nowrap;
    width: 0;
    animation: typing 3s steps(30) forwards;
  }


  .typing-1 {
    animation-delay: 0s, 0s;
  }


  .typing-2 {
    animation-delay: 3.2s, 3.2s; /* começa após a primeira acabar */
  }

 
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }

  }


  @media (max-width: 990px) {
    
    h2 {
      font-size: 1.5rem;
    }

    p{
      font-size: 0.9rem;
    }
  }
`;

export const HomeButtonContent = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  a {
    text-decoration: none;
    color: ${props => props.theme['white']};
  }

`

export const HomeAboutMeContent = styled(motion.div)`
   
 width: 100%;
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 justify-content: center;
 gap: 20px;
 min-height: 60vh;

 h2{
    font-size: 2rem;
    font-weight: bold;
    color: ${props => props.theme['white']}
 }



`

export const HomeAboutMeTextContent = styled.div`

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

