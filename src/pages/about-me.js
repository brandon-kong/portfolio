import React, { useState } from "react"
import Navbar from "../components/Navbar"
import {Helmet} from "react-helmet"
import styled from "styled-components"

import Slideshow from "../components/QuoteSection"
import { HeroContainer, FlexImageContainer, HeroParagraph, ParagraphContainer } from "../components/about-me/Hero"
import { ExperienceContainer, ExperienceItemContainer, SectionFlexDiv, SectionTitle, ExperienceList, ExperienceItem, Achievement } from "../components/about-me/Experience"

import { FadeInSection } from "../components/FadeSection"

import Footer from "../components/Footer"

import { StaticImage } from "gatsby-plugin-image"


import "../css/root.css"
import "../css/landing.css"

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

const Heading = styled.h2`
    text-align: center;
    font-size: 1.3rem;
    font-weight: 1;
    padding-top: 2rem;
    padding-bottom: 2rem;
    background-color: inherit;
`

const Link = styled.a`
  text-decoration: none;
  color: #c9a500;
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
                <Heading>Education</Heading>

                <ExperienceItemContainer>

                <FadeInSection>
                  <SectionFlexDiv>
                    <SectionTitle>Education</SectionTitle>
                    <ExperienceList>
                      <ExperienceItem title="Valencia High School" degree="High school diploma" year="2021-2022" />
                      <ExperienceItem title="DePaul University" degree="Bachelor's degree in Computer Science" year="Currently attending: 2022-2026" />
                    </ExperienceList>

                  </SectionFlexDiv>
                  </FadeInSection>

                  <FadeInSection style={{transitionDelay: '200ms'}}>
                  <SectionFlexDiv>
                    <SectionTitle>Achievements</SectionTitle>

                    <ExperienceList>
                      <Achievement>HarvardX Web Programming Certificate</Achievement>
                      <Achievement><Link href="https://www.harmonybites.org/">Harmony Bites</Link> Youth Internship Certificate</Achievement>
                      <Achievement>Information and Communication Technologies Career Pathway Certificate</Achievement>
                      <Achievement>DECA State Qualifier</Achievement>
                    </ExperienceList>
                    <ExperienceList>
                      

                    </ExperienceList>
                    
                  </SectionFlexDiv>
                </FadeInSection>

                <FadeInSection style={{transitionDelay: '400ms'}}>
                  <SectionFlexDiv>
                    <SectionTitle>Experience</SectionTitle>
                    <ExperienceList>
                      <ExperienceItem title="Blox Universe" degree="Lead Game Programmer & Developer" year="May 2021 - September 2021" />
                      <ExperienceItem title="JD (Joven)" degree="Lead Game Programmer & Developer" year="April 2021 - August 2022" href="https://www.youtube.com/c/JDRBX"/>
                    </ExperienceList>
                  </SectionFlexDiv>
                </FadeInSection>

                </ExperienceItemContainer>

            </ExperienceContainer>

            <main style={darkPageStyles}>
              <FadeInSection>
                <Slideshow/>
              </FadeInSection>
              <Footer />
            </main>
      </Container>

      
    </main>
  )
}

export default IndexPage
