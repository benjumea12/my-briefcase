import styled, { keyframes } from 'styled-components'  

// Show card keyframes
const animaShowCard = keyframes`
    0% { transform: scale(0.8); opacity: 0; }
    30% { transform: scale(1.04); opacity: 0.3; }
    50% { transform: scale(0.96); opacity: 0.5; }
    100% { transform: scale(1); opacity: 1; }
`

// Main styles
export const Main = styled.div`
    position: relative;
    height: 14em;
    width: 25em;
    margin: 20px;
    opacity: 0;
    animation: ${ props => props.openContent && animaShowCard } 
                0.7s ${props => 0.5 + 0.2*props.index}s ${ `/* Animation delay depending on the position of the card */` }
                ease-in-out forwards;  

    @media (max-width: ${props => props.theme.sizes.sm}) {
        width: 100%;
    }

    .border1, .border2, .header1 {
        position: absolute;
        border: 2px solid ${props => props.theme.secondary};
        height: 14em;
        width: 25em;
        transition: all cubic-bezier(0.68, -0.6, 0.32, 1.6) 0.4s;

        @media (max-width: ${props => props.theme.sizes.sm}) {
            width: 100%;
        }
    }

    .content {
        position: absolute;
        height: 100%;
        width: 100%;
        margin-top: 14em;
        background-color: ${props => props.theme.primary};
        transition: all cubic-bezier(0.5, 1, 0.89, 1) 0.2s;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .titlee { 
            font-size: 35px;
            margin: 0px ;
            padding: 0px;
            color: ${props => props.theme.secondary};
        }
        .description {
            font-size: 15px;
            margin: 10px 5% 20px 5%;
            color: ${props => props.theme.secondary};
        }
        .link {
            color: ${props => props.theme.secondary};
        }
    }

    .header1 {
        overflow: hidden;
        background-image: url(${ props => props.image });
        background-size: cover;
        background-position: center;

        &:hover > .content {
            margin-top: 0em;
        }
    }

    &:hover > .border1 {
        transform: translate(16px, 16px);
    }

    &:hover > .border2 {
        transform: translate(8px, 8px);
        transition-delay: 0.05s;
    }
`