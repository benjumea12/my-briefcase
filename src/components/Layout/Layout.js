import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

import { CardTheme, Social, ButtonSwith, CardText } from './Layout.styled'

import "./style.css"

const data = [ '+57 310 824 6838', 'benjumeac12@gmail.com' ]

const Layout = ({children}) => {
    const sizes = {
        xl: '1200px',
        lg: '992px',
        md: '768px',
        sm: '576px'
    }

    const ligth = {
        primary: 'white',
        secondary: 'black',
    }

    const dark = {
        primary: 'black',
        secondary: 'white',
    }

    const [ligthTheme, setLigthTheme] = useState(true)
    const [defaultTheme, setDeafaultTheme] = useState(Object.assign({sizes}, ligth))

    const [openSocial, setOpenSocial] = useState({open: false, social: ''})

    const handleSetTheme = () => {
        if (ligthTheme) {
            setDeafaultTheme(Object.assign({sizes}, dark))
        } else {
            setDeafaultTheme(Object.assign({sizes}, ligth))
        }

        setLigthTheme(!ligthTheme)
    }

    const handleOpenSolcial = (value) => {
        setOpenSocial(Object.assign({}, {
            open: true,
            social: data[value]
        }))
    }

    const handleCloseSolcial = () => {
        setOpenSocial(Object.assign({}, {
            open: false,
            social: ''
        }))
    }

    return(
        <main style={{
            position: 'absolute',
            padding: 0,
            margin: 0,
            width: '100%'}
        }>
            <ThemeProvider theme={defaultTheme}>
                <CardTheme>
                    { !openSocial.open ? <React.Fragment>
                            <Social>
                                <FontAwesomeIcon className='icon' icon={faWhatsapp} onClick={() => handleOpenSolcial(0)} />
                                <a
                                    className='icon'
                                    href='https://www.linkedin.com/in/esteban-benjumea-castrillon-7609821b1/'
                                    target='_blank'
                                    rel="noreferrer"
                                >
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                                <a
                                    className='icon'
                                    href='https://github.com/benjumea12'
                                    target='_blank'
                                    rel="noreferrer"
                                >
                                    <FontAwesomeIcon className='icon' icon={faGithub} />
                                </a>
                                <FontAwesomeIcon className='icon' icon={faEnvelope} onClick={() => handleOpenSolcial(1)} />
                            </Social>
                            <div className='divider'></div>
                            <ButtonSwith ligthTheme={ligthTheme} onClick={handleSetTheme}>
                                <div className='lane'>
                                    <div className='button'>
                                        { ligthTheme ?
                                            <FontAwesomeIcon className='icon' icon={faSun} /> :
                                            <FontAwesomeIcon className='icon' icon={faMoon} />
                                        }

                                    </div>
                                </div>
                            </ButtonSwith>
                        </React.Fragment>:

                        <CardText onClick={handleCloseSolcial}>
                            <h3>{openSocial.social}</h3>
                        </CardText>
                    }
                </CardTheme>
                {children}
            </ThemeProvider>
        </main>
    )
}

export default Layout
