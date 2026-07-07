import React from 'react'
import * as S from './Styles'
import ImgDraJuliana from '../../Assets/img/DraJuliana.jpg'
import * as H from '../Hero/Styles'

export const Sobre = () => {
    return (
        <S.main>
            <S.titleDiv>
                <p>SOBRE A PROFISSIONAL</p>
                <h2>Dra. Juliana Azevedo</h2>
            </S.titleDiv>

            <H.imgDiv>
                <img src={ImgDraJuliana} alt="Imagem da Dra. Juliana" />
            </H.imgDiv>

            <S.descDiv>
                <p>Médica com 18 anos de dedicação ao cuidado da saúde mental. Minha missão é oferecer um atendimento que une ciência, ética e humanização, criando um espaço seguro onde cada paciente se sinta verdadeiramente acolhido e compreendido em sua jornada de bem-estar emocional.</p>
                <br />

                <p>Acredito que cada pessoa merece ser ouvida com atenção, respeito e empatia. Meu trabalho vai além do diagnóstico: é construir junto com você um caminho para o equilíbrio emocional, qualidade de vida e desenvolvimento pessoal.</p>
            </S.descDiv>

            <S.palavraChaveDiv>
                <span>
                    <p>Especialista em Saúde Mental</p>
                </span>

                <span>
                    <p>Pronto Clínica Luna</p>
                </span>

                <span>
                    <p>Pouso Alegre - MG</p>
                </span>
            </S.palavraChaveDiv>
        </S.main>
    )
}
