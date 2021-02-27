import styled from 'styled-components'

export const Main = styled.div`
    position: relative;
    padding: 70px 8% 90px 8%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: ${props => props.theme.primary};

    @media (max-width: ${props => props.theme.sizes.sm}) {
        padding: 60px 5% 0px 5%;
    }

    .header {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;

        .return {
            left: 0;
            top: 10px;
            font-size: 40px;
            position: absolute;
            color: ${props => props.theme.secondary};
        }

        .content {
            display: flex;
            justify-content: space-between;
            align-items: center;

            margin: 50px 0px 0px 0px; 

            .img > img {  }
            .img { 
                margin-left: -20px;
                width: 50%; 
            }

            .presentation { 
                width: 45%; 
                color: ${props => props.theme.secondary};
            }

            @media (max-width: ${props => props.theme.sizes.md}) {
                flex-direction: column;
                justify-content: center;
                .img { width: 95%; margin: 0px 0px 30px -30px; }
                .presentation { width: 100%; }
            } 
        }
    }

    .description {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .text {
            margin: 50px 0px 0px 0px;
        }
    }

    .development {
        margin-top: 90px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .text {
            margin: 50px 0px 0px 0px;
        }
    }

    .links {
        margin-top: 90px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .text {
            margin: 50px 0px 0px 0px;

            a {
                display: block;
                color: ${props => props.theme.secondary};
                margin-bottom: 5px;
            }
        }
    }

    .gallery {
        margin-top: 90px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .section {
            margin: 50px 0px 0px 0px;

            .images {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
    
            }
        }

    }
`
