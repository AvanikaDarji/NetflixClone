import styled from "styled-components";

export const Container = styled.section``;
export const Inner = styled.div`
  display: flex;
  max-width: 815px;
  flex-direction: column;
  margin: auto;
`;
export const Item = styled.div`
  color: white;
  margin-bottom: 10px;

  &:first-of-type {
    margin-top: 3em;
  }
`;
export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 8px;
  color: white;
  text-align: center;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  font-size: 26px;
  margin-bottom: 1px;
  background: #303030;
  padding: 0.8em 1.2em;
  align-items: center;
  user-select: none;
  img {
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 600px) {
      width: 16px;
    }
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const Body = styled.div`
  max-width: 1200px;
  transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  font-size: 26px;
  font-weight: normal;
  line-height: normal;
  background: #303030;
  padding: 0.8em 1.2em 0.8em 1.2em;
  user-select: none;
  align-items: center;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
export const Frame = styled.div`
  margin-bottom: 10px;
  max-width: 1200px;
`;
