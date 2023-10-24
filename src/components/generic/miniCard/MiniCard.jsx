import { dataAbout } from "../../autoImports/importMocks";
import { Box, Content, MiniWrap, Title } from "./style";

const MiniCard = () => {
  return (
    <MiniWrap>
      {dataAbout?.map((item, index) => (
        <Box key={index}>
          <Content>
            <Title>{item?.name}</Title>
            <Title size="true">{item?.about}</Title>
            <Title.Item>{item?.date}</Title.Item>
          </Content>
          <img src={item?.icons} className="bg-yellow-700" />
        </Box>
      ))}
    </MiniWrap>
  );
};

export default MiniCard;
