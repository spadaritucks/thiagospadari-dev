import styled from "styled-components";

export const InputWrapperContent = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: flex-start;
   width: 100%;
   gap: 5px;
   

   label {
     font-size: 0.8rem;
     width: 100%;
     color: ${props => props.theme['white']};
   }

   input {
    width: 100%;
    padding: 10px 15px;
    background-color: ${props => props.theme['gray-600']};
    color: ${props => props.theme['white']};
    border-radius: 5px;
    border: none;

    &:focus{
        border: 2px solid ${props => props.theme['blue-900']};
        outline: none;
        transition: 0.1s all;
    }
    
   }
`