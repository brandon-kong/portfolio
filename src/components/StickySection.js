import React from "react"
import StickyBox from "react-sticky-box";
import styled from "styled-components"

const Container = styled.section`
    background-color: white;
    padding-top: 3rem;
    padding-bottom: 3rem;

    padding-left: 3em;
    padding-right: 3em;
`

const ItemContainer = styled.div`
    width: 90%;
    margin: auto;
    display: flex;
    align-items: flex-start;
    justify-content: center;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`

const StickyText = styled.h2`
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-weight: 700;
    color: #000;
    font-size: 3rem;
    text-align: left;
    width: 80%;
    padding-top: 10rem;
    padding-bottom: 18rem;

    @media (max-width: 768px) {
        padding-top: 1rem;
        padding-bottom: 2rem;
    }

`

const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const ListDiv = styled.div`
    width: 100%;
    padding-top: 2rem;
    padding-bottom: 2rem;

`

const ListNumber = styled.h1`
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-size: 8rem;
    font-weight: 700;
    color: #000;
`

const ListTitle = styled.h2`
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-size: 3rem;
    font-weight: 500;
    color: #000;
`

const ListDescription = styled.p`
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-size: 2rem;
    font-weight: 300;
    color: #000;
`

const BreakPoint = styled.hr`
    border-top: 1px solid black;
`

function NumberedList(props) {
    return (
        <ListDiv>
            <ListNumber>{props.num}</ListNumber>
            <ListTitle>Communication & trust are core principles</ListTitle>
            <ListDescription>An integral part of our well-defined process are our workshops and meetings. You will take part of every step of the way and will always be well informed on the progress of your project.</ListDescription>
        </ListDiv>
    )
}

const MobileStyle = {
    '@media (max-width: 500px)': {
        display: 'none',
      },
}

function StickySection(props){
    return (
        <Container>
            <ItemContainer style={MobileStyle}>
                <StickyText className="sticky-mobile">Why we should collaborate together to build success for your services</StickyText>
                <StickyBox offsetTop={0} offsetBottom={0} className="sticky">
                    <StickyText>Why we should collaborate together to build success for your services</StickyText>
                </StickyBox>
                    <RightSide>
                        <BreakPoint/>
                        <NumberedList num="01"/>
                        <BreakPoint/>
                        <NumberedList num="02"/>
                        <BreakPoint/>
                        <NumberedList num="03"/>
                        <BreakPoint/>
                        <NumberedList num="04"/>
                        <BreakPoint/>
                    </RightSide>
            </ItemContainer>
    </Container>
    )
}

export default StickySection