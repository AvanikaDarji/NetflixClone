import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #222;
  text-align: center;

  padding: 164px 45px;
`;
export const Title = styled.p`
  color: white;
  max-width: 640px;
  font-size: 50px;
  font-weight: 500;
  @media (max-width: 600px) {
    font-size: 35px;
  }
`;
export const SubTitle = styled.p``;
