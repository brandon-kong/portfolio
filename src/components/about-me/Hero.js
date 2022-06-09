import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

export const HeroContainer = styled.section`
    min-height: 300px;
    padding-top: 3rem;
    padding-bottom: 3rem;

    width: 100%;
`

export const FlexImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`

export const ParagraphContainer = styled.div`

    padding-left: 5rem;
    padding-right: 5rem;
    max-width: 45ch;
`

export const HeroParagraph = styled.p`
    color: black;
    font-size: 1.1rem;

    padding-bottom: 1rem;
    padding-top: 1rem;
    line-height: 1.8rem;
`