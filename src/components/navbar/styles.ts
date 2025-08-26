import styled from "styled-components";


export const NavRoot = styled.div`
  
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90px;
  padding: 0 30px;

`

export const NavContent = styled.nav`
   
   width: 95%;
   height: 70px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   position: fixed;
   border-radius: 20px;
   border: 1px solid ${props => props.theme['gray-800']};
   background: radial-gradient(${props => props.theme['blue-900']}, ${props => props.theme['black']});
   z-index: 1000;
   

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
      font-size: 1.2rem;
      color : ${props => props.theme['white']};
    }

    p{
      font-size: 0.7rem;
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

