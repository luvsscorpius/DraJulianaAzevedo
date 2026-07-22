import styled from 'styled-components'

export const main = styled.main`
    font-size: 12px;
    background: linear-gradient(to bottom, #F2F8FA, #FFFFFF);
    display: flex;
    flex-direction: column;
    align-items: center;

    hr {
        width: 90%;
    }
`

export const miniTitle = styled.div`
    padding: 30px 30px 0;
    display: flex;
    align-items: start;
    width: 100%;

    span {
        background-color: #E8F4F5;
        padding: 8px 20px;
        border-radius: 10px;
        color: #437280;
        font-weight: 500;
    }
`

export const titleDivContainer = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 15px;
`

export const titleDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    h2 {
        font-size: 25px;

        span {
            color: #396A78;
        }
    }

    p {
        font-size: 16px;
    }
`

export const buttonsDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;

    button {
        width: 100%;
        padding: 15px;
        border-radius: 15px;
        font-weight: 500;
        border: 1px solid #396A78;
        font-size: 16px;
    }

    button:hover {
        cursor: pointer;
        opacity: 0.8;
        transform: scale(0.93);
        transition: all 0.5s ease;
    }

    .agendar {
        background-color: #396A78;
        color: #fff;
    }

    .conhecaMais {
        color: #396A78;
        background-color: #fff;
    }
`

export const plusDiv = styled.div`
    width: 100%;
    padding: 30px;
    display: flex;
    justify-content: space-between;
    color: #396A78;
    font-size: 14px;

    @media (min-width: 768px) {
	    width: 60%;
    }
`

export const imgDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 20px;

    img {
        width: 90%;
        border-radius: 15px;
    }

    @media (min-width: 768px) {
	    img {
            width: 70%;
        }
    }
`