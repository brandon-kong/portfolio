import React, { useState } from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
  

const LandingDiv = styled.div`
    max-width: 1000px;
    margin: auto;
    min-height: 700px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    grid-auto-rows: minmax(90px, 90px);
    align-content: center;
    align-items: center;
    justify-items: start;
    padding-left: 20px;
    padding-right: 20px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        justify-items: center;
    }
`

const WelcomeDiv = styled.div`
    display: flex;
    grid-column: 1;
    grid-row: 1;
`

const WelcomeText = styled.h2`
    grid-column: 1;
    grid-row: 1;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-weight: 650;
    color: #ffd104;
    font-size: 1.5em;
    text-align: left;
`

const MainText = styled.h1`
    grid-column: 1;
    grid-row: 2;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-weight: 700;
    color: white;
    font-size: 2rem;

    @media (max-width: 768px) {
        text-align: center;
    }
`

const BottomText = styled.p`
    grid-column: 1;
    grid-row: 3 ;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    color: white;
    font-size: 1.2rem;
    line-height: 1.7rem;

    @media (max-width: 768px) {
        text-align: center;
    }
`

const BlobStyle = styled.div`
    grid-column: 2;
    grid-row: 2;

    @media (max-width: 768px) {
        grid-column: 1;
        grid-row: 6
    }
`

const PortraitStyle = styled.div`
    grid-column: 2;
    grid-row: 2;

    @media (max-width: 768px) {
        grid-column: 1;
        grid-row: 6
    }
`

const PrimaryText = {
    color: "#ffd104",
}

const BoldedParagraph = {
    color: "rgb(130, 130, 130)",
}

function ImgGrid(props) {
    return (
        <BlobStyle>
            <StaticImage className="unselectable" src="../images/blob-haikei.png" height={550} width={550}/>
        </BlobStyle>
    )
}

function ImgGridFace(props){
    return (
        <PortraitStyle>
            <StaticImage className="unselectable" src="../images/me.png" height={200} width={220} alt="picture of me"/>
        </PortraitStyle>
    )
}

function Landing(props) {
    return (
        <LandingDiv>
            <WelcomeDiv>
                <WelcomeText>Hello!</WelcomeText>
            </WelcomeDiv>
            <MainText>I'm Brandon Kong, a <span style={PrimaryText}>full stack developer</span></MainText>
            <BottomText>I'm an 18 year old versatile developer with over 6 years of experience in fields ranging from <b style={BoldedParagraph}>game development</b> to <b style={BoldedParagraph}>web development</b> to <b style={BoldedParagraph}>software development</b></BottomText>
            <ImgGrid src="../images/blob-haikei.png"/>
            
        </LandingDiv>
    )
}

export default Landing