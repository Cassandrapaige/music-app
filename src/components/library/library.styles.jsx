import styled, { css } from "styled-components";

export const LibraryWrapper = styled.section`
  padding: 50px;
  max-height: 100vh;
  overflow: scroll;
  box-shadow: 0px 6px 46px rgba(104, 50, 50, 0.2);
  position: fixed;
  top: 0;
  z-index: 100;
  background: #fff;
  left: 0;
  bottom: 0;
  transform: translateX(-100%);
  transition: all 0.5s ease;
  opacity: 0;

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: translateX(0%);
      opacity: 1;
    `}

  h1 {
    padding: 0 0 30px 30px;
    font-weight: 800;
  }
`;
