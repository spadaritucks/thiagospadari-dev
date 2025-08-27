import styled from "styled-components";


export const NavRoot = styled.div`
  
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  border: 1px solid ${props => props.theme['gray-800']};
  background-color: rgba(0, 0, 0, 0.3);
  padding: 10px 30px;
  margin-top: 10px ;
  border-radius: 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2000;
  backdrop-filter: blur(10.3px);


  
`

export const NavContent = styled.nav`
   
   width: 100%;
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
      font-weight: 700;
   }

   a:hover{
      border-bottom: 2px solid ${props => props.theme["white"]};
      transition: all 0.2s;
      padding: 5px 0;
   }

   @media(max-width: 990px){
      display: none;
     
   } 


`

