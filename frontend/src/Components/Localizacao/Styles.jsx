import styled from 'styled-components'

export const main = styled.main`
    @media (min-width: 1024px) {
        diplay: flex;
    }
`

export const titleDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;

    h3 {
        color: #437280;
        font-weight: 500;
        font-size: 16px;
    }

    h2 {
        font-size: 26px;
        width: 100%;
        text-align: center;
    }

    p {
        text-align: center;
        font-size: 14px;
        color: #7A838F;
    }

    @media (min-width: 768px) {
        p {
            width: 60%;
        }
    }

    @media (min-width: 1024px) {
        h3 {
            font-size: 20px;
        }

        h2 {
            font-size: 25px;
        }

        p {
            font-size: 16px;
        }
    }
`

export const locationDiv = styled.div`
    padding: 0px 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .leaflet-container {
        width: 100%;
        height: 200px;
        border-radius: 10px 10px 0px 0;
    }

    .secondContainer {
        padding: 10px 0 10px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    @media (min-width: 724px) {
        padding: 0 30px 30px 30px;

        .secondContainer {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
    }

    @media (min-width: 1024px) {
        width: 100%;
        gap: 20px;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 0px 60px 30px;

        .firstContainer {
            width: 100%;
        }

        .secondContainer {
            width: 50%;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .leaflet-container {
            width: 550px;
            height: 200px;
        }
    }
`

export const locationBody = styled.div`
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 10px;
    padding: 10px 20px 20px;
    border-radius: 0px 0px 10px 10px;

    h3 {
        margin-bottom: 10px;
    }

    button {
        background-color: #306773;
        color: #fff;
        width: 100%;
        border: 0;
        margin-top: 10px; 
        height: 45px;
        border-radius: 10px;
        font-weight: 500;

        &:hover {
            cursor: pointer;
            opacity: 0.8;
            transform: scale(0.93);
            transition: all 0.5s ease;
        }
    }

    @media (min-width: 1024px) {
        h3 {
            font-size: 20px;
        }

        button {
            font-size: 16px;
            font-weight: 550;
        }
    }
`

export const cardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`

export const card = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;

    span {
        width: 100%;
        min-width: 0;

        h4 {
            font-size: 16px;
            font-weight: 550;
        }

        p {
            color: #7A838F;
            font-size: 14px;
            overflow-wrap: break-word;
        }
    }

    .imgDiv {
        background-color: #E8F4F5;
        width: 30%;
        height: 60px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 24px;
            height: 24px;
        }
    }

    @media (min-width: 1024px) {
        span {
            h4 {
                font-size: 18px;
            }

            p {
                font-size: 16px;
            }
        }
    }
`

export const facilidadesDiv = styled.div`
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 10px;
    padding: 20px 20px 20px;
    border-radius: 10px;

    h3 {
        font-size: 18px;
        margin-bottom: 10px;
    }

    ul {
        padding: 0px 20px 0px;
        color: #7A838F;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    @media (min-width: 1024px) {
        width: 100%;
        padding: 30px;

        h3 {
            font-size: 20px;
        }

        ul {
            font-size: 16px;
        }
    }
`

export const agendarConsulta = styled.div`
    position: relative;

    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 10px;
    padding: 30px 20px 30px;
    border-radius: 10px;
    background-color: #306773;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;

    img {
        width: 130px;
        position: absolute;
        z-index: 0;
        right: 30px;
        bottom: 52px;
        opacity: 0;
        transform: scale(0);
        transform-origin: bottom center;

        transition:
            transform 0.5s ease,
            opacity 0.3s ease;
    }

    h3 {
        font-size: 16px;
    }

    p {
        font-size: 14px;
    }

    button {
        background-color: #fff;
        border: none;
        color: #306773;
        height: 40px;
        border-radius: 10px;
        font-weight: 550;
        z-index: 10;

        &:hover {
            cursor: pointer;
            transform: scale(0.93);
            transition: all 0.5s ease;
        }
    }

    &:has(button:hover) {
        img {
            opacity: 1;
            transform: scale(1);
        }
    }

    @media (min-width: 1024px) {
        width: 100%;
        padding: 30px;

        h3 {
            font-size: 20px;
        }

        p {
            font-size: 16px;
        }

        button {
            font-size: 16px;
        }
    }
`