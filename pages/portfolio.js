import Wrapper from "../src/layout/Wrapper"
import Portfolio from "../src/views/Portfolio"
import config from "../blog.config.js"

const PortfolioPage = () => (
  <Wrapper url="/portfolio" title={config.title + " | Portfolio"}>
    <Portfolio />
  </Wrapper>
)

export default PortfolioPage
