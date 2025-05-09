import styled from "styled-components"

export const SubmitButton = styled.button`
    padding: 10px 15px;
    border: none;
    border-radius: 8px;
    color: ${props => props.theme['white']};
    background-color: ${props => props.theme['green-500']};
    cursor: pointer;

  &:hover {
    background-color: ${props => props.theme['green-700']};
    transform: scale(0.95);
    transition: all 0.3s;
  }

`

export const NewSkillForm = styled.form`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 80%;

`

export const FormError = styled.span`
   
   color: ${props => props.theme['rose-500']};
   font-size: 0.8rem;
   
`