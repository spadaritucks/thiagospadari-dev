import styled from "styled-components";

export const PaginationContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    width: 100%;
`

export const PaginationNumberPage = styled.div`
    display: flex;
    align-items: center;
    
    span {
        font-size: 1rem;
        color : ${props => props.theme['white']}
    }
`

export const PaginationActions = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`

export const PaginationButton = styled.button`
   width: 40px;
   height: 40px;
   border: 1px solid ${props => props.theme['gray-600']};
   background-color: ${props => props.theme['gray-800']};
   border-radius: 8px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   cursor: pointer;

   svg {
     width: 20px;
     height: 20px;
     color: ${props => props.theme['white']};

   }

   &:hover{
     background-color: ${props => props.theme['gray-500']};
     transform: scale(0.95);
     transition: all 0.3s;
   }
`