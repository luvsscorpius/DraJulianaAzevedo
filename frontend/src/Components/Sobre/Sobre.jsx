import React from 'react'
import * as S from './Styles'
import ImgDraJuliana from '../../Assets/img/DraJuliana.jpg'
import * as H from '../Hero/Styles'
import badge from '../../Assets/img/badge.png'
import heart from '../../Assets/img/heart.png'
import book from '../../Assets/img/book.png'
import user from '../../Assets/img/user.png'

export const Sobre = () => {
    return (
        <S.main>
            <S.titleDiv>
                <p>SOBRE A PROFISSIONAL</p>
                <h2>Dra. Juliana Azevedo</h2>
            </S.titleDiv>

            <div className='firstContainer'>
                <S.imgDiv>
                    <img src={ImgDraJuliana} alt="Imagem da Dra. Juliana" />
                </S.imgDiv>

                <span className='secondContainer'>
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

                </span>

            </div>

            <S.infoDivContainer>
                <S.card>
                    <span>
                        <img src={badge} alt="Icone de trofeu" />
                    </span>

                    <h2>18 Anos de Experiência</h2>

                    <p>Experiência consolidada na área médica, com formação sólida e atualização constante.</p>
                </S.card>

                <S.card>
                    <span>
                        <img src={heart} alt="Icone de coração" />
                    </span>

                    <h2>Escuta Ativa</h2>

                    <p>Abordagem humanizada que prioriza o acolhimento e a compreensão das necessidades individuais.</p>
                </S.card>

                <S.card>
                    <span>
                        <img src={book} alt="Icone de livro" />
                    </span>

                    <h2>Ciência e Ética</h2>

                    <p>Tratamento baseado em evidências científicas com compromisso ético e profissional.</p>
                </S.card>

                <S.card>
                    <span>
                        <img src={user} alt="Icone de pessoas" />
                    </span>

                    <h2>Atendimento Individualizado</h2>

                    <p>Cada paciente é único e recebe cuidado personalizado para suas necessidades específicas.</p>
                </S.card>
            </S.infoDivContainer>
        </S.main>
    )
}
