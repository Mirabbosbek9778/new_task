import { dataCards } from "../../autoImports/importMocks";
import { BigText, Box, Container, Content } from "./style";
import { Messages } from "../../autoImports/Imports";

const Cards = () => {
  return (
    <div>
      <Container>
        {dataCards?.map((item, index) => (
          <Box key={index}>
            <a href="https://www.youtube.com/live/qpZtTi7B_hM?si=xuVWxE3ODrLnUw6S">
              <img src={item?.picture} />
              <Content>
                <BigText>{item?.title}</BigText>
                <BigText size="true">{item?.about}</BigText>
                <BigText.Date>{item?.date}</BigText.Date>
              </Content>
            </a>
          </Box>
        ))}
        <Messages />
      </Container>
    </div>
  );
};

export default Cards;
