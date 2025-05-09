import { styled } from "styled-components";

export const ProjectCardContent = styled.div`
  max-width: 400px;
  max-height: 200px;
  border: 1px solid ${props => props.theme['gray-500']};
  border-bottom: 4px solid ${props => props.theme['blue-500']};
  position: relative;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  cursor: pointer;
  z-index: 1;
  
  img{
    width: 100%;
    height: 100%;
    opacity: 0.4;
    transition: opacity 0.4s;
  }

  &:hover{
    transform: scale(1.1);
    transition: all 0.4s;
    z-index: 2;

    > *{
      opacity: 0;
    }

    footer{
      opacity: 1;
      top: 102.5%;
      transition: all 1s;
    }
    
    img{
      opacity: 1;
    }
  }

  img:hover{
    opacity: 1;
  }
`

export const ProjectCardDetailsContent = styled.div`
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
    display: flex; 
    flex-direction: column;
    align-items: center;
    gap: 5px;
    color: ${props => props.theme['white']};

    h3{
      font-size: 1.2rem;
      font-weight: bold;
    }
   

`

export const ProjectCardSkillsContent = styled.div`
   
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 5px;

   img{
     width: 15px;
     height: 15px;
     opacity: 1;
   }
`

export const ProjectCardFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
   
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    background-color: ${props => props.theme['gray-900']};
    width: 100%;
    height: 40px;
    padding: 5px 5px;
    
    position: absolute;
    top: 70%;
    opacity: 0;
    z-index: 3;

    p{
      font-size: 0.8rem;
      color: ${props => props.theme['white']};
    }
`

export const SeeMoreButton = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 8px;
  color: ${props => props.theme['white']};
  background-color: ${props => props.theme['blue-500']};
  font-size: 0.7rem;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme['blue-700']};
    transform: scale(0.95);
    transition: all 0.3s;
  }
`