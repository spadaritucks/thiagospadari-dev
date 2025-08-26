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
   background: radial-gradient(${props => props.theme['blue-900']}, ${props => props.theme['black']});
 }

 html{
  scroll-behavior: smooth;
 }



`