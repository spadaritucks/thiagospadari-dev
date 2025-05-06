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
export const LoginForm = styled.form`
   
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 10px;

`

export const LoginFooter = styled.div`
 
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
