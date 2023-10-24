import { Butt, Container, Content, Inputs, Text, Wrapper } from "./style";

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Text>Alisher Rustamov</Text>
          <Text size="true">
            Malevich Consulting asoschilardan biri va 16 yillik SERVIS bo‘yicha
            mutaxassis
          </Text>
        </Content>
        <Content gap={"true"}>
          <Text.Small>Xabar qoldirish</Text.Small>
          <Text.Small size="true">
            Alisher Rustamovga o‘z fikrlaringiz, munosabatlaringizni bildirish
            imkoniyatingiz bor!
          </Text.Small>
          <Inputs type="text" placeholder="Xabar qoldirish" />
          <Butt>Yuborish</Butt>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Footer;
