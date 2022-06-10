import React, { useState } from "react"
import Navbar from "../../components/Navbar"
import {Helmet} from "react-helmet"
import styled from "styled-components"

import Slideshow from "../../components/QuoteSection"
import { HeroContainer, FlexImageContainer, HeroParagraph, ParagraphContainer } from "../../components/about-me/Hero"
import { ExperienceContainer, ExperienceItemContainer, SectionFlexDiv, SectionTitle, ExperienceList, ExperienceItem, Achievement } from "../../components/about-me/Experience"

import { FadeInSection } from "../../components/FadeSection"

import Footer from "../../components/Footer"

import { StaticImage } from "gatsby-plugin-image"


import "../../css/root.css"
import "../../css/landing.css"

// styles
const pageStyles = {
  color: "#232129",
  padding: 0,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  backgroundColor: "rgb(230, 230, 230)",
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
    background-color: inherit;
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
            <Navbar isDark={false} toggle={toggle}></Navbar>
            <Footer />
      </Container>

      
    </main>
  )
}

export default IndexPage
