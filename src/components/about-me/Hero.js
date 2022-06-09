import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

export const HeroContainer = styled.section`
    min-height: 300px;
    padding-top: 3rem;
    padding-bottom: 5rem;

    width: 100%;
    background-color: rgb(230, 230, 230);
`

export const FlexImageContainer = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }

`

export const ParagraphContainer = styled.div`

    padding-left: 5rem;
    padding-right: 5rem;
    max-width: 45ch;

    @media (max-width: 768px) {
        padding-top: 1rem;
    }
`

export const HeroParagraph = styled.p`
    color: black;
    font-size: 1.1rem;

    padding-bottom: 1rem;
    padding-top: 1rem;
    line-height: 1.8rem;
`