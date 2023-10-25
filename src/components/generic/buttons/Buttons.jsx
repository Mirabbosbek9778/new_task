/* eslint-disable react/prop-types */
import { ButText, Butt } from "./style";

const Buttons = (props) => {
  return (
    <div>
      <a href="https://camon.uz/uz/member/alisher-rustamov/">
        <Butt className="cursor-pointer">
          <ButText>{props?.title}</ButText>
        </Butt>
      </a>
    </div>
  );
};

export default Buttons;
