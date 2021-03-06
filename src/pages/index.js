import React, { useState } from "react"
import Navbar from "../components/Navbar"
import {Helmet} from "react-helmet"
import styled from "styled-components"

import Landing from "../components/Landing"
import { SectionContainer, FlexDivContainer, InfoFrame } from "../components/Sections"
import StickySection from "../components/StickySection"
import Footer from "../components/Footer"
import Slideshow from "../components/QuoteSection"

import {FadeInSection} from "../components/FadeSection"


import "../css/root.css"
import "../css/landing.css"

// styles
const pageStyles = {
  color: "#232129",
  padding: 0,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  backgroundColor: "#000000",
  width: '100%',

}

const darkPageStyles = {
  backgroundColor: "rgb(0, 0, 0)",
}

const Container = styled.div`
  
  display: grid;
  grid-template-columns: repeat(1, 1fr);
    gap: 0px;
    grid-auto-rows: minmax(100px, auto);
`

// markup
const IndexPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <main style={pageStyles} className="outer-container">
      <Helmet htmlAttributes={{lang: 'en',}}/>
      <title>Home Page</title>
      
      <Container>
            <Navbar isDark={true} toggle={toggle}></Navbar>
            <Landing/>

            <SectionContainer>
                <FlexDivContainer>
                  <FadeInSection>
                      <InfoFrame stat="25M+" middle="players" end="reached across my games" />
                  </FadeInSection>
                  <FadeInSection style={{transitionDelay: '100ms'}}>
                      <InfoFrame stat="6+" middle="years" end="of interdisciplinary development" />
                  </FadeInSection>
                </FlexDivContainer>
            </SectionContainer>


            <StickySection/>

            <FadeInSection>
              <Slideshow/>
            </FadeInSection>
            <main style={darkPageStyles}>
            <Footer/>
            </main>
      </Container>

      
    </main>
  )
}

export default IndexPage
