import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* { 
    box-sizing: border-box;
    padding: 0;
    margin: 0 auto;
    font-family: var(--font-roboto);
 }

 body{
   background: linear-gradient(to right, ${props => props.theme['sky-900']}, ${props => props.theme['sky-500']});
 }



`