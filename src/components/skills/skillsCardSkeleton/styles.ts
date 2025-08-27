import styled from "styled-components";

export const SkillsCardSkeletonContent = styled.div`

   background-color: ${props => props.theme['blue-950']};
   border-top-left-radius: 20px;
   width: 120px;
   height: 120px;
   z-index: 1;

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