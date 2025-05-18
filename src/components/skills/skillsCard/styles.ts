import { motion } from "motion/react";
import styled from "styled-components";

export const SkillsCardContent = styled(motion.div)`
   
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   text-align: center;
   gap: 10px;
   border-top-left-radius: 20px;
   background-color: ${props => props.theme['gray-800']} ;
   border-bottom: 4px solid ${props => props.theme['blue-500']};
   padding: 15px 20px;
   color: ${props => props.theme['gray-400']};
   width: 128px;
   height: 128px;


   h3 {
     font-size: 1rem;
   }

   img{
    width: 50px;
    height: 50px;
   }

   &:hover{
     transform: scale(1.1);
     transition: all 0.4s;
     cursor: pointer
   }
`