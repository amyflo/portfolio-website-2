import * as React from "react"
import { Container, Heading } from "@chakra-ui/react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

function Hero() {
  return (
    <Container mt="24" mb="24" maxW="container.lg">
      <StaticImage src="./smile.png" alt="smiley face" />
      <Heading lineHeight="130%" size="xl" fontWeight={400}>
        Amy is a designer and developer obssessed with design systems,
        decision-making, and the brain. She studies psychology and computer
        science at Stanford. Currently, she works on a frontend team at{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href=" https://www.accenture.com/us-en/about/accenture-song-index"
        >
          Accenture Song
        </a>
        .
      </Heading>
    </Container>
  )
}

export default Hero
