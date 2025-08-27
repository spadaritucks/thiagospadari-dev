
import styled from "styled-components";

export const LoginSection = styled.section`
   width: 100%;
   height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

`
export const LoginContent = styled.section`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 20px;

   width: 350px;
   height: 350px;
   border-radius: 20px;
   background: linear-gradient(to bottom,${props => props.theme['blue-950']}, ${props => props.theme['black']});
   box-shadow: 2px 2px 2px 2px ,${props => props.theme['gray-700']} ;
   color: ${props => props.theme['white']};

`

