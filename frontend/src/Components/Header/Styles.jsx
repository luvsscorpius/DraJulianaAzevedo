import styled from 'styled-components'

export const header = styled.header`
    background-color: red;
    height: 100px;
    background-color: ${({ theme }) => theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weigth: bold;
    font-family: poppins;
    padding: 1rem 2rem;
    position: relative; 

    h2 {
        color: ${({ theme }) => theme.colors.titles};
    }

    button {
        background-color: ${({ theme }) => theme.colors.white};
        border: none;
        color: ${({ theme }) => theme.colors.button};
    }

    @media (min-width: 1024px) {
        position: fixed;
        width: 100%;
        z-index: 100000;
        
        .menuButton {
            display: none;
        }
    }
`

export const Logo = styled.h2`
  margin: 0;

  @media (min-width: 1024px) {
    width: 100%;
  }
`;

export const Hamburger = styled.button`
  display: block;
  font-size: 2rem;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

export const Menu = styled.div`
    position: absolute;
    top: 80px;
    right: 20px;
    width: 50%;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    overflow: hidden;
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;

    .active {
        background-color: #eee;
        color: ${({ theme }) => theme.colors.button};
        padding: 5px;
        border-radius: 3px;
    }
  
    max-height: ${({ open }) => (open ? "500px" : "0")};
    opacity: ${({ open }) => (open ? "1" : "0.7")};
    transition: all 0.5s ease;

    li {
        color: ${({ theme }) => theme.colors.titles};
        list-style: none;
        font-weight: 600;
    }

    button {
        border: 0;
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        background: none;
        background-color: ${({ theme }) => theme.colors.titles};
        color: #fff;
        font-weight: 800;
        width: 100%;
        padding: 5px;
        border-radius: 5px;

        &:hover {
            cursor: pointer;
            opacity: 0.8;
            transform: scale(0.93);
            transition: all 0.5s ease;
        }
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 10px;
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        font-size: 15px;
        padding: 10px 0 10px 0;

        span {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;

            svg {
                font-size: 25px;
            }
        }
        
        li {
            color: ${({ theme }) => theme.colors.title};
            list-style: none;
            transition: transform 0.8s ease;
            text-align: center;

            &:hover {
                cursor: pointer;
                opacity: 0.8;
                transform: scale(0.93);
            }
        }
    }

    @media (min-width: 1024px) {
        position: static;
        width: 60%;
        height: 100%;
        overflow: visible;
        opacity: 1;
        max-height: none;
        background: transparent;
        box-shadow: none;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        button {
            width: 190px;
            height: 40px;
            font-weight: 500;
            font-size: 15px;
        }

        ul {
            flex-direction: row;
            align-items: center;
            justify-content: flex-end;
            gap: 35px;
            padding: 0;
            width: 100%;

            a {
                font-weight: 500;
            }
        }
    }
`;