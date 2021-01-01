import { useEffect, useState } from "react"
// import { Box, useColorMode } from "theme-ui"
import Button from "./Button"
import { IconButton } from "theme-ui"

const ThemeToggle = (props) => {
  // const [colorMode, setColorMode] = useColorMode()
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    // fade in animation
    setOpacity(1)
  }, [])

  return (
    <div>Theme thing</div>
    // <Box
    //   sx={{
    //     p: 3,
    //     position: "absolute",
    //     top: 0,
    //     right: 0,
    //     opacity,
    //     transition: "opacity .25s ease-in-out",
    //   }}
    // >
    //   <Button
    //     sx={{ bg: "gray", py: 1, px: 2, fontSize: 0 }}
    //     onClick={(e) => {
    //       setColorMode(colorMode === "default" ? "dark" : "default")
    //     }}
    //   >
    //     {colorMode === "default" ? "dark" : "light"} theme
    //   </Button>
    // </Box>
  )
}

export default ThemeToggle
