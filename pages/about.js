import Wrapper from "../src/layout/Wrapper"
import About from "../src/views/About"
import config from "../blog.config.js"

const AboutPage = () => (
  <Wrapper url="/about" title={config.title + " | About"}>
    <About />
  </Wrapper>
)

export default AboutPage
