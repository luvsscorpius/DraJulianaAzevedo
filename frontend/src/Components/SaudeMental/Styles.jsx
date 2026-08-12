import styled from "styled-components";

export const main = styled.main`
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: linear-gradient(to top, #F2F8FA, #FFFFFF);

    @media (min-width: 768px) {
        gap: 30px;
    }

    @media (min-width: 1024px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        padding: 30px 60px;
        gap: 0;

        .firstContainer {
            order: 2;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            width: 45%;
            padding: 0;
            gap: 10px;
        }

        .secondContainer {
            order: 1;
            width: 45%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`;

export const TitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0;
    padding: 0 30px;

    p {
        color: #437280;
        font-size: 16px;
    }

    h3 {
        font-size: 22px;
    }

    @media (min-width: 768px) {
        align-items: center;

        p {
            text-align: center;
        }
    }

    @media (min-width: 1024px) {
        align-items: flex-start;
        padding: 0;

        p {
            font-size: 20px;
            text-align: start;
            width: 100%;
        }

        h2 {
            font-size: 25px;
            text-align: start;
            width: 100%;
        }

        h3 {
            font-size: 22px;
        }
    }
`;

export const descDiv = styled.div`
    padding: 0 30px;

    p {
        font-size: 14px;
        color: #7a838f;
    }

    @media (min-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;

        p {
            width: 70%;
            text-align: center;
        }
    }

    @media (min-width: 1024px) {
        padding: 0;

        p {
            width: 100%;
            text-align: start;
            font-size: 15px;
        }
    }
`;

export const cardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 0 30px;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 1024px) {
        width: 100%;
        padding: 0;
        margin-top: 10px;

        display: flex;
        flex-direction: column;
        gap: 15px;
    }
`;

export const card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2px;

    span {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        gap: 5px;

        img {
            width: 24px;
            height: 24px;
            object-fit: contain;
        }
    }

    h3 {
        font-size: 16px;
        color: #6a707a;
        font-weight: 500;
        margin: 0;
    }

    p {
        width: 100%;
        padding: 0;
        margin: 0;
        font-size: 14px;
        color: #6a707a;
    }

    @media (min-width: 1024px) {
        align-items: flex-start;

        h3 {
            font-size: 16px;
        }

        p {
            font-size: 14px;
        }
    }
`;

export const imagesDiv = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 3fr 2fr;
    place-items: center;
    padding: 0 30px;
    gap: 10px;

    img {
        width: 100%;
        border-radius: 10px;
        display: block;
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
        padding: 0 30px;
        color: #fff;
        border-radius: 5px;

        p {
            text-align: center;
            font-size: 14px;
            margin: 0;
        }
    }

    @media (min-width: 768px) {
        padding: 0 30px;

        .saudeMental1 {
            height: 350px;
        }

        .saudeMental2 {
            height: 300px;
        }

        .saudeMental3 {
            height: 350px;
        }

        span {
            height: 300px;
        }
    }

    @media (min-width: 1024px) {
        width: 100%;
        padding: 0;

        display: grid;
        grid-template-columns: 3fr 2fr;
        gap: 10px;
        place-items: start;

        .saudeMental1 {
            width: 100%;
            height: 300px;
            object-fit: cover;
        }

        .saudeMental2 {
            width: 100%;
            height: 300px;
            object-fit: cover;
        }

        .saudeMental3 {
            width: 100%;
            height: 300px;
            object-fit: cover;
        }

        span {
            width: 100%;
            height: 300px;
            padding: 0 20px;

            p {
                font-size: 14px;
            }
        }
    }
`;