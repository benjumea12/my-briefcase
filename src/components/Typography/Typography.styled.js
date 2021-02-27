import styled from 'styled-components'

export const H1 = styled.h1`
    font-size: 50px;
    padding: 5px 15px;
    color: ${ props => props.theme.primary };
    background-color: ${ props => props.theme.secondary };
`

export const H2 = styled.h2`
    font-size: 42px;
    padding: 3px 10px;
    color: ${ props => props.theme.primary };
    background-color: ${ props => props.theme.secondary };
`

export const H3 = styled.h2`
    font-size: 35px;
    padding: 3px 10px;
    color: ${ props => props.theme.primary };
    background-color: ${ props => props.theme.secondary };
`

export const P = styled.p`
    font-size: 15px;
    line-height : 28px;
    padding: 2px 5px;
    color: ${ props => props.theme.secondary };
`