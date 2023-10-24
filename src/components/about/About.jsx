import { Buttons, People } from "../autoImports/Imports";
import { Wrapper } from "../navbar/style";
import { Container, Content, H1, Layout, Ptext } from "./style";

const About = () => {
  return (
    <Wrapper prop="true">
      <Container>
        <Content>
          <H1>Alisher Rustamov</H1>
          <Ptext>
            Malevich Consulting asoschilardan biri va 16 yillik SERVIS bo‘yicha
            mutaxassis
          </Ptext>
          <Buttons title={"Men haqimda"} />
        </Content>
        <div className="relative">
          <Layout></Layout>
          <img src={People} className="relative" />
        </div>
      </Container>
    </Wrapper>
  );
};

export default About;
