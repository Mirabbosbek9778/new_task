import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  gap: 155px;
`;

const Iframe = styled.iframe`
  border-radius: 40px;
`;

export { Wrapper, Container, Iframe };
