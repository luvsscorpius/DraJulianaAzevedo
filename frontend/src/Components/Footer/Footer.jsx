import React from 'react'
import * as F from './Styles'
import instagram from '../../Assets/img/instagram.webp'
import facebook from '../../Assets/img/facebook.webp'
import linkedin from '../../Assets/img/linkedin.webp'

export const Footer = () => {
    return (
        <F.footer>
            <div className="firstContainer">
                <F.footerHeaderDiv>
                    <h3>Dra. Juliana Azevedo</h3>

                    <p>Cuidando da sua saúde mental com ética, empatia e profissionalismo há 18 anos.</p>

                    <F.iconsDiv>
                        <span>
                            <a href="https://www.instagram.com/drajulianaazevedo.medica/"><img src={instagram} alt="Ícone do instagram" target='_blank' rel="noreferrer" /></a>
                        </span>

                        <span>
                            <a href="https://www.facebook.com/juliana.souzaazevedotresinari"><img src={facebook} alt="Ícone do facebook" className='facebook' target='_blank' rel="noreferrer" /></a>
                        </span>

                        <span>
                            <a href="/https://www.linkedin.com/in/juliana-azevedo-tresinari-98a565363/"><img src={linkedin} alt="Ícone do linkedin" target='_blank' rel="noreferrer" /></a>
                        </span>
                    </F.iconsDiv>
                </F.footerHeaderDiv>

                <F.footerBodyDiv>
                    <div>
                        <h4>Navegação</h4>

                        <ul className='nav'>
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
                            <li>(35) 9 9921-5198</li>
                            <li>financeiro@wsmedicinadotrabalho.com.br</li>
                            <li>julianasazevedo@hotmail.com</li>
                            <li><a href="https://api.whatsapp.com/send/?phone=5535999215198&text&type=phone_number&app_absent=0&utm_source=ig" target='_blank' rel="noreferrer" >Agendar pelo Whatsapp</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4>Localização</h4>

                        <ul>
                            <li>Pronto Clínica Luna</li>
                            <li>Rua Cel. Otávio Meyer, 223 - Centro</li>
                            <li>CEP: 37550-067</li>
                        </ul>
                    </div>
                </F.footerBodyDiv>
            </div>

            <hr />

            <F.footerFooterDiv>
                <div className="firstContainer">
                    <p>© 2026 Dra. Juliana Azevedo. Todos os direitos reservados.</p>
                </div>

                <div className="secondContainer">
                    <p>Desenvolvido com ❤️ para cuidar de você</p>
                    <p><a href="https://luvsscorpius.github.io/dev-and-portfolio-react/" target='_blank' rel="noreferrer" >Desenvolvido por Anderson Vitor</a></p>
                </div>

            </F.footerFooterDiv>
        </F.footer>
    )
}
