import React from "react"
import styled from "styled-components"

export const PortfolioHeroContainer = styled.section`
    width: 80%;
    margin: auto;
    display: grid;
    min-height: 400px;


    padding-top: 3rem;
    padding-bottom: 3rem;

    justify-content: center;

    grid-template-columns: repeat(3, 33%);
    gap: 2rem;

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 400px);
    }
`

export const ImageContainer = styled.div`
    overflow: hidden;
    max-width: 500px;
    border-radius: 1rem;
`

