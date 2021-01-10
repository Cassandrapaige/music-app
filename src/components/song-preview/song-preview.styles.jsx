import styled from "styled-components";

export const SongPreviewWrapper = styled.div`
  display: flex;
  padding: 20px;
  cursor: pointer;
  transition: all 0.1s ease;
  background: ${({ active }) => active && "#d6f0ff"};

  &:hover {
    background: ${({ active }) => !active && "#fae0fa"};
  }

  img {
    width: 100px;
  }
`;

export const SongPreviewInfo = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  flex-direction: column;

  h2 {
    font-weight: 800;
    font-size: 1.3rem;
    padding-bottom: 0.8rem;
  }

  h3 {
    color: #8a8a8a;
    font-size: 1rem;
  }
`;
