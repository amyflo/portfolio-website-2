import React from "react"
import { useState } from "react"
import {
  useColorMode,
  Box,
  Switch,
  HStack,
  Flex,
  Button,
  IconButton,
  Heading,
  Spacer,
} from "@chakra-ui/react"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"
import { Link } from "gatsby"

export default function Navigation() {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === "dark"
  const bgColor = { light: "white", dark: "gray.800" }
  const [display, changeDisplay] = useState("none")
  return (
    <Flex
      width="100%"
      bg={bgColor[colorMode]}
      mb="36"
      className="navigation-bar"
    >
      <Flex position="fixed" top="1rem" width="100%" align="center">
        <Box ml="8">
          <Link to="/">
            <Heading fontSize="lg">AMY F. LO</Heading>
          </Link>
        </Box>

        {/* Desktop */}
        <Spacer />
        <Flex mr="18" display={["none", "none", "flex", "flex"]}>
          <HStack spacing="18px">
            <Link to="/design">Design</Link>
            <Link to="/code">Code</Link>
            <a
              target="_blank"
              rel="noreferrer"
              href=" mailto:amyflo@stanford.edu"
            >
              Email
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href=" https://www.linkedin.com/in/amyflo/"
            >
              LinkedIn
            </a>

            <Link to="/resume">Resume</Link>
            <Link to="/about">About</Link>
          </HStack>
        </Flex>

        <Switch
          ml="2"
          mr="8"
          color="green"
          isChecked={isDark}
          onChange={toggleColorMode}
        />

        {/* Mobile */}
        <IconButton
          aria-label="Open Menu"
          mr="8"
          size="lg"
          icon={<HamburgerIcon />}
          onClick={() => changeDisplay("flex")}
          display={["flex", "flex", "none", "none"]}
        />
      </Flex>

      {/* Mobile Content */}
      <Flex
        w="100vw"
        display={display}
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
        bg={bgColor[colorMode]}
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            icon={<CloseIcon />}
            onClick={() => changeDisplay("none")}
          />
        </Flex>
        <Flex flexDir="column" align="center">
          <Link to="/">
            <Heading>Home</Heading>
          </Link>

          <Link to="/design">
            <Heading>Design</Heading>
          </Link>

          <Link to="/code">
            <Heading>Code</Heading>
          </Link>
          <a
            target="_blank"
            rel="noreferrer"
            href=" https://www.linkedin.com/in/amyflo/"
          >
            <Heading>LinkedIn</Heading>
          </a>
          <Link to="/resume">
            <Heading>Resume</Heading>
          </Link>
          <Link to="/about">
            <Heading>About</Heading>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  )
}
