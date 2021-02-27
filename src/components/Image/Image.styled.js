import styled, { keyframes } from 'styled-components'

const animaShowCard = keyframes`
    0% { transform: scale(0.8); opacity: 0; }
    30% { transform: scale(1.02); opacity: 0.3; }
    50% { transform: scale(0.98); opacity: 0.5; }
    100% { transform: scale(1); opacity: 1; }
`

export const Main = styled.div`
    width: ${ props => props.width ? props.width : `100%` };
    opacity: 0;
    margin: 15px;

    animation: ${ animaShowCard } 
                0.7s ${props => 0.5 + 0.2*props.delay}s ${ `/* Animation delay depending on the position of the card */` }
                ease-in-out forwards;  

    .card{
        width: auto;
        height: auto;
        position: relative;
        cursor: pointer;

        .image > img {
            position: relative;
            z-index: 1;
            width: 99%;
            margin: 0px 0px -4px 0px;
            border: 2px solid ${props => props.theme.secondary};
        }

        .border {
            z-index: 0;
            position: absolute;
            width: 98%;
            height: 98%;
            border: 2px solid ${props => props.theme.secondary};
            transition: transform cubic-bezier(0.68, -0.6, 0.32, 1.6) 0.4s;
        }

        &:hover > .border {
            transform: translate(15px, 12px);
        }

    }
`

const AnimaOverlay = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`

const AnimaImage = keyframes`
    from { transform: scale(0.9) }
    to { transform: scale(1) }
`

export const ModalMain = styled.div`
    position: fixed;
    z-index: 100; 
    height: 100vh;
    width: 100vw;   
    cursor: pointer;
    animation: ${ AnimaOverlay } 0.2s ease-in-out forwards; 
    
    .overlay {
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: black;
        opacity: 0.25;
    }

    .image {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        max-height: 90%;
        max-width: 90%;
        background-color: cyan;
        border: 2px solid ${props => props.theme.secondary};

        @media (max-width: ${props => props.theme.sizes.sm}) {
            max-height: 90%;
            max-width: 90%;
        }

        animation: ${ AnimaImage } 0.2s forwards cubic-bezier(0.68, -0.6, 0.32, 1.6); 
    }
`