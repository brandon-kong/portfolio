import React, { useState } from "react"
import Navbar from "../components/Navbar"
import {Helmet} from "react-helmet"
import styled from "styled-components"

import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

import Landing from "../components/Landing"
import Sections from "../components/Sections"
import StickySection from "../components/StickySection"

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
            <Navbar isDark={true} toggle={toggle} doesStick={true}/>
            <Landing/>
            <Sections/>
            <StickySection/>
            <Sections/>
            <Sections/>
            <Sections/>
      </Container>

      
    </main>
  )
}

export default IndexPage
