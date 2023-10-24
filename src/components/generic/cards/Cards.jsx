import { dataCards } from "../../autoImports/importMocks";
import { BigText, Box, Container, Content } from "./style";
import { Messages } from "../../autoImports/Imports";

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
