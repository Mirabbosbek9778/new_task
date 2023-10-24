import { Buttons, People } from "../autoImports/Imports";
import { Container, Content, H1, Layout, Ptext, Wrapper } from "./style";

const About = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <H1>Alisher Rustamov</H1>
          <Ptext>
            Malevich Consulting asoschilardan biri va 16 yillik SERVIS bo‘yicha
            mutaxassis
          </Ptext>
          <Buttons title={"Men haqimda"} />
        </Content>
        <Layout></Layout>
        <img src={People} className="relative" />
      </Container>
    </Wrapper>
  );
};

export default About;
