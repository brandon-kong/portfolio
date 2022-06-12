import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";

const IconStyles = {
    fontSize: '2.2rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
}

const IconLink = styled.a`
    transition: color 250ms;
    color: rgb(200, 200, 200);
`

const FooterContainer = styled.section`
    min-height: 200px;
    background-color: rgb(15, 15, 15);

    padding-top: 3rem;

    margin-left: auto;
    margin-right: auto;
    width: 90%;
    
    
`

const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

const FooterNavContainer = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-around;

   margin-left: auto;
   margin-right: auto;

   min-height: 200px;

   @media (max-width: 960px) {
       align-items: center;
    flex-direction: column;
}

`

const Middle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content; space-between;
    align-items: center;
    padding: 0.5rem 1.25rem;

    @media (max-width: 960px) {
        margin: 1em 0 1em 0;
     }
`

const End = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 960px) {
        margin: 1em 0 1em 0;
     }
`

const Button = styled(Link)`

    display: flex;
    justify-content: center;
    align-items: center;
    
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-size: 1.1rem;
    font-weight: 300;


    box-sizing: border-box;
    text-decoration: none;
    color: white;
    padding: 0.5rem 1.25rem;

    min-height: 2rem;
    width: 100%;
    max-width: 20rem;
    letter-spacing: 3px;

    border-radius: 20px;
    border: 1px solid rgb(40, 40, 40);

    transition: background-color 250ms;

    &:hover {
        background-color: #c9a500;
    }

    @media (max-width: 960px) {
        margin: 1em 0 2em 0;
     }
`

const FooterLink = styled(Link)`
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-weight: 300;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1.3rem;
    letter-spacing: 3px;
    text-decoration: none;
`

const ImageHolder = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

     @media (max-width: 960px) {
        margin: 1em 0 1em 0;
     }
`

const Break = styled.hr`
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    border: none;
    border-top: 1px solid rgb(40, 40, 40);
`

const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-height: 75px;
    
    margin-top: auto;
    margin-bottom: auto;
`

function Footer(props) {
    return (
        <FooterContainer>
            <FooterNavContainer>
                <ImageHolder onClick={scrollToTop}>
                    <StaticImage className="unselectable" src="../images/logo-white.png" height={30} alt="brandon kong brand text" placeholder="none"></StaticImage>
                </ImageHolder>
                <Middle>
                    <FooterLink to="/about">About</FooterLink>
                    <FooterLink to="/portfolio">Portfolio</FooterLink>
                </Middle>
                <End>
                    <Button to="/contact">Contact Me</Button>
                </End>
            </FooterNavContainer>
            <Break/>
            <IconContainer>
                <IconLink href="https://github.com/brandon-kong" className="icon">
                    <FaGithub style={IconStyles}/>
                </IconLink>
                <IconLink href="https://www.linkedin.com/in/brandon-kong0/" className="icon">
                    <FaLinkedin style={IconStyles}/>
                </IconLink>
                <IconLink href="/" className="icon">
                    <FaFacebook style={IconStyles}/>
                </IconLink>
                
            </IconContainer>
        </FooterContainer>
    )
}

export default Footer