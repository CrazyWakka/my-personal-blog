import { MDXProvider } from "@mdx-js/react"
import MarkdownContent from "../mdx/about.mdx"
import Container from "../ui/Container"
import { Box, Grid } from "theme-ui"

const About = (props) => {
  return (
    <MDXProvider>
      <Container>
        <Grid>
          <Box sx={{}}>
            <MarkdownContent />
          </Box>
        </Grid>
      </Container>
    </MDXProvider>
  )
}

export default About
