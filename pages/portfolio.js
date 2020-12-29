import Wrapper from "../src/layout/Wrapper"
import About from "../src/views/About"
import config from "../blog.config.js"

const AboutPage = () => (
  <Wrapper url="/portfolio" title={config.title + " | Portfolio"}>
    Portfolio
  </Wrapper>
)

export default AboutPage
