import * as React from "react"
import styled from "styled-components"

const Line = styled.hr`
    max-width: 1400px;
    border-top: rgb(245, 245, 247);
    margin: auto;
`

function Breakline() {
    return (
        <Line/>
    )
}

export default Breakline