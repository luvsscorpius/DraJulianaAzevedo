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
    padding: 30px;
    
    p {
        color: #7A838F;
    }
`

export const palavraChaveDiv = styled.div`
    border: 1px solid red;
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
    justify-content: center;
    padding: 30px;
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
`