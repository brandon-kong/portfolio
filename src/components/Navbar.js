import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
    

const Container = styled.nav`
    min-height: 80px;
    min-width: 200px;
    width: 100%;
    background-color: ${props => (props.isDark && "black") || ("")};;
    display: flex;
    justify-content: space-around;
    align-items: center;

`

const ListMenu = styled.ul`
    list-style-type: none;
    text-align: center;

    @media (max-width: 768px) {
        display: none;
    }
`

const ListItem = styled.li`
    text-decoration: none;
    display: inline-block;
    margin-right: 1rem;
    margin-left: 1rem;

    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-size: 1em;
    text-align: center;

    &:hover {
        color: rgb(255, 244, 194);
    }
`

const LogoTitle = styled.div`
    color: white;
    min-height: 80px;
    padding-top: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
`

const BoxBorder = styled.div`
    min-height: 8px;
    background-color: ${props => (props.isDark && "#ffd104;") || ("gray")};;
    width: 40px;
    margin-top: 20px;
`

const ImageStyle = {
    userSelect: "none",
}

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${props => (props.isDark && "white") || ("black")};
    transition: color 250ms;

    &:hover {
        color: ${props => (props.isDark && "rgb(255, 244, 194);") || ("black")};
    }

`
//#0551a5 color palette

function HeaderLogo(props) {
    return (
        <LogoTitle>
            <Link to={props.to}>
                {
                    props.isDark ? (
                        <StaticImage className="unselectable" style={ImageStyle} src="../images/logo-white.png" alt="brandon kong brand text" height={35} placeholder="none"></StaticImage>
                    ) : (
                        <StaticImage className="unselectable" style={ImageStyle} src="../images/logo.png" alt="brandon kong brand text" height={35} placeholder="none"></StaticImage>
                    )
                }
            </Link>
            <BoxBorder isDark={props.isDark}>

            </BoxBorder>
        </LogoTitle>
    )
}

function Item(props){
    return (
        <ListItem>
            <StyledLink to={props.to} isDark={props.isDark}>
                {props.children}
            </StyledLink>
        </ListItem>
    )
}

/*const CustomHeader = styled.header`
    width: 100%;
    display: ${props => (props.doesStick && "stick") || ("block")};
    position: fixed;
    top: 0;
`*/

const CustomHeader = styled.header`

`

function Navbar(props) {
    return (
        <CustomHeader doesStick={props.doesStick}>
            <Container isDark={props.isDark}>
                <HeaderLogo to="/" isDark={props.isDark}></HeaderLogo>
                <ListMenu>
                    <Item to="/about-me" isDark={props.isDark}>about me</Item>
                    <Item to="/" isDark={props.isDark}>portfolio</Item>
                    <Item to="/" isDark={props.isDark}>contact</Item>
                </ListMenu>
            </Container>
        </CustomHeader>
    )
}

export default Navbar