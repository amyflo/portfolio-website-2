import React from "react"
import { Link } from "gatsby"
import {
  GridItem,
  Center,
  Heading,
  SimpleGrid,
  Text,
  Stack,
  Button,
} from "@chakra-ui/react"

export default function PageItem(props) {
  return (
    <article key={props.id}>
      <SimpleGrid mb="12" columns={[1, 1, 1, 2]} spacing={[0, 6, 12]}>
        <GridItem>
          {props.children}
        </GridItem>
        <GridItem mb="6" padding={[3, 3, 8]}>
          <Heading size="lg">
            <Link to={`/${props.slug}`}>{props.title}</Link>
          </Heading>
          <p>{props.description}</p>

          <Stack
            direction={["column", "column", "row"]}
            spacing={4}
            align="center"
          >
            <Button colorScheme="blue">
              <Link to={`/${props.slug}`}>Read case study</Link>
            </Button>
            <Button colorScheme="blue" variant="outline">
              <a href={props.external_link}>
                <Text>{props.external_title}</Text>
              </a>
            </Button>
          </Stack>
        </GridItem>
      </SimpleGrid>
    </article>
  )
}
