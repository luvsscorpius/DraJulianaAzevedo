import React from 'react'
import * as S from './Styles'
import brain from '../../Assets/img/brain.png'
import smile from '../../Assets/img/smile.png'
import chart from '../../Assets/img/chart.png'
import shield from '../../Assets/img/shield.png'
import saudemental1 from '../../Assets/img/saudemental1.jpeg'
import saudemental2 from '../../Assets/img/saudemental2.jpeg'
import saudemental3 from '../../Assets/img/saudemental3.jpeg'

export const SaudeMental = () => {
    return (
        <S.main>
            <S.TitleDiv>
                <p>POR QUE CUIDAR?</p>

                <h3>Saúde Mental com Cuidado e Atenção</h3>
            </S.TitleDiv>

            <S.descDiv>
                <p>O acompanhamento psiquiátrico é fundamental para promover o equilíbrio emocional e melhorar sua qualidade de vida. Com o suporte adequado, você pode desenvolver recursos para enfrentar desafios, fortalecer sua saúde mental e alcançar seus objetivos pessoais.</p>
            </S.descDiv>

            <S.cardContainer>
                <S.card>
                    <span>
                        <img src={brain} alt="Icone de cerebro" />
                        <h3>Equilíbrio Mental</h3>
                    </span>

                    <p>Desenvolvimento de estratégias para lidar com desafios emocionais e manter a estabilidade mental.</p>
                </S.card>

                <S.card>
                    <span>
                        <img src={smile} alt="Icone de sorisso" />
                        <h3>Qualidade de Vida</h3>
                    </span>

                    <p>Melhora significativa no bem-estar geral, relacionamentos e satisfação pessoal.</p>
                </S.card>

                <S.card>
                    <span>
                        <img src={chart} alt="Icone de gráfico" />
                        <h3>Desenvolvimento Pessoal</h3>
                    </span>

                    <p>Crescimento contínuo através do autoconhecimento e fortalecimento emocional.</p>
                </S.card>

                <S.card>
                    <span>
                        <img src={shield} alt="Icone de escudo" />
                        <h3>Cuidado Preventivo</h3>
                    </span>

                    <p>Prevenção de crises e promoção de hábitos saudáveis para a saúde mental.</p>
                </S.card>
            </S.cardContainer>

            <S.imagesDiv>
                <img src={saudemental1} alt="" className='saudeMental1' />
                <img src={saudemental2} alt="" />
                <img src={saudemental3} alt="" className='saudeMental2'/>
            </S.imagesDiv>
        </S.main>
    )
}
