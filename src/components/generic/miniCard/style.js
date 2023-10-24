import styled from "styled-components";

const Title = styled.h1`
  color: #000;
  font-family: Raleway, sans-serif;
  font-style: normal;
  line-height: 150%;
  text-transform: capitalize;
  font-weight: ${({ size }) => (size ? "400" : "800")};
  width: ${({ size }) => (size ? "491px" : "523px")};
  font-size: ${({ size }) => (size ? "17px" : "20px")};
`;

Title.Item = styled.p`
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
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const MiniWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export { Box, Title, Content, MiniWrap };
