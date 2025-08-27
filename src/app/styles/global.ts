'use client'
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* { 
    box-sizing: border-box;
    padding: 0;
    margin: 0 auto;
    font-family: var(--font-roboto);
 }

 body{
   background: linear-gradient(to left,${props => props.theme['blue-950']}
    , ${props => props.theme['black']},
    ${props => props.theme['blue-800']}
    
    );
 }

 html{
  scroll-behavior: smooth;
 }
html, body {
   scroll-snap-type: y mandatory;
} 



`