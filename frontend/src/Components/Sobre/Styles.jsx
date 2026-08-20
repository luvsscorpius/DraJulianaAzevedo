import styled from 'styled-components'

export const main = styled.main`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
    scroll-margin-top: 80px;

    @media (min-width: 1024px) {
        gap: 0;
        padding: 30px;

        .firstContainer {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding: 30px;
        }

        .secondContainer {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 10px;
            padding: 30px;
            align-items: center;
            justify-content: center;
            height: 555px;
        }   
    }

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
    padding: 0px 30px 30px 30px;
    
    p {
        color: #7A838F;
        text-align: justify;
    }

    h3 {
        width: 100%;
        text-align: center;
        color: ${({theme}) => theme.colors.titles}
    }

    @media (min-width: 1024px) {
        width: 100%;
        padding: 0;

        p {
            font-size: 18px;
        }
    }
`

export const palavraChaveDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    padding: 0px 30px 30px 30px;
    gap: 20px;

    span {
        width: 100%;
        height: 45px;
        background-color: ${({ theme }) => theme.colors.white};
        border-left: 3px solid ${({ theme }) => theme.colors.titles};
        border-radius: 0 10px 10px 0px;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 10px;
        
        p {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            color: ${({ theme }) => theme.colors.titles};
            font-size: 14px;
            text-align: center;
        }
    }

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media (min-width: 1024px) {
        width: 100%;
        padding: 0;
        gap: 10px;
        grid-template-columns: 1fr 1fr 1fr 1fr;

        span {
            height: 50px;
        }
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

    @media (min-width: 1024px) {
        display: flex;
        flex-direction: row;
        padding: 0 60px;
    }
`

export const card = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.white};
    border-left: 3px solid ${({ theme }) => theme.colors.titles};
    border-radius: 0 10px 10px 0px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 10px;
    padding: 10px;
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
    
        img {
            width: 30px;
            background-color: #437280;
        }
    }

    h2 {
        font-size: 20px;
        color: ${({ theme }) => theme.colors.titles};
    }

    p {
        color: #7A838F;
        font-size: 14px;
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

    @media (min-width: 1024px) {
        display: flex;
        justify-content: start;
        align-items: start;
        width: 100%;
        padding: 0 30px;

        img {
            width: 100%;
            height: 555px;
            object-fit: cover;
            object-position: top center; 
        }
    }
`