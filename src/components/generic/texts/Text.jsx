/* eslint-disable react/prop-types */
import { H1 } from "./style";

const GenericText = (props) => {
  return (
    <div>
      <H1>{props?.title}</H1>
    </div>
  );
};

export default GenericText;
