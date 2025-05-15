import styled, { keyframes } from "styled-components";

export const SkeletonContent = styled.div`
   
   background-color: ${props => props.theme['gray-600']};
   border-radius: 10px;
   height: 20px;

   &.sm{
     width: 30px;
   }

   &.md{
     width: 70px;
   }

   &.lg{
     width: 300px;
   }

   animation: skeletonLight 0.8s infinite ;

   @keyframes skeletonLight {
     from {
        opacity: 1;
     }

     to {
        opacity: 0.6;
     }
   }

`

