import MDX from "@mdx-js/runtime"
import { Flex, Box, Heading, Text, Image, Card } from "theme-ui"
import Container from "../ui/Container"
import DraftBadge from "../ui/DraftBadge"
import Link from "next/link"
import { Link as A } from "theme-ui"

const Posts = ({ posts, prevPosts, nextPosts }) => {
  const isLocal = process.env.NODE_ENV === "development"

  return (
    <Container>
      {posts &&
        posts
          .filter((post) => {
            return isLocal || !post.draft
          })
          .map((post) => (
            <Box sx={{ pb: 5 }} key={post.slug}>
              <Heading sx={{ pb: 2, position: "relative" }}>
                {post.draft && <DraftBadge />}
                <Link href={"/" + post.slug} passHref>
                  <A
                    sx={{
                      textDecoration: "none",
                      color: "purple",
                    }}
                  >
                    {post.title}
                  </A>
                </Link>
              </Heading>
              {post.coverImage && (
                <Image
                  sx={{
                    mt: 2,
                    mb: 3,
                    border: "5px solid",
                    borderColor: "purple",
                  }}
                  height={post.coverImageHeight}
                  width={post.coverImageWidth}
                  src={post.coverImage}
                  alt={post.coverImageAlt || ""}
                />
              )}
              <Card sx={{ pb: 3, px: 3, boxShadow: "1px 2px 3px" }}>
                <MDX>{post.excerpt}</MDX>
              </Card>
              <Box sx={{ textAlign: "right" }}>
                <Link href={"/" + post.slug} passHref>
                  <A
                    sx={{
                      textDecoration: "none",
                      color: "purple",
                    }}
                  >
                    Read more...
                  </A>
                </Link>
              </Box>
            </Box>
          ))}
      <Flex sx={{ fontStyle: "italic" }}>
        <Box sx={{ width: "50%", py: 3, textAlign: "left" }}>
          {prevPosts !== null && (
            <Link href={"/blog/" + prevPosts} passHref>
              <a>« newer posts</a>
            </Link>
          )}
        </Box>
        <Box sx={{ width: "50%", py: 3, pr: 3, textAlign: "right" }}>
          {nextPosts !== null && (
            <Link href={"/blog/" + nextPosts} passHref>
              <a> older posts »</a>
            </Link>
          )}
        </Box>
      </Flex>
    </Container>
  )
}

export default Posts
