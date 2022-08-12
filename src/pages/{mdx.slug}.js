import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import ScrollToTop from "react-scroll-to-top"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { ChakraProvider, Text, Container, Heading } from "@chakra-ui/react"
import Navigation from "../components/nav"
import Seo from "../components/seo"

export default function post({ data }) {
  let post = data.mdx
  return (
    <ChakraProvider>
      <Seo
        description={post.frontmatter.description}
        lang="en"
        title={post.frontmatter.title}
      />
      <ScrollToTop
        style={{ backgroundColor: "#1a202c70", boxShadow: "none" }}
        color="white"
        width="40"
      />
      <Navigation />
      <Container maxW="container.xl">
        <Heading mt="12" style={{ fontWeight: 400 }} textStyle="h2" size="xl">
          {post.frontmatter.description}
        </Heading>
        <Text mb="12">
          {post.timeToRead + 3} min read • Last updated {post.frontmatter.date}
        </Text>
        <GatsbyImage
          style={{ margin: "auto" }}
          layout="fullWidth"
          image={getImage(post.frontmatter.hero_image)}
          alt={post.frontmatter.hero_image_alt}
        />
      </Container>
      <Container maxW="container.lg">
        <MDXRenderer localImages={post.frontmatter.embeddedImagesLocal}>
          {post.body}
        </MDXRenderer>
      </Container>
    </ChakraProvider>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      body
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        hero_image_alt
        role
        team
        tools
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        embeddedImagesLocal {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
