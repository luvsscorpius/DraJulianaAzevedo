import React from 'react'
import * as F from './Styles'
import instagram from '../../Assets/img/instagram.png'
import facebook from '../../Assets/img/facebook.png'
import linkedin from '../../Assets/img/linkedin.png'

export const Footer = () => {
    return (
        <F.footer>
            <F.footerHeaderDiv>
                <h3>Dra. Juliana Azevedo</h3>

                <p>Cuidando da sua saúde mental com ética, empatia e profissionalismo há 18 anos.</p>

                <F.iconsDiv>
                    <span>
                        <a href="/#"><img src={instagram} alt="Ícone do instagram" /></a>
                    </span>

                    <span>
                        <a href="/#"><img src={facebook} alt="Ícone do facebook" className='facebook' /></a>
                    </span>

                    <span>
                        <a href="/#"><img src={linkedin} alt="Ícone do linkedin" /></a>
                    </span>
                </F.iconsDiv>
            </F.footerHeaderDiv>

            <F.footerBodyDiv>
                <div>
                    <h4>Navegação</h4>

                    <ul>
                        <li>Inicio</li>
                        <li>Sobre</li>
                        <li>Saúde Mental</li>
                        <li>Atendimento</li>
                        <li>Localização</li>
                    </ul>
                </div>

                <div>
                    <h4>Contato</h4>

                    <ul>
                        <li>(35) 99999-9999</li>
                        <li>contato@drajulianaazevedo.com.br</li>
                        <li>Agendar pelo Whatsapp</li>
                    </ul>
                </div>

                <div>
                    <h4>Localização</h4>

                    <ul>
                        <li>Pronto Clínica Luna <br />
                        Rua Exemplo, 123 - CentroPouso Alegre - MG <br />
                        CEP: 37550-000</li>
                    </ul>
                </div>
            </F.footerBodyDiv>

            <hr />

            <F.footerFooterDiv>
                <p>© 2026 Dra. Juliana Azevedo. Todos os direitos reservados.</p>
                <p>Desenvolvido com ❤️ para cuidar de você</p>
                <p>Desenvolvido por Anderson Vitor</p>
            </F.footerFooterDiv>
        </F.footer>
    )
}
