import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  background: #222;
  padding: 73.5px 160px 73.5px 160px;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  gap: ${({ gap }) => (gap ? "20px" : "10px")};
`;
const Text = styled.div`
  color: #fff;
  font-family: Raleway, sans-serif;
  font-style: normal;
  text-transform: ${({ size }) => (size ? "none" : "uppercase")};
  line-height: ${({ size }) => (size ? "150%" : "130%")};
  font-size: ${({ size }) => (size ? "17px" : "30px")};
  font-weight: ${({ size }) => (size ? "400" : "700")};
  width: ${({ size }) => (size ? "287px" : "166px")};
  font-variant-numeric: lining-nums proportional-nums;
`;

Text.Small = styled.h1`
  color: #fff;
  font-family: Raleway, sans-serif;
  font-variant-numeric: lining-nums proportional-nums;
  font-style: normal;
  line-height: 150%;
  text-transform: capitalize;
  font-size: ${({ size }) => (size ? "17px" : "24px")};
  font-weight: ${({ size }) => (size ? "400" : "800")};
  width: ${({ size }) => (size ? "358px" : "300px")};
`;

const Inputs = styled.input`
  display: flex;
  padding-left: 0px;
  justify-content: flex-end;
  align-items: center;
  gap: 144px;
  width: 400px;
  height: 50px;
  border-radius: 10px;
  padding-left: 20px;
  border: none;
`;

const Butt = styled.button`
  color: #000;
  text-align: center;
  font-family: Raleway;
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: 20px;
  display: flex;
  height: 50px;
  padding: 15px 35px;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin-top: 152px;
  width: 139px;
  background: #ffc017;
  height: 50px;
  border-radius: 10px;
  margin-left: 262px;
`;

export { Container, Wrapper, Content, Text, Inputs, Butt };
