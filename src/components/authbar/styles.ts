import styled from "styled-components";

export const NavContent = styled.nav`
   
   width: 100%;
   height: 60px;

   display: flex;
   align-items: center;
   justify-content: space-between;
   
   border-bottom: 2px solid ${props => props.theme['gray-600']};

 
   

`
export const NavLinksContent = styled.div`
   
   display: flex;
   align-items: center;
   gap: 20px;

   a{
      text-decoration: none;
      color: ${props => props.theme['white']};
      display: flex;
      align-items: center;
      gap: 10px;
      height: 60px;
   }

   a:hover{
      border-bottom: 1px solid ${props => props.theme["white"]};
      color: ${props => props.theme['gray-500']};
      transition: all 0.2s;
      padding: 5px 0;
   }

   a[aria-current="page"]{
      border-bottom: 1px solid ${props => props.theme["white"]};
      color: ${props => props.theme['gray-500']};
      transition: all 0.2s;
      padding: 5px 0;
   }


   



`


export const ButtonLogout = styled.button`
  
  padding: 5px 15px;
  font-size: 1rem;
  background-color: ${props => props.theme['blue-500']};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: ${props => props.theme['white']};
  

  &:hover{
   background-color: ${props => props.theme['blue-700']};
   transform: scale(0.95);
   transition: all 0.4s;
  }
`