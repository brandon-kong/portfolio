import React from "react"
import styled from "styled-components"

export const ExperienceContainer = styled.section`
    min-height: 300px;
    padding-top: 3rem;
    padding-bottom: 3rem;
    background-color: #fff;

    width: 100%;
`

export const ExperienceItemContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    padding-top: 5rem;
    padding-bottom: 5rem;

    @media (max-width: 850px) {
        flex-direction: column;
        align-items: center;
    }
`

export const SectionFlexDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 1rem;
    padding-bottom: 1rem;


    padding-left: 1em;
    padding-right: 1em;
`

export const SectionTitle = styled.h2`
    color: black;
    padding-bottom: 3rem;

    @media (max-width: 768px) {
        padding-bottom: 2rem;
`

export const ExperienceList = styled.ul`
    list-style: none;
`

export const Achievement = styled.p`
    font-size: 1.1rem;
    text-align: center;
    padding-bottom: 1.5rem;
`

const ExperienceItemLi = styled.li`
    display: flex;
    flex-direction: column;
    padding-bottom: 3rem;
    align-items: center;
`

const ExperienceTitle = styled.h2`
    font-size: 1.3rem;
    font-weight: 500;
    padding-bottom: 1rem;
    text-align: center;
    letter-spacing: 1px;
`

const ExperienceLink = styled.a`
    font-size: 1.3rem;
    font-weight: 500;
    padding-bottom: 1rem;
    letter-spacing: 1px;
    text-decoration: none;
    color: #c9a500;
`

const ExperienceDegree = styled.p`
    font-size: 1.1rem;
    text-align: center;
    padding-bottom: .5rem;
`

const YearOfAchievement = styled.p`
    font-size: 1.1rem;
    text-align: center;
`



export const ExperienceItem = function(props) {
    return (
        <ExperienceItemLi>
            {
                props.href ? (
                    <ExperienceLink href={props.href}>{props.title}</ExperienceLink>
                ) : (
                    <ExperienceTitle>{props.title}</ExperienceTitle>
                )
            }
            <ExperienceDegree>{props.degree}</ExperienceDegree>
            <YearOfAchievement>{props.year}</YearOfAchievement>
        </ExperienceItemLi>
    )
}