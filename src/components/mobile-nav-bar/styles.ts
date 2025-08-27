import styled from "styled-components";

export const MobileNavLinksAnimation = styled.div`


   
  transition: 0.4s ease-in-out ;
  opacity: 0;
  height: 0;


  &.open {
    opacity: 1;
    height: 170px;
 
    
  }

  @media (min-width: 990px) {
      display: none;
   }


`

export const MobileNavLinksContent = styled.div`

         display: flex;
         flex-direction: column;
         justify-content: space-around;
         gap: 20px;
         padding: 20px 10px;
        

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

           


`