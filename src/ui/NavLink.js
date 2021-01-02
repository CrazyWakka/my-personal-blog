import { Link as A } from "theme-ui"
import Link from "next/link"

const NavLink = ({ href, active, children }) => (
  <Link href={href}>
    <A
      sx={{
        py: [2, 3],
        px: [3, 4],
        fontSize: 3,
        fontWeight: 400,
        display: "inline-block",
        opacity: active ? "70%" : "",
        backgroundColor: active ? "#bbbbbb" : "#444444",
        color: active ? "primary" : "white",
        textDecoration: "none",
        cursor: "pointer",
        transition: "border-color .5s",
        "&:hover": {
          background: active ? "" : "#990350",
        },
      }}
    >
      {children}
    </A>
  </Link>
)

export default NavLink
