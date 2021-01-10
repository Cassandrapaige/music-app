import styled from "styled-components";

export const Nav = styled.nav`
  min-height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  h1 {
    font-weight: 800;
  }

  button {
    padding: 12px 20px;
    background: transparent;
    border: 1px solid rgb(65, 65, 65);
    transition: all 0.3s ease;
    outline: none;

    &:hover {
      background: rgb(65, 65, 65);
      color: #fff;
    }
  }

  .fa-music {
    margin-left: 5px;
  }
`;
