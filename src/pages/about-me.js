import React, { useState } from "react"
import Navbar from "../components/Navbar"
import {Helmet} from "react-helmet"
import styled from "styled-components"

import { HeroContainer, FlexImageContainer, HeroParagraph, ParagraphContainer } from "../components/about-me/Hero"
import { ExperienceContainer } from "../components/about-me/Experience"

import Footer from "../components/Footer"

import { StaticImage } from "gatsby-plugin-image"


import "../css/root.css"

// styles
const pageStyles = {
  color: "#232129",
  padding: 0,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  backgroundColor: "rgb(230, 230, 230)",
  width: '100%',

}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
    gap: 0px;
    grid-auto-rows: minmax(100px, auto);
`

const Heading = styled.h2`
    text-align: center;
    font-size: 1.3rem;
    font-weight: 1;
    padding-top: 2rem;
    padding-bottom: 2rem;
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
            <Heading>About Me</Heading>

            <HeroContainer>
                <FlexImageContainer>
                    <StaticImage src="../images/me.png" height={300}/>
                    <ParagraphContainer>
                        <HeroParagraph>My first ever experience with programming began in 6th grade after my curiosity about the AI technology in FIFA 15 sprouted. 
                            Since then, I have been living and breathing everything relating to technology and code. I am currently pursuing a Bachelors in
                            Computer Science at my university.
                        </HeroParagraph>

                        <HeroParagraph>
                            In my work, I absolutely love to throw my fueling passion for problem-solving and modularity into the work environment. I don't have 
                            all the answers to every problem I face, but the determination I hold for learning and developing a mindset around the problem ultimately
                            illustrates my skill in the field.
                        </HeroParagraph>
                    </ParagraphContainer>
                </FlexImageContainer>
            </HeroContainer>

            <ExperienceContainer>
                <Heading>Experience</Heading>


            </ExperienceContainer>
            <Footer />
      </Container>

      
    </main>
  )
}

export default IndexPage
