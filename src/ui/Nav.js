import { useRouter } from "next/router"
import { Box } from "theme-ui"
import NavLink from "./NavLink"

const Nav = (props) => {
  const router = useRouter()
  return (
    <Box
      as="nav"
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <NavLink href="/blog" active={router.pathname.includes("/blog")}>
        Blog
      </NavLink>
      <NavLink href="/about" active={router.pathname === "/about"}>
        About
      </NavLink>
      <NavLink href="/portfolio" active={router.pathname === "/portfolio"}>
        Portfolio
      </NavLink>
    </Box>
  )
}

export default Nav
