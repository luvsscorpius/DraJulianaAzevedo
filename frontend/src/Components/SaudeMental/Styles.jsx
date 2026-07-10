import styled from "styled-components";

export const main = styled.main`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const TitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 30px 0px 30px;

    p {
        color: #437280;
        font-size: 16px;
    }

    h3 {
        font-size: 22px;
    }
`

export const descDiv = styled.div`
    padding: 0px 30px 0px 30px;

    p {
        font-size: 14px;
        color: #7A838F;
    }
`

export const cardContainer = styled.div`
    display: flex;
    flex-direction: column; 
    gap: 15px;
    padding: 0px 30px 0px 30px;
`

export const card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 2px;

    span {
        display: flex;
        flex-direction: row;
        align-items: end;
        justify-content: start;
        width: 100%;
        gap: 5px;

        img {
            width: 24px;
            height: 24px;
        }
    }

    h3 {
        font-size: 16px;
        color: #6A707A;
        font-weight: 500;
    }

    p {
        width: 100%;
        padding: 0px 30px 0px 30px;
        font-size: 14px;
        color: #6A707A;
    }
`

export const imagesDiv = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 3fr 2fr;
    place-items: center;
    padding: 0px 30px 0px 30px;
    gap: 10px;

    img {
        width: 100%;
        border-radius: 10px;
    }

    .saudeMental1 {
        width: 100%;
        height: 300px;
        object-fit: cover;
    }

    .saudeMental2 {
        width: 100%;
        height: 250px;
        object-fit: cover;
    }

    .saudeMental3 {
        width: 100%;
        height: 300px;
        object-fit: cover;
    }

    span {
        background-color: #437280;
        height: 250px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0px 30px 0px 30px;
        color: #fff;
        border-radius: 5px;
        
        p {
            text-align: center;
            font-size: 14px;
        }
    }
`