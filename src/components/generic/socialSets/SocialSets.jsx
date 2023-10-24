import { dataSocial } from "../../../mock/dataSocial";
import { BigText } from "../cards/style";
import { Box } from "./style";

const SocialSets = () => {
  return (
    <div className="flex flex-col gap-2">
      <BigText>Ijtimoiy tarmoqlar</BigText>
      {dataSocial?.map((item, index) => (
        <Box key={index}>
          <img src={item?.icons} />
          <h1>{item?.name}</h1>
        </Box>
      ))}
    </div>
  );
};

export default SocialSets;
