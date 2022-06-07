import * as React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const LandingDiv = styled.div`
    max-width: 1000px;
    margin: auto;
    min-height: 700px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    grid-auto-rows: minmax(30px, auto);
    align-content: center;
    align-items: center;
`
const WelcomeText = styled.h2`
    grid-column: 1;
    grid-row: 1;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-weight: 650;
    color: #ffd104;
    font-size: 1.5em;
`

const MainText = styled.h1`
    grid-column: 1;
    grid-row: 2;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-weight: 700;
    color: white;
    font-size: 2rem;
`

const BottomText = styled.p`
    grid-column: 1;
    grid-row: 3;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    color: white;
    font-size: 1.2rem;
`

const Blob = styled(StaticImage)`
    grid-column: 2;
    grid-row: 1 / 3;
    
`

const PrimaryText = {
    color: "#ffd104",
}

const BoldedParagraph = {
    color: "rgb(130, 130, 130)",
}

function Landing(props) {
    return (
        <LandingDiv>
            <WelcomeText>Hello!</WelcomeText>
            <MainText>I'm Brandon Kong, a <span style={PrimaryText}>full stack developer</span></MainText>
            <BottomText>I'm an 18 year old versatile developer with over 6 years of experience in fields ranging from <b style={BoldedParagraph}>game development</b> to <b style={BoldedParagraph}>web development</b> to <b style={BoldedParagraph}>software development</b></BottomText>
            <Blob src="../images/blob-haikei.png"></Blob>
        </LandingDiv>
    )
}

export default Landing