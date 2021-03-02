import styled from 'styled-components'

export const CardTheme = styled.div`
    position: fixed;
    box-shadow: 5px 5px 1px ${ props => props.theme.secondary };
    bottom: 20px;
    right: 20px;
    z-index: 3;
    padding: 15px 30px;
    background-color: ${ props => props.theme.primary };
    border: 2px solid ${ props => props.theme.secondary };

    transition: box-shadow cubic-bezier(0.68, -0.6, 0.32, 1.6) 0.4s;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media (max-width: ${props => props.theme.sizes.sm}) {
        left: 20px;
        bottom: 15px;
    }

    &:hover {
        box-shadow: 0px 0px 0px ${ props => props.theme.secondary };
    }

    .divider {
        background-color: ${ props => props.theme.secondary };
        width: 2px;
        height: 35px;
        margin: 0px 20px;
    }
`

export const Social = styled.div`
    font-size: 33px;
    color: ${ props => props.theme.secondary };
    a {
        color: ${ props => props.theme.secondary };
    }

    .icon {
        cursor: pointer;
    }

    .icon:nth-child(2) {
        margin: 0px 5px 0px 10px;
    }

    .icon:nth-child(3) {
        margin: 0px 10px 0px 5px;
    }
`

export const ButtonSwith = styled.div`
    position: relative;
    cursor: pointer;

    .lane {
        position: relative;
        height: 20px;
        width: 50px;
        border-radius: 10px;
        background-color: ${ props => props.ligthTheme ? `lightgrey` : `gray` };

        .button {
            position: absolute;
            top: -5px;
            margin: auto;
            height: 30px;
            width: 30px;
            border-radius: 100%;
            color: ${ props => props.theme.primary };
            text-align: center;

            .icon {
                margin: 5px;
            }
            
            font-size: 20px;
            background-color: ${ props => props.theme.secondary };
            ${ props => props.ligthTheme ? `
                left: 0;
                right: 1;` : `

                left: 1;
                right: 0;` }
        }
    }
`
export const CardText = styled.div`
    cursor: pointer;
    font-size: 35px;
    color: ${ props => props.theme.secondary };
`
