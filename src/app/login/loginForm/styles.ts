import styled from "styled-components"

export const Form = styled.form`
   
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 10px;
   text-align: left;

`

export const LoginFooter = styled.div`
 
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`

export const FormError = styled.span`
   
   color: ${props => props.theme['rose-500']};
   font-size: 0.8rem;
   
`

export const SubmitButton = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 8px;
  color: ${props => props.theme['white']};
  background-color: ${props => props.theme['blue-500']};

  


  &:hover {
    background-color: ${props => props.theme['blue-700']};
    transform: scale(0.95);
    transition: all 0.3s;
  }


`