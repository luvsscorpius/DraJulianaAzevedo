import styled from 'styled-components'

export const main = styled.main`
    padding: 30px 0px 30px 0px;
    display: flex;
    flex-direction: column;
    gap: 15px;

    @media (min-width: 1024px) {
        padding: 30px 60px;
    }
`

export const titleDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p { 
        color: #437280;
        font-size: 16px;
    }

    h2 {
        width: 80%;
        text-align: center;
    }

    @media (min-width: 1024px) {
        p {
            font-size: 20px;
        }

        h2 {
            font-size: 25px;
        }
    }
`

export const descDiv = styled.div`
    p {
        text-align: center;
        padding: 0px 30px 0px 30px;
        font-size: 14px;
        color: #7A838F;
    }
        
    @media (min-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;

        p {
            width: 70%;
        }
    }

    @media (min-width: 1024px) {
        p {
            font-size: 16px;
            font-weight: 400;
        }
    }
`

export const cardDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        place-items: center;

        .relogio {
            grid-column: 1 / 3; 
            justify-self: center; 
        }
    }

    @media (min-width: 1024px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: stretch;
        padding: 0 30px;

        .relogio {
            grid-column: 1 / 3; 
            justify-self: center; 
        }
    }
`

export const card = styled.div`
    width: 90%;

    .cardClock {
        background-color: #F2F9FB;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        border-radius: 15px;

        .secondContainer {
            position: relative;

            img {
                width: 250px;
                position: absolute;
                z-index: 1;

                right: 280px;
                top: 90px;

                opacity: 0;

                transform: translateX(0px) scale(0.7) scaleX(1);

                transform-origin: right center;

                transition:
                    transform 0.5s ease,
                    opacity 0.3s ease;
            }
        }

        button {
            width: 100%;
            margin-top: 10px;
            height: 40px;
            background-color: #548290;
            color: #fff;
            border: none;
            border-radius: 10px;
            font-weight: 550;

            &:hover {
                cursor: pointer;
                transform: scale(0.93);
                transition: all 0.5s ease;
            }
        }

        &:has(button:hover) {
            .secondContainer {
                img {
                    opacity: 1;
                    transform: translateX(0px) scale(1) scaleX(1);
                }
            }
        }

        h2 {
            color: #000;
        }

        p {
            color: #7A838F;
        }
    }

    @media (min-width: 1024px) {
        justify-items: center;

        .cardClock {
            display: flex;
            flex-direction: row;
            gap: 20px;
            padding: 50px 100px;
            width: 80%;
            height: 290px;

            .secondContainer {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                padding: 0;
                margin: 0;
            }

            .secondContainer h2 {
                margin: 0;
            }

            p {
                font-size: 16px;
                font-weight: 400;
            }

            button {
                height: 50px;
            }
        }
    }
`

export const cardHeader = styled.div`
    background-color: #437280;
    height: 100%;
    padding: 30px 30px 30px 30px;
    border-radius: 15px 15px 0px 0px;
    color: #fff;

    span {
        background-color: #548290;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        border-radius: 15px;
        
        img {
            width: 30px;
        }
    }

    h2 {
        margin-top: 15px;
    }

    p {
        margin-top: 3px;
        font-size: 14px;
        font-weight: 300;
    }

    @media (min-width: 1024px) {
        height: 250px;

            p {
                font-size: 16px;
                font-weight: 400;
            }
    }
`

export const cardBody = styled.div`
    background-color: #fff;
    padding: 30px 30px 30px 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 0 0 15px 15px;

    span {
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 10px;

        p {
            font-size: 14px;
            font-weight: 300;
        }
    }

    @media (min-width: 1024px) {
        width: 100%;

        span {
            p {
                font-size: 14px;
                font-weight: 400;
            }
        }
    }
`