import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 28px 160px;
  padding-bottom: ${({ prop }) => (prop ? "0px " : "28px")};
  background-color: ${({ colur }) => (colur ? "white" : "#FFC017")};
  padding-right: ${({ colur }) => (colur ? "550px" : "160px")};

  @media (max-width: 714px) {
    padding: 10px;
    padding-right: 10px;
  }
`;

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 714px) {
    display: flex;
  }
`;
const Box = styled.div`
  display: flex;
  gap: 60px;
  align-items: center;

  @media (max-width: 714px) {
    display: flex;
  }
`;
const BoxItem = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 714px) {
    display: flex;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  z-index: 10000;

  @media (max-width: 714px) {
    display: flex;
  }
`;
export { Wrapper, Container, Box, BoxItem, Content };
