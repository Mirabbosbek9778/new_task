import { dataMessage } from "../../autoImports/importMocks";
import { BigText } from "../cards/style";
import { Abouts, Container, Content, Line } from "./style";

const Messages = () => {
  return (
    <Container>
      <BigText>Mashhur maqolalar</BigText>
      {dataMessage?.map((item, index) => (
        <Content key={index}>
          <div>
            <Abouts size="true">{item?.about}</Abouts>
            <Abouts.Date height="true">{item?.date}</Abouts.Date>
          </div>
          <Line></Line>
        </Content>
      ))}
    </Container>
  );
};

export default Messages;


// n m