import { Buttons, Fonts, GenericText, Select } from "../autoImports/Imports";
import { Wrapper, Container, Box, BoxItem, Content } from "./style";

const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <Box>
          <Fonts />
          <BoxItem>
            <GenericText title={"Maqolalar"} />
            <GenericText title={"Ijtimoiy tarmoqlar"} />
          </BoxItem>
        </Box>
        <Content>
          <Select />
          <Buttons title={"Xabar qoldirish"} />
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Navbar;
