import styled, { keyframes } from 'styled-components'

const animaIcon = keyframes`
    from { transform: translate(0px, 10px); }
    to { transform: translate(0px, 0px); }
`

const animaTitle = keyframes`
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
`

export const Main = styled.div`
    position: relative;
`

export const Header = styled.main`
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    background-size: cover;

    .overlay {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: red;
        background-color: ${props => props.theme.secondary};

        .content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            align-items: center;
            padding: 0px 20px;
        
            .title { 
                padding: 5px;
                font-size: 50px;
                color: ${props => props.theme.secondary};
                background-color: ${props => props.theme.primary};
                animation: ${ animaTitle } cubic-bezier(0.5, 1, 0.89, 1) 0.5s forwards;
            }
        
            .icon {
                font-size: 45px;
                cursor: pointer;
                margin-top: 15px;
                color: ${props => props.theme.primary};
                animation: ${animaIcon} 0.5s infinite alternate-reverse;
        
                &:hover {
                    animation-play-state: paused;
                }
            }
        }

  }
`

const animaContent = keyframes`
    0% {
        height: 0px;
        margin-top: 100vh;
    }

    30% {
        height: 100vh;
        margin-top: 0;
    }

    50% {
        height: 93vh;
        margin-top: 7vh;
    }

    100% {
        height: 100vh;
        margin-top: 0;
        overflow-x: hidden;
        overflow-y: scroll;
    }
`

export const Content = styled.div`
    z-index: 2;
    text-align: center;
    height: 0px;
    margin-top: 100vh;
    overflow: hidden;
    position: relative;
    padding: 0px 8% 0px 8%;
    background-color: ${props => props.theme.primary};
    animation: ${ props => props.openContent && animaContent } cubic-bezier(0.5, 1, 0.89, 1) 0.7s forwards;

    @media (max-width: ${props => props.theme.sizes.sm}) {
        padding: 0px 5% 0px 5%;
    }

    .header {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin: 50px 0px 90px 0px;

        .text { 
            margin-top: 50px;
        }

        a {
            margin-top: 20px;
            font-size: 25px;
            color: ${props => props.theme.secondary};
        }
    }

    .proyects {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-bottom: 90px;

        .list {
            width: 100%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            margin-top: 50px;
        }
    }
`