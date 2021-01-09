import styled from "styled-components";

export const SongWrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 30px;

  img {
    width: 40%;
    border-radius: 50%;
    border: 1px solid #fff;
  }
`;

export const SongInfo = styled.div`
  text-align: center;
  padding: 2rem 1rem 1rem 1rem;

  h2 {
    font-weight: 800;
    padding-bottom: 15px;
    color: #1c1c1c;
  }

  h3 {
    color: #8a8a8a;
    font-size: 1rem;
  }
`;
