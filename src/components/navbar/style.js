import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 28px 160px 28px 160px;
  background: #ffc017 !important;
`;

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Box = styled.div`
  display: flex;
  gap: 60px;
  align-items: center;
`;
const BoxItem = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
export { Wrapper, Container, Box, BoxItem, Content };
