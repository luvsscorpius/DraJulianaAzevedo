import React from 'react'
import * as S from './Styles'
import ImgDraJuliana from '../../Assets/img/DraJulianaHero.webp'
import badge from '../../Assets/img/badge.webp'
import heart from '../../Assets/img/heart.webp'
import book from '../../Assets/img/book.webp'
import user from '../../Assets/img/user.webp'
import DraJulianaHero400 from '../../assets/img/DraJulianaHero-400.webp';
import DraJulianaHero650 from '../../assets/img/DraJulianaHero-650.webp';
import DraJulianaHero1000 from '../../assets/img/DraJulianaHero-1000.webp';

export const Sobre = () => {
    return (
        <S.main id="sobre">
            <S.titleDiv>
                <p>SOBRE A PROFISSIONAL</p>
                <h2>Dra. Juliana Azevedo</h2>
                <h3>CRM/MG 48194</h3>
            </S.titleDiv>

            <div className='firstContainer'>
                <S.imgDiv>
                    <picture>
                        <source
                            type="image/webp"
                            srcSet={`
      ${DraJulianaHero400} 400w,
      ${DraJulianaHero650} 650w,
      ${DraJulianaHero1000} 900w
    `}
                            sizes="(max-width: 768px) 90vw, 649px"
                        />

                        <img
                            src={DraJulianaHero650}
                            alt="Dra. Juliana Azevedo"
                            width="650"
                            height="811"
                            loading="lazy"
                        />
                    </picture>
                </S.imgDiv>

                <div className='secondContainer'>
                    <S.descDiv>
                        <p>Médica com 18 anos de experiência e dedicação ao cuidado integral da saúde mental. </p> <br />

                        <p>
                            Minha missão é oferecer um atendimento que une ciência, ética, escuta e humanização, proporcionando um espaço seguro e acolhedor, no qual cada paciente possa se sentir verdadeiramente ouvido, compreendido e respeitado em sua trajetória.
                        </p>

                        <br />

                        <p>
                            Acredito que cuidar da saúde mental vai muito além de estabelecer um diagnóstico. Cada pessoa possui uma história, necessidades e desafios únicos. Por isso, meu trabalho é construir, junto com cada paciente, um plano de cuidado individualizado, baseado em evidências científicas e, principalmente, em uma relação de confiança.
                        </p>

                        <br />

                        <p>
                            Meu propósito é auxiliar na busca por equilíbrio emocional, qualidade de vida e bem-estar, respeitando o tempo, a história e as particularidades de cada pessoa.
                        </p>

                        <br />

                        <h3>Formação e experiência</h3>

                        <br />

                        <p>Sou formada em Medicina pela Universidade do Vale do Sapucaí (UNIVÁS), em 2008.</p>

                        <br />

                        <p>Entre 2018 e 2020, realizei estágio na área de Psiquiatria no Hospital das Clínicas Samuel Libânio (HCSL), período que contribuiu de forma significativa para minha formação e experiência no cuidado em saúde mental.</p>

                        <br />

                        <p>
                            Atualmente, atendo em consultório particular e também atuo na Clínica Almeida Barros, com experiência no acompanhamento de pacientes com transtornos relacionados ao uso de substâncias e dependência química.
                        </p>

                        <br />

                        <p>
                            Meu compromisso é oferecer um atendimento médico baseado em conhecimento científico, mas sem perder aquilo que considero essencial: olhar para o paciente como um todo, com acolhimento, respeito e humanidade.
                        </p>
                    </S.descDiv>

                    <S.palavraChaveDiv>
                        <span>
                            <p>Especialista em Saúde Mental</p>
                        </span>

                        <span>
                            <p>Pouso Alegre - MG</p>
                        </span>

                        <span>
                            <p>Pronto Clínica Luna</p>
                        </span>

                        <span>
                            <p>Clínica Almeida Barros</p>
                        </span>
                    </S.palavraChaveDiv>

                </div>

            </div>

            <S.infoDivContainer>
                <S.card>
                    <span>
                        <img src={badge} alt="Icone de trofeu" loading="lazy" />
                    </span>

                    <h2>18 Anos de Experiência</h2>

                    <p>Experiência consolidada na área médica.</p>
                </S.card>

                <S.card>
                    <span>
                        <img src={heart} alt="Icone de coração" loading="lazy" />
                    </span>

                    <h2>Escuta Ativa</h2>

                    <p>Abordagem humanizada e acolhedora.</p>
                </S.card>

                <S.card>
                    <span>
                        <img src={book} alt="Icone de livro" loading="lazy" />
                    </span>

                    <h2>Ciência e Ética</h2>

                    <p>Tratamento com base em evidências.</p>
                </S.card>

                <S.card>
                    <span>
                        <img src={user} alt="Icone de pessoas" loading="lazy" />
                    </span>

                    <h2>Atendimento Individualizado</h2>

                    <p>Cada paciente é único.</p>
                </S.card>
            </S.infoDivContainer>
        </S.main>
    )
}
