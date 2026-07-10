import styled from 'styled-components'

export const main = styled.main`
    border: 1px solid red;
    padding: 30px 0px 30px 0px;
    display: flex;
    flex-direction: column;
    gap: 5px;
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