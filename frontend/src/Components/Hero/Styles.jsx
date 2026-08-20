import styled from 'styled-components'

export const main = styled.main`
    font-size: 12px;
    background: ${({ theme }) => theme.colors.teal};
    display: flex;
    flex-direction: column;
    align-items: center;

    hr {
        width: 90%;
    }

    @media (min-width: 1024px) {
	    flex-direction: row;
        align-items: center;
        justify-content: space-around;
        padding-top: 100px;

        .firstContainer {
            display: flex;
            flex-direction: column;
            width: 45%;
            height: 620px;
            padding: 0 30px;
            justify-content: space-between;
        }

        hr {
            width: 100%;
        }
    }
`

export const miniTitle = styled.div`
    padding: 30px 30px 0;
    display: flex;
    align-items: start;
    width: 100%;

    span {
        background-color: ${({ theme }) => theme.colors.teal};
        padding: 8px 20px;
        border-radius: 10px;
        color: ${({ theme }) => theme.colors.titles};
        font-weight: 500;
        z-index: 1;
    }

    @media (min-width: 1024px) {
	    display: flex;
        justify-content: start;
        align-items: start;
        padding: 0px 0;
    }
`

export const titleDivContainer = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    position: relative;

    @media (min-width: 1024px) {
       padding: 10px 0;
    }
`

export const titleDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;

    h2 {
        font-size: 25px;
        z-index: 1;

        span {
            color: ${({ theme }) => theme.colors.titles};
        }
    }

    p {
        font-size: 16px;
        text-align: justify;
        z-index: 1;
    }

    img {   
        width: 100%;
        height: auto;
        position: absolute;
        top: -150px;
        left: 40px;
        z-index: 0;
        pointer-events: none;
        user-select: none;
    }

    @media (min-width: 1024px) {
	   h2 {
            font-size: 45px;
       }

        p {
            font-size: 18px;
        }
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
        z-index: 1;
    }

    button:hover {
        cursor: pointer;
        opacity: 0.8;
        transform: scale(0.93);
        transition: all 0.5s ease;
    }

    .agendar {
        background-color: ${({ theme }) => theme.colors.titles};
        color: #fff;
    }

    .conhecaMais {
        color: #396A78;
        background-color: ${({ theme }) => theme.colors.white};
    }

    @media (min-width: 1024px) {
	   flex-direction: row;
       justify-content: start;

       button {
            width: 230px;
       }
    }
`

export const plusDiv = styled.div`
    width: 100%;
    padding: 30px;
    display: flex;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors.titles};
    font-size: 14px;

    @media (min-width: 768px) {
	    width: 60%;
        align-items: space-around;
    }

    @media (min-width: 1024px) {
        padding: 0px 0 0 0;
        justify-content: space-between;
        width: 100%;
    }
`

export const imgDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 20px;

    img {
        display: none;
        width: 90%;
        border-radius: 15px;
        object-fit: cover;
        object-position: top center; 
    }

    @media (min-width: 768px) {
	    img {
            width: 70%;
        }
    }

    @media (min-width: 1024px) {

	    img {
            diplay: flex;
            margin-top: 30px;
            border-radius: 15px;
            width: 530px;
            height: 630px;
        }
    }
`