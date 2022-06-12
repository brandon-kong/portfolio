import React, { useState } from "react"
import Navbar from "../../components/Navbar"
import {Helmet} from "react-helmet"
import styled from "styled-components"

import Footer from "../../components/Footer"

import { PortfolioHeroContainer, ImageContainer, PortfolioItemContainer, TopBorder } from "../../components/portfolio/Hero"
import { StaticImage } from "gatsby-plugin-image"

import "../../css/root.css"

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
    gap: 2px;
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
            <PortfolioHeroContainer>
              <PortfolioItemContainer>
                <ImageContainer to="/portfolio/web-design">
                  <TopBorder>Web Design</TopBorder>
                  <StaticImage src="../../images/web-design.png" layout="constrained" className="zoomImg" />
                </ImageContainer>

                <ImageContainer to="/portfolio/hardware">
                <TopBorder>Hardware</TopBorder>
                  <StaticImage src="../../images/hardware.jpg" layout="constrained" className="zoomImg" />
                </ImageContainer>

                <ImageContainer to="/portfolio/games">
                <TopBorder>Game Design</TopBorder>
                  <StaticImage src="../../images/game.jpg" layout="constrained" className="zoomImg" />
                </ImageContainer>
              </PortfolioItemContainer>
            </PortfolioHeroContainer>
            <Footer />
      </Container>

      
    </main>
  )
}

export default IndexPage
