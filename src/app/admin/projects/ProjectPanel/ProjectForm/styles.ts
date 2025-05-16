import styled from "styled-components"

export const FormContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 90%;
`


export const NewProjectForm = styled.form`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    width: 100%;
`

export const GridContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`


export const GridFullRowContent = styled.div`
  width: 100%;
  grid-column: span 2;
  gap: 10px;
  display: flex;
  flex-direction: column;
`