import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const PortfolioHeroContainer = styled.section`
    width: 100%;

    min-height: 400px;

    padding-top: 3rem;
    padding-bottom: 3rem;
`

export const PortfolioItemContainer = styled.div`
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    
    display: flex;
    justify-content: center;

    gap: 3rem;
    overflow: hidden;

    @media (max-width: 768px) {
        align-items: center;
        flex-direction: column;
    }
`

export const ImageContainer = styled(Link)`
    overflow: hidden;
    border-radius: 1rem;
    position: relative;
`

export const TopBorder = styled.div`
    position: absolute;
    z-index: 100;
    text-align: center;
    width: 100%;
    min-height: 75px;

    background-color: rgba(0, 0, 0, 0.2);
    
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: white;
    font-weight: 600;

`