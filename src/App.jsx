import { About, General, Navbar } from "./components/autoImports/Imports";
import Description from "./components/description/Description";
import Footer from "./components/footer/Footer";
import Video from "./components/video/Video";

const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <General />
      <Video />
      <Description />
      <Footer />
    </div>
  );
};

export default App;
