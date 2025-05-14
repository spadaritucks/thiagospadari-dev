import styled from "styled-components";

export const ApplicationButton = styled.button`
    padding: 10px 15px;
    border: none;
    border-radius: 8px;
    color: ${props => props.theme['white']};
    background-color: ${props => props.theme['rose-500']};
    cursor: pointer;

    a{
      text-decoration: none;
      color: ${props => props.theme['white']};
    }

  &:hover {
    background-color: ${props => props.theme['rose-700']};
    transform: scale(0.95);
    transition: all 0.3s;
  }

  &.primary{
   background-color: ${props => props.theme['blue-500']};
   
   &:hover{
    background-color: ${props => props.theme['blue-700']};
    transform: scale(0.95);
    transition: all 0.3s;
   }
  }

  &.secondary{
    background-color: transparent;
    border: 1px solid ${props => props.theme['blue-300']};
   
   
   &:hover{
    opacity: 0.5;
    transform: scale(0.95);
    transition: all 0.3s;
   }
  }

  &.success{
    background-color: ${props => props.theme['green-500']};
   
   
   &:hover{
    background-color: ${props => props.theme['green-700']};
    transform: scale(0.95);
    transition: all 0.3s;
   }
  }

  
  &.destructive{
    background-color: ${props => props.theme['rose-500']};
   
   
   &:hover{
    background-color: ${props => props.theme['rose-700']};
    transform: scale(0.95);
    transition: all 0.3s;
   }
  }

`