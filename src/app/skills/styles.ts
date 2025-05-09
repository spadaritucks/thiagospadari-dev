import styled from "styled-components";

export const SkillsContent = styled.section`
   
   width: 100%;
   height: 100vh;
`

export const SkillsHeader = styled.section`
 
   display: flex;
   align-items: center;
   justify-content: space-around;
   
   width: 100%;
   padding: 2rem 2rem;
   color: ${props => props.theme['white']};

   h2 {
      font-size: 1.5rem;
      font-weight: bold;
   }

`

export const SkillsManagerContent = styled.div`
    
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: auto;
   

`

export const SkillsTable = styled.table`
   
   width: 90%;
   border-collapse: collapse;
   

   thead tr, tbody tr {
      border: 2px solid ${props => props.theme['gray-600']};
      height: 40px;
      font-size: 0.9rem;
      border-radius: 10px;
   
      
      &:hover{
         background-color: ${props => props.theme['gray-600']} ;
      }
   }

   thead tr {
      color: ${props => props.theme['gray-300']};
   }

   tbody tr td {
      text-align: center;
     
      padding: 5px 25px;
      color: ${props => props.theme['white']};
   }

  
   
`


export const NewSkillButton = styled.button`
    padding: 10px 15px;
    border: none;
    border-radius: 8px;
    color: ${props => props.theme['white']};
    background-color: ${props => props.theme['blue-500']};
    cursor: pointer;
  


  &:hover {
    background-color: ${props => props.theme['blue-700']};
    transform: scale(0.95);
    transition: all 0.3s;
  }

`

export const DeleteSkillButton = styled.button`
    padding: 10px 15px;
    border: none;
    border-radius: 8px;
    color: ${props => props.theme['white']};
    background-color: ${props => props.theme['rose-500']};
    cursor: pointer;

  &:hover {
    background-color: ${props => props.theme['rose-700']};
    transform: scale(0.95);
    transition: all 0.3s;
  }

`

