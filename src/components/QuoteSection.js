import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled from "styled-components"

const Container = styled.section`
  width: 80%;
  margin: auto;
  display: flex;
  min-height: 400px;

    padding-left: 3rem;
    padding-left: 3rem;
  
  flex-direction: column; 

  padding-top: 3rem;
  padding-bottom: 3rem;

  align-items: center;
  background-color: black;

  
`

const ItemContainer = styled.div`
  width: 70%;
  margin: auto;
`

const QuoteText = styled.p`
  quotes: "“" "„" '“' '„';
  color: white;
  font-weight: 300;
  padding-bottom: 1rem;
  padding-top: 1rem;
  font-size: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  line-height: 1.8rem;

  &::before {
    color: #ffd104;
    font-weight: 500;
    font-size: 3em;
    content: open-quote;
    font-family: serif;
    position: relative;
    left: -1rem;
    height: 0;
  }

  &::after {
    color: #ffd104;
    font-weight: 500;
    font-size: 3em;
    content: close-quote;
    font-family: serif;
    position: relative;
    right: -1rem;
    height: 0;
  }


  `

const QuoteAuthor = styled.h3`
  color: white;
  font-size: 1.7rem;
  padding-bottom: .5rem;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
`

const AuthorRole = styled.h3`
  color: rgb(130, 130, 130);
  font-size: 1.3rem;
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
`

const QuoteContainer = styled.div`
  padding-top: 1em;
  padding-bottom: 1em;
`

const HeadingTitle = styled.h1`
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  padding: 2rem;
  padding-bottom: 7rem;
`

function QuoteBlock(props){
  return (
    <QuoteContainer>
      <QuoteText>{props.quote}</QuoteText>
      <QuoteAuthor>{props.author}</QuoteAuthor>
      <AuthorRole>{props.role}</AuthorRole>
    </QuoteContainer>
  )
}

const InlineColor = styled.span`
  color: #ffd104
`

function Slideshow() {
    return (
      <Container>
        <HeadingTitle>What <InlineColor>employers</InlineColor> have to say about my <InlineColor>ability</InlineColor></HeadingTitle>
        <ItemContainer>
        <Carousel showArrows={true} showStatus={false} showThumbs={false} autoPlay={true} infiniteLoop={true} showIndicators={false}  dynamicHeight={true} stopOnHover={false} interval={10000} axis="vertical">
          <QuoteBlock role="Illustrator" quote="At the end of the day, I know with Brandon, I'll be able to carry out projects that I've only dreamed of while keeping a personal relationship." author="Bill Gates"/>
          <QuoteBlock role="CEO of Microsoft" quote="At the end of the day, I know with Brandon, I'll be able to carry out projects that I've only dreamed of while keeping a personal relationship." author="Bill Gates"/>

        </Carousel>
        </ItemContainer>
      </Container>
  )
}

export default Slideshow