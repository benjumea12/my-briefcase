import React from 'react'
import { Link } from "gatsby"
// Style
import { Main } from './HomeCard.styled'

const HomeCard = (props) => {
    const {info, openContent, index} = props

    return (
        <Main image={info.startImg} openContent={openContent} index={index}>
            {/* Border divs*/}
            <div className='border1'></div>
            <div className='border2'></div>

            {/* Div background image*/}
            <div className='header1'>
                <div className='content'>
                    <h2 className='titlee'>{ info.title }</h2>
                    <p className='description'>{ info.startText }</p>
                    
                    <Link to={`/${info.path}`} className='link'>Ver proyecto</Link>
                </div>
            </div>
        </Main>
    )
}

export default HomeCard