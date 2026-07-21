import styled from 'styled-components'

export const main = styled.main`
    border: 1px solid red;
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
    }

    p {
        text-align: center;
        font-size: 14px;
        color: #7A838F;
    }
`

export const locationDiv = styled.div`
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .leaflet-container {
        width: 100%;
        height: 200px;
        border-radius: 10px 10px 0px 0;
    }

    @media (min-width: 1024px) {
        width: 70%;
    }
`

export const locationBody = styled.div`
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 10px;
    padding: 0px 20px 20px;
    border-radius: 0px 0px 10px 10px;

    h3 {
        margin-bottom: 10px;
    }

    button {
        background-color: #548290;
        color: #fff;
        width: 100%;
        border: 0;
        margin-top: 10px; 
        height: 45px;
        border-radius: 10px;
        font-weight: 500;

        :hover {
            cursor: pointer;
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
        h4 {
            font-size: 16px;
            font-weight: 550;
        }

        p {
            color: #7A838F;
            font-size: 14px;
        }
    }

    .imgDiv {
        background-color: #E8F4F5;
        width: 60px;
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
`

export const agendarConsulta = styled.div`
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 10px;
    padding: 30px 20px 30px;
    border-radius: 10px;
    background-color: #306773;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;

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
    }
`