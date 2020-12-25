import { Box, Text } from "theme-ui"

const Footer = (props) => (
  <Box
    sx={{
      p: 4,
      color: "#666",
      textAlign: "center",
      fontSize: 1,
    }}
  >
    <Text sx={{ mx: 3, display: "inline-block" }}>Andy Guice, 2020</Text>
    <Text sx={{ mx: 3, display: "inline-block" }}>All Rights Reserved</Text>
  </Box>
)

export default Footer
