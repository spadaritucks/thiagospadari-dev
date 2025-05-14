import styled from "styled-components";

export const TagInputWrapper = styled.div`
     
     display: flex;
     flex-direction: column;
     align-items: flex-start;
     justify-content: flex-start;
     width: 100%;
     gap: 5px;
     width: 100%;

     p{
        font-size: 0.8rem;
        width: 100%;
        color: ${props => props.theme['white']};
     }

`

export const TagInputContent = styled.div`

    width: 100%;
    min-height: 100px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    background-color: ${props => props.theme['gray-600']};
    color: ${props => props.theme['white']};
    border-radius: 5px;
    padding: 10px 15px;

`

export const TagInputSelected = styled.div`

    background-color: ${props => props.theme['gray-900']};
    color: ${props => props.theme['white']};
    border-radius: 8px;
    max-width: 140px;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 10px;
    transition: all 0.5s;

    svg{
        width: 30px;
        cursor: pointer;

        &:hover{
            opacity: 0.6;
        }
    }

    


`

export const TagInputActions = styled.div`
    
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
    

`