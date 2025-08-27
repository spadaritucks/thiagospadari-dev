import styled from "styled-components";

export const ProjectCardSkeletonContent = styled.div`
  
  background-color: ${props => props.theme['blue-950']};
    width: 400px;
    height: 200px;
    z-index: 1;

    @media (max-width : 500px) {
      width: 300px;
      height: 150px;
    }

    animation: skeletonLight 1s infinite ;

@keyframes skeletonLight {
  from {
     opacity: 1;
  }

  to {
     opacity: 0.4;
  }
}
`