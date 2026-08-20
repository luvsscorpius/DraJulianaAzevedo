import styled from 'styled-components'

export const footer = styled.footer`
    background-color: #234F59;
    color: #fff;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    p {
        overflow-wrap: break-word;
    }

    hr {
        opacity: 80%;
        border: 1px solid #7A838F;
    }

    @media (min-width: 1024px) {
        flex-direction: column;

        .firstContainer {
            display: flex;
            flex-direction: row;
        }
    }
`

export const footerHeaderDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    h3 {
        font-size: 16px;
    }

    p {
        font-size: 14px;
        opacity: 80%;
    }

    @media (min-width: 768px) {
        align-items: center;
    }

    @media (min-width: 1024px) {
        align-items: start;
        padding: 0 60px;
        gap: 15px;
        
        p {
            width: 90%;
        }
    }
`

export const iconsDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 10px;

    span {
        width: 35px;
        height: 35px;
        background-color: #2F6673;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 10px;

        .facebook {
            margin-left: 10px;
        }

        img {
            width: 24px;
            height: 24px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    @media (min-width: 768px) {
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
    }

    @media (min-width: 1024px) {
        align-items: start;
        justify-content: start;
    }
`

export const footerBodyDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-top: 20px;

    h4 {
        font-size: 15px;
    }

    ul {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;

        li {
            list-style-type: none;
            opacity: 80%;
            font-size: 14px;
            overflow-wrap: break-word;
        }

        li:hover {
            cursor: pointer;
        }
    }

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: center;
    }

    @media (min-width: 1024px) {
        align-items: start;
        width: 120%;
        justify-content: space-around;
        padding: 0 60px 0 0;
    }
`

export const footerFooterDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    .firstContainer {
        text-align: center;
    }

    .secondContainer {
        p {
            text-align: center; 
        }
    }

    p {
        font-size: 14px;
        opacity: 80%;
    }

    @media (min-width: 1024px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0 60px;

        .secondContainer {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 10px;
        }
    }
`


