import React from 'react'
import { H1, H2, H3, P } from './Typography.styled.js'

const Typography = (props) => {
    const {text, variant} = props

    switch (variant) {
        case 'h1':
            return ( <H1>{ text }</H1> )   
        case 'h2':
            return ( <H2>{ text }</H2> )   
        case 'H3':
            return ( <H3>{ text }</H3> )   
        case 'p':
            return ( <P>{ text }</P> )   
        default:
            return ( <H1>{ text }</H1> )
    }
}

export default Typography