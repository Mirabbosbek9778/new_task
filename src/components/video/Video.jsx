import SocialSets from "../generic/socialSets/SocialSets";
import { Container, Iframe, Wrapper } from "./style";

const Video = () => {
  return (
    <Wrapper>
      <Container>
        <div>
          <Iframe
            width="1051"
            height="473"
            src="https://www.youtube.com/embed/wDhqbOtXjdg?si=YjTDJqNPY1DS6Nvp"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></Iframe>
        </div>
        <SocialSets />
      </Container>
    </Wrapper>
  );
};

export default Video;
