import { dataMessage } from "../../autoImports/importMocks";
import { BigText } from "../cards/style";
import { Abouts, Container, Line } from "./style";

const Messages = () => {
  return (
    <Container>
      <BigText>Mashhur maqolalar</BigText>
      {dataMessage?.map((item, index) => (
        <div key={index} className="flex flex-col gap-5">
          <div>
            <Abouts size="true">{item?.about}</Abouts>
            <Abouts.Date height="true">{item?.date}</Abouts.Date>
          </div>
          <Line></Line>
        </div>
      ))}
    </Container>
  );
};

export default Messages;
