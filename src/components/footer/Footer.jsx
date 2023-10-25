import { Butt, Container, Content, Inputs, Text, Wrapper } from "./style";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const notify = () => toast("Xabaringiz Yuborildi!");

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
          <Butt onClick={notify}>Yuborish</Butt>
          <ToastContainer />
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Footer;
