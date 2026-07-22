import styled from 'styled-components'

export const main = styled.main`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
`

export const titleDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        font-size: 14px;
        color: #437280;
    }

    h2 {
        font-size: 22px;
    }
`

export const descDiv = styled.div`
    padding: 0px 30px 30px 30px;
    
    p {
        color: #7A838F;
    }
`

export const palavraChaveDiv = styled.div`
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    align-items: center;
    justify-content: center;
    padding: 0px 30px 30px 30px;
    gap: 10px;

    span {
        width: 100%;
        height: 35px;
        background-color: #E8F4F5;
        border-radius: 10px;
        
        p {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            color: #437280;
            font-size: 14px;
        }
    }

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`

export const infoDivContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 0px 30px 30px 30px;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`

export const card = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #E8F4F5;
    padding: 10px;
    border-radius: 10px;
    gap: 3px;
    padding: 15px;

    span {
        background-color: #437280;
        width: 45px;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        margin
    
        img {
            width: 30px;
            background-color: #437280;
        }
    }

    h2 {
        font-size: 20px;
    }

    p {
        color: #7A838F;
        font-size: 14px;
    }
`