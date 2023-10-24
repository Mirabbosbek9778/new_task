import { dataCards } from "../../autoImports/Imports";
import Messages from "../message/Messages";
import { BigText, Box, Container, Content } from "./style";

const Cards = () => {
  return (
    <div>
      <Container>
        {dataCards?.map((item, index) => (
          <Box key={index}>
            <img src={item?.picture} />
            <Content>
              <BigText>{item?.title}</BigText>
              <BigText size="true">{item?.about}</BigText>
              <BigText.Date>{item?.date}</BigText.Date>
            </Content>
          </Box>
        ))}
        <Messages />
      </Container>
    </div>
  );
};

export default Cards;
