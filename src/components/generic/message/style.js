import styled from "styled-components";

const Line = styled.div`
  width: 180px;
  height: 0.1px;
  background-color: #d2d2d2;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 203px;
  padding-left: 77px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Abouts = styled.div`
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Raleway, sans-serif;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;
Abouts.Date = styled.div`
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

export { Line, Container, Abouts, Content };


// nm ,