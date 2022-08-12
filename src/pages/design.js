import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import { Container, Heading } from "@chakra-ui/react"
import PageItem from "../components/pageItem"

export default function Design({ data }) {
  return (
    <Layout>
      <Seo
        description="Amy is a designer and developer obssessed with design systems,
          decision-making, and the brain. She studies psychology and computer
          science at Stanford."
        lang="en"
        title="Design"
      />

      <Container maxW="container.xl">
        <Heading lineHeight="130%" size="xl" fontWeight={400}>
          Design Projects
        </Heading>
        {data.allMdx.nodes.map(node => (
          <PageItem
            title={node.frontmatter.title}
            id={node.id}
            external_link={node.frontmatter.external_link}
            external_title={node.frontmatter.external_title}
            slug={node.slug}
            description={node.frontmatter.description}
          >
            <GatsbyImage
              layout="fullHeight"
              objectFit={"cover"}
              image={getImage(node.frontmatter.hero_image)}
              alt={node.frontmatter.hero_image_alt}
            />
          </PageItem>
        ))}
      </Container>
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(sort: { fields: [frontmatter___date], order: [DESC] },
      filter: { frontmatter: { tags: { in: "design" } } }) {
      nodes {
        id
        body
        frontmatter {
          description
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
          hero_image_alt
          role
          slug
          team
          external_link
          external_title
          title
          tools
          tags
        }
        slug
      }
    }
  }
`
