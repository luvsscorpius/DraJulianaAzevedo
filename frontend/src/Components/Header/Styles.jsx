import styled from 'styled-components'

export const header = styled.header`
    background-color: red;
    height: 100px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weigth: bold;
    font-family: poppins;
    padding: 1rem 2rem;
    background: #fff;
    color: white;
    position: relative;

    h2 {
        color: #437280;
    }

    button {
        background-color: #fff;
        border: none;
        color: #437280;
    }
`

export const Logo = styled.h2`
  margin: 0;
`;

export const Hamburger = styled.button`
  display: none;
  font-size: 2rem;
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Menu = styled.div`
    position: absolute;
    top: 80px;
    right: 20px;
    width: 50%;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    overflow: hidden;
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;

    .active {
        background-color: #eee;
        color: #4A7C59;
        padding: 5px;
        border-radius: 3px;
    }
  
    max-height: ${({ open }) => (open ? "500px" : "0")};
    opacity: ${({ open }) => (open ? "1" : "0.7")};
    transition: all 0.5s ease;

    a {
        color: #437280;
        list-style: none;
        font-weight: 800;
    }

    button {
        border: 0;
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        background: none;
        background-color: #437280;
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
            color: #4A7C59;
            list-style: none;
            transition: transform 0.8s ease;
            text-align: center;
            font-weight: 800;

            &:hover {
                cursor: pointer;
                opacity: 0.8;
                transform: scale(0.93);
            }
        }
    }
`;