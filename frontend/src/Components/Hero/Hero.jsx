import React from 'react'
import * as H from './Styles'
import ImgDraJuliana from '../../Assets/img/DraJuliana.webp'
import blobHero from '../../Assets/img/blobHero.svg'

export const Hero = () => {

    const goTo = () => (
        window.open("https://api.whatsapp.com/send/?phone=5535999215198&text&type=phone_number&app_absent=0&utm_source=ig")
    )

    return (
        <H.main id="inicio">

            <img src={blobHero} alt="Blob do componente hero" className='blob' />

            <span className='firstContainer'>
                <H.miniTitle>
                    <span>
                        Saúde Mental
                    </span>
                </H.miniTitle>

                <H.titleDivContainer>
                    <H.titleDiv>
                        <h2>
                            Cuidar da sua saúde mental é um ato de
                            <span> coragem e amor-próprio</span>
                        </h2>

                        <p>
                            Bem-vindo ao espaço de cuidado e acolhimento da Dra. Juliana Azevedo. Aqui você encontra um atendimento médico humanizado, baseado em ciência, escuta ativa e respeito à sua jornada.
                        </p>

                    </H.titleDiv>

                    <H.buttonsDiv>
                        <button className='agendar' onClick={goTo}>
                            Agendar Consulta &#8594;
                        </button>
                        <button className='conhecaMais'>
                            Conheça Mais
                        </button>
                    </H.buttonsDiv>
                </H.titleDivContainer>

                <hr />

                <H.plusDiv>
                    <p><h2>18+ </h2>
                        Anos de Experiência</p>

                    <p><h2>100%</h2>
                        Acolhimento</p>

                    <p><h2>2+</h2>
                        Modalidades</p>
                </H.plusDiv>
            </span>

            <H.imgDiv>
                <img src={ImgDraJuliana} alt="Imagem da Dra Juliana" />
            </H.imgDiv>
        </H.main>
    )
}
