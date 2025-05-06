import styled from "styled-components";

export const LoginSection = styled.section`
   width: 100%;
   height: 80vh;
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
   background-color: ${props => props.theme['gray-900']};
   color: ${props => props.theme['white']};

`

