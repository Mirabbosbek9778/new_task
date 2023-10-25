import styled from "styled-components";

const Wrapper = styled.div`
  background: #ffc017;
  width: 100%;
  padding: 0 160px 0 232px;
`;

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 714px) {
    display: flex;
  }
`;

const Content = styled.div`
  padding-top: 114px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const H1 = styled.h1`
  color: #000;
  font-family: Raleway, sans-serif;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 63px;
  text-transform: uppercase;
  width: 464px;
`;

const Ptext = styled.p`
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  width: 287px;
  font-family: Raleway, sans-serif;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;
const Layout = styled.div`
  width: 426.237px;
  height: 638.853px;
  transform: rotate(-150deg);
  flex-shrink: 0;
  background: #fff;
  border-radius: 240.81px;
  position: absolute;
  right: 200px;

  @media (max-width: 714px) {
    position: absolute;
    width: 256.083px;
    height: 458.765px;
    right: 40px;
    top: 70px;
    transform: rotate(-160deg);
  }
`;

const PeopleImage = styled.img`
  position: relative;
  @media (max-width: 714px) {
    width: 714px;
    height: 350px;
    flex-shrink: 0;
    position: relative;
    top: 80.5px;
    right: 50px;
  }
`;

export { Wrapper, H1, Ptext, Layout, Container, Content, PeopleImage };
