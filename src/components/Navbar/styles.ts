import styled from "styled-components";

export const NavContent = styled.nav`
   
   width: 100%;
   height: 90px;

   display: flex;
   align-items: center;
   justify-content: space-between;
   

   svg{
      color : ${props => props.theme['white']};
      cursor: pointer;
      width: 50px;
      height: 50px;
      display: none;

      &:hover{
         transform: scale(1.1);
         transition: all 0.4s;
      }
      
   }


   @media (max-width:990px) {
      position: relative;
      svg{
         display: block;
      }
   }
   

`

export const DevTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    h1{
      font-size: 1.5rem;
      color : ${props => props.theme['white']};
    }

    p{
      font-size: 0.9rem;
      color : ${props => props.theme['white']};
      margin-left: 120px;
      
    }
`


export const NavLinksContent = styled.div`
   
   display: flex;
   align-items: center;
   gap: 20px;

   a{
      text-decoration: none;
      color: ${props => props.theme['white']};
   }

   a:hover{
      border-bottom: 2px solid ${props => props.theme["white"]};
      transition: all 0.2s;
      padding: 5px 0;
   }

   @media(max-width: 990px){
      flex-direction: column;
      justify-content: space-around;
      background: ${props => props.theme['gray-700']};
      width: 100%;
      height: 270px;
      position: absolute;
      opacity: 0;
      top: -270px;
      left: 0;
      right: 0;
      transition: all 0.3s;
     

      &.open{
         top: 90px;
         opacity: 1;
         transition: all 0.3s;
      }
   } 


`

export const ButtonAdminPanelLogin = styled.button`
  
  padding: 5px 15px;
  font-size: 1rem;
  background-color: ${props => props.theme['blue-700']};
  border: none;
  border-radius: 8px;
  cursor: pointer;

  a{
    text-decoration: none;
    color: ${props => props.theme['white']};
  }

  &:hover{
   background-color: ${props => props.theme['blue-900']};
  }
`