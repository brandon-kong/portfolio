import * as React from "react"
import Navbar from "../components/Navbar"
import {Helmet} from "react-helmet"
import styled from "styled-components"

import Landing from "../components/Landing"

import "../css/root.css"
import "../css/landing.css"

// styles
const pageStyles = {
  color: "#232129",
  padding: 0,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  backgroundColor: "#000000",
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
    gap: 0px;
    grid-auto-rows: minmax(100px, auto);
`

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Helmet htmlAttributes={{lang: 'en',}}/>
      <title>Home Page</title>
      <Navbar isDark={true}/>
      <Container>
        <Landing>
        
        </Landing>
      </Container>
      
    </main>
  )
}

export default IndexPage
