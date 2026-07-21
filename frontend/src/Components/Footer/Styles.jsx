import styled from 'styled-components'

export const footer = styled.footer`
    background-color: #234F59;
    color: #fff;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    hr {
        opacity: 80%;
        border: 1px solid #7A838F;
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
`

export const footerBodyDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;

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
        }

        li:hover {
            cursor: pointer;
        }
    }
`

export const footerFooterDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        font-size: 14px;
        opacity: 80%;
    }
`


