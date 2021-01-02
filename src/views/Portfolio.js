import React from "react"
import Container from "../ui/Container"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { Box, Image } from "theme-ui"

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

const Portfolio = (props) => {
  return (
    <Container>
      <Box sx={{ p: 3, m: 3, fontSize: 4, textAlign: "center" }}>
        Some of my creations
      </Box>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={5000}
        ssr={true}
        infinite={true}
      >
        <Image src="img/blog/washer_dryer_platform.JPG"></Image>
        <Image src="img/blog/standing_desk.JPG"></Image>
        <Image src="img/blog/wall_clamp_storage.JPG"></Image>
        <Image src="img/blog/multi_tier_corner_shelf.JPG"></Image>
        <Image src="img/blog/fallout_shelf_after_stain.JPG"></Image>
        <Image src="img/blog/printer_cart_final.JPG"></Image>
        <Image src="img/blog/guest_bathroom_shelf.JPG"></Image>
      </Carousel>
    </Container>
  )
}

export default Portfolio
