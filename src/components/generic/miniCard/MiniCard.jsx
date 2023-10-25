import { dataAbout } from "../../autoImports/importMocks";
import { Box, Content, MiniWrap, Title } from "./style";

const MiniCard = () => {
  return (
    <MiniWrap>
      {dataAbout?.map((item, index) => (
        <Box key={index}>
          <Content>
            <a
              href="https://youtu.be/PvnZppH92nY?si=LOPiH-bYEhZYt0Iy"
              className="flex flex-col gap-[10px]"
            >
              <Title>{item?.name}</Title>
              <Title size="true">{item?.about}</Title>
              <Title.Item>{item?.date}</Title.Item>
            </a>
          </Content>
          <a href="https://youtu.be/PvnZppH92nY?si=LOPiH-bYEhZYt0Iy">
            <img src={item?.icons} />
          </a>
        </Box>
      ))}
    </MiniWrap>
  );
};

export default MiniCard;
