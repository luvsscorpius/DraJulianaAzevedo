import styled from 'styled-components'

export const main = styled.main`
    padding: 30px 0px 30px 0px;
    display: flex;
    flex-direction: column;
    gap: 15px;
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
`

export const descDiv = styled.div`
    p {
        text-align: center;
        padding: 0px 30px 0px 30px;
        font-size: 14px;
        color: #7A838F;
    }
`

export const cardDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

export const card = styled.div`
    width: 90%;

    .cardClock {
        background-color: #F2F9FB;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        border-radius: 15px;

        button {
            width: 100%;
            margin-top: 10px;
            height: 40px;
            background-color: #548290;
            color: #fff;
            border: none;
            border-radius: 10px;
        }

        h2 {
            color: #000;
        }

        p {
            color: #7A838F;
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
`