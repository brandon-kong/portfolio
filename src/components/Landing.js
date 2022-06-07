import React, { } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";

import B from "../images/hero-image.svg"
  

const LandingDiv = styled.div`
    max-width: 1000px;
    margin: auto;
    min-height: 600px;
    background-color: #000;

    padding-top: 3em;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    
    align-content: center;
    align-items: center;
    justify-items: start;
    padding-left: 20px;
    padding-right: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-items: center;
        min-height: 600px;
    }

`

const TextDiv = styled.div`
    max-width: 500px;
`

const WelcomeText = styled.h2`
    
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-weight: 650;
    color: #ffd104;
    font-size: 1.5em;
    text-align: left;

    @media (max-width: 768px) {
        text-align: center;
    }

    margin: .5em 0 .5em 0;
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

    margin: .5em 0 .5em 0;
`

const BottomText = styled.p`
    grid-column: 1;
    grid-row: 3 ;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    color: white;
    font-size: 1.2rem;
    line-height: 2rem;
    text-align: left;

    @media (max-width: 768px) {
        text-align: center;
    }

    margin: .5em 0 .5em 0;
`

const ImgDiv = styled.div`
    padding-left: 1rem;
    padding-right: 1rem;
`

const PrimaryText = {
    color: "#ffd104",
}

const BoldedParagraph = {
    color: "rgb(130, 130, 130)",
}

const StyledGithub = styled(FaGithub)`
    color: white;
    transition: color 250ms;

    &:hover {
        color: rgb(255, 244, 194);
    }
`
const StyledLinkedin = styled(FaLinkedin)`
    color: white;
    transition: color 250ms;

    &:hover {
        color: rgb(255, 244, 194);
    }
`

const Button = styled(Link)`

    display: flex;
    justify-content: center;
    align-items: center;
    
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-size: 1.125rem;
    font-weight: 600;


    box-sizing: border-box;
    text-decoration: none;
    color: white;
    padding: 0.5rem 1.25rem;
    min-height: 3rem;
    min-width: 3rem;

    border-radius: 8px;
    background-color: #dbb300;
    margin: 2em 0 2em 0;

    @media (max-width: 768px) {
        margin 2em auto;
    }

    transition: background-color 250ms;

    &:hover {
        background-color: #c9a500;
    }
`

const BottomOverlay = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`
const LineItem = styled.div`
    padding-left: 1em;

    @media (max-width: 768px) {
        padding-right: 0.7em;
        padding-left: 0.7em;
    }
`

const Overlays = styled.div`
    display: flex;
    flex-direction: row;
`

function GithubOverlay(props){
    return (
        <a href={props.to}>
            <StyledGithub fontSize="2rem"/>
        </a>
    )
}

function LinkedinOverlay(props){
    return (
        <a href={props.to}>
            <StyledLinkedin fontSize="2rem"/>
        </a>
    )
}

const ImgStyles = {
    overflow: 'visible',
    width: 'auto',
}

function ImgGrid(props) {
    return (
        <ImgDiv>
            <B height={400} width={370} style={ImgStyles}/>
        </ImgDiv>
    )
}

function Landing(props) {
    return (
        <LandingDiv>
            <TextDiv>
                <WelcomeText>Hello!</WelcomeText>
                <MainText>I'm Brandon Kong, a <span style={PrimaryText}>full stack developer</span></MainText>
                <BottomText>I'm an 18 year old versatile developer with over 6 years of experience in fields ranging from <b style={BoldedParagraph}>game development,</b> <b style={BoldedParagraph}>web development,</b> and <b style={BoldedParagraph}>software development.</b></BottomText>
                <BottomOverlay>
                    <Button to="/">Portfolio</Button>
                    <Overlays>
                        <LineItem>
                            <GithubOverlay to="https://github.com/brandon-kong"/>
                        </LineItem>
                        <LineItem>
                            <LinkedinOverlay to="https://www.linkedin.com/in/brandon-kong0/"/>
                        </LineItem>
                    </Overlays>
                    
                </BottomOverlay>
            </TextDiv>
           
            <ImgGrid/>
            
        </LandingDiv>
    )
}

export default Landing