import styled from "styled-components";


export const NavRoot = styled.div`
  
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  padding: 0 30px;
  position: fixed;
  top: 0;
  z-index: 2000;
  
`

export const NavContent = styled.nav`
   
   width: 98%;
   height: 90px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   border-radius: 20px;
   border: 1px solid ${props => props.theme['gray-800']};
   backdrop-filter: blur(10.3px);



   

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
    align-items: center;

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
      width: 100%;
      height: 270px;
      position: absolute;
      z-index: inherit;
      top: -270px;
      left: 0;
      right: 0;
      transition: all 0.3s;
      border-radius: 20px;
     

      &.open{
         top: 90px;         
         background: linear-gradient(to top,  rgba(0, 0, 0, 0.9),  rgba(22, 36, 86, 0.9));
         transition: all 0.3s;
         
      }
   } 


`

