import { motion } from "motion/react";
import styled from "styled-components";

export const ContactContent = styled(motion.section)`
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    gap: 70px;
    margin: 4rem 0;
    min-height: 60vh;

    h2 {
        font-size: 2rem;
        font-weight: bold;
        color: ${props => props.theme['white']}
    }

   


`


export const ContactContainer = styled.div`
   
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 50px;

   @media (max-width:990px) {
        flex-wrap: wrap;
    }

`




export const ContactItem = styled.a`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-decoration: none;
    gap: 10px;

    color: ${props => props.theme['gray-400']};

    p {
        font-size: 1rem;
        font-weight: bold;
    }

    &:hover{
        transform: scale(1.1);
        transition: 0.4s all;
    }


`

export const ContactSvg = styled.div`
 
   background-color: ${props => props.theme['gray-900']};
   border-radius: 100px;
   display: flex;
   align-items: center;
   justify-content: center;

   padding: 15px 15px;

   svg {
    width: 40px;
    height: 40px;
    color: ${props => props.theme['blue-600']};
   }

`