import React from "react"
import StickyBox from "react-sticky-box";
import styled from "styled-components"

const Container = styled.div`
    background-color: white;
    padding-top: 3rem;
    padding-bottom: 4rem;
`

const ItemContainer = styled.div`
    width: 90%;
    margin: auto;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`

const StickyText = styled.h2`
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-weight: 7  00;
    color: #000;
    font-size: 3rem;
    text-align: left;
    width: 80%;
    padding-top: 4rem;
    padding-bottom: 18rem;

`

const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
`

const ListDiv = styled.div`
    width: 100%;
    padding-top: 30px;
    padding-bottom: 30px;
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

function NumberedList(props) {
    return (
        <ListDiv>
            <ListNumber>{props.num}</ListNumber>
            <ListTitle>Communication & trust are core principles</ListTitle>
            <ListDescription>An integral part of our well-defined process are our workshops and meetings. You will take part of every step of the way and will always be well informed on the progress of your project.</ListDescription>
        </ListDiv>
    )
}

function StickySection(props){
    return (
        <Container>
            <ItemContainer>
                <StickyBox offsetTop={100} offsetBottom={0}>
                    <StickyText>Why we should collaborate to build success for your services</StickyText>
                </StickyBox>
                    <RightSide>
                        <NumberedList num="01"/>
                        <NumberedList num="02"/>
                        <NumberedList num="03"/>
                        <NumberedList num="04"/>
                    </RightSide>
            </ItemContainer>
    </Container>
    )
}

export default StickySection