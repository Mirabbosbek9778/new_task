import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  display: flex;
  gap: 76px;
  cursor: pointer;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const BigText = styled.h1`
  color: #000;
  font-family: Raleway, sans-serif;
  font-style: normal;
  font-weight: 800;
  line-height: 150%;
  width: 300px;
  font-size: ${({ size }) => (size ? "17px" : "20px")};
  font-weight: ${({ size }) => (size ? "400" : "800")};
`;
BigText.Date = styled.div`
  color: #000;
  text-align: center;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Raleway, sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  text-transform: uppercase;
  border-radius: 8px;
  background: #f6f7f8;
  display: flex;
  padding: 12px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 88px;
  /* height: ${({ height }) => (height ? "52px" : " ")}; */
`;

export { Container, BigText, Box, Content };
