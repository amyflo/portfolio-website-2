import * as React from "react"
import "./layout.module.css"
import ScrollToTop from "react-scroll-to-top"
import { ChakraProvider } from "@chakra-ui/react"
import Navigation from "./nav"

export default function Layout({ children }) {
  return (
    <ChakraProvider>
      <ScrollToTop
        style={{ backgroundColor: "#1a202c70", boxShadow: "none" }}
        color="white"
        width="40"
      />
      <Navigation />
      {children}
    </ChakraProvider>
  )
}
