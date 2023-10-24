import { ButText, Butt } from "./style";

const Buttons = (props) => {
  return (
    <div>
      <Butt>
        <ButText>{props?.title}</ButText>
      </Butt>
    </div>
  );
};

export default Buttons;
