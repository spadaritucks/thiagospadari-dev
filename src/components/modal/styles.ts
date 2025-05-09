import styled from "styled-components";

export const ModalSection = styled.section`

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 100%;
   height: 100%;
   position: relative;
   
`

export const ModalOverlay = styled.div`
  position: fixed;
  transform: translate(-50);
  inset: 0;
  background-color: ${props => props.theme['gray-900']};
  opacity: 0.4;
  z-index: 50;
`

export const ModalContent = styled.div`

      background-color: ${props => props.theme['gray-900']};
      color : ${props => props.theme['white']};
      padding: 2rem;
      border-radius: 0.5rem;
      max-width: 500px;
      width: 100%;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 100;
      
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
      animation: modalOpen 0.3s ease-in-out;
    
     
      @keyframes modalOpen {
         from {
            top: 55%;
         }
         to {
            top: 50%;
         }
      }

      @media (max-width: 500px) {
         max-width: 350px;
      }
      
`

export const ModalHeader = styled.div`

   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 100%;
   gap: 7rem;

   h3{
      font-weight: bold;
      font-size: 1.3rem;
   }

   svg{
      cursor: pointer;

      &:hover{
         color : ${props => props.theme['gray-300']};
      }
   }
   
  

`

export const ModalBody = styled.div`
   
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`