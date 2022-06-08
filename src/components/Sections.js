import React from "react"
import styled from "styled-components"
import FadeInSection from "./FadeSection"

const Container = styled.section`
    min-height: 300px;
    background-color: #000;

    padding-top: 3rem;
    padding-bottom: 3rem;

    width: 100%;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-items: center;
        min-height: 400px;
    }
`

const FlexDivContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 80%;
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-evenly;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-items: center;
        min-height: 300px;
    }
`

const TextHolder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;

    @media (max-width: 768px) {
        padding-bottom: 3rem;
        padding-top: 3rem
    }

`

const PrimaryText = styled.h1`
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-weight: 800;
    font-size: 75px;
    color: #ffd104;
    display: block;
    line-height: 5.5rem;
    text-align: center;
`

const LightText = styled.h2`
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-weight: 650;
    font-size: 30px;
    color: #fff;
    text-align: center;
    line-height: 2.3rem;
`

const SpanText = styled.span`
    color: #ffd104;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-weight: 650;
    font-size: 30px;
    text-align: center;
    line-height: 2.3rem;
`

function InfoFrame(props){
    return (
        <TextHolder>
            <PrimaryText className="unselectable">{props.stat}</PrimaryText>
            <LightText>{props.middle}
                <br/>
                <SpanText>{props.end}</SpanText>
            </LightText>
        </TextHolder>
    )
}

function Sections(props) {
    return (
            <Container>
                <FlexDivContainer>
                <FadeInSection>
                    <InfoFrame stat="25M+" middle="players" end="reached across games" />
                </FadeInSection>
                <FadeInSection style={{transitionDelay: '100ms'}}>
                    <InfoFrame stat="$+" middle="revenue" end="earned after getting hired" />
                </FadeInSection>
                </FlexDivContainer>
            </Container>
    )
}

export default Sections