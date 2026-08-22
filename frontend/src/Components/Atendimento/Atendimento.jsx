import React from 'react'
import * as A from './Styles'
import location from '../../Assets/img/location.webp'
import checked from '../../Assets/img/checked.webp'
import clock from '../../Assets/img/clock.webp'
import draJulianaHorario from "../../Assets/img/draJulianaHorario.webp"
import blobAtendimentoDireito from '../../Assets/img/blobAtendimentoDireito.svg'
import blobAtendimentoEsquerdo from '../../Assets/img/blobAtendimentoEsquerdo.svg'

export const Atendimento = () => {
  const goTo = () => {
    window.open("https://api.whatsapp.com/send/?phone=5535999215198&text&type=phone_number&app_absent=0&utm_source=ig")
  }

  return (
    <A.main>
      <img src={blobAtendimentoEsquerdo} alt="blob esquerdo" className='blobEsquerdo' />
      <img src={blobAtendimentoDireito} alt="blob direito" className='blobDireito'/>

      <A.titleDiv>
        <p>COMO FUNCIONA</p>
        <h2>Modalidades de Atendimento</h2>
      </A.titleDiv>

      <A.descDiv>
        <p>Escolha a modalidade que melhor se adapta à sua rotina e necessidades. Em ambas as opções, você terá o mesmo cuidado atencioso e profissional.</p>
      </A.descDiv>

      <A.cardDiv>
        <A.card>
          <A.cardHeader>
            <span>
              <img src={location} alt="Icone de localização" />
            </span>

            <h2>Atendimento Presencial</h2>
            <p>Consultas realizadas na Pronto Clínica Luna, em Pouso Alegre - MG, em um ambiente acolhedor e confortável.</p>
          </A.cardHeader>

          <A.cardBody>
            <span>
              <img src={checked} alt="Icone de check" />
              <p>Ambiente reservado e confortável</p>
            </span>

            <span>
              <img src={checked} alt="Icone de check" />
              <p>Equipamentos modernos</p>
            </span>

            <span>
              <img src={checked} alt="Icone de check" />
              <p>Fácil acesso e estacionamento</p>
            </span>

            <span>
              <img src={checked} alt="Icone de check" />
              <p>Atendimento personalizado</p>
            </span>
          </A.cardBody>
        </A.card>

        <A.card>
          <A.cardHeader>
            <span>
              <img src={location} alt="Icone de localização" />
            </span>

            <h2>Consulta Online</h2>
            <p>Atendimento por telemedicina, oferecendo praticidade e flexibilidade sem comprometer a qualidade do cuidado.</p>
          </A.cardHeader>

          <A.cardBody>
            <span>
              <img src={checked} alt="Icone de check" />
              <p>Conforto do seu lar</p>
            </span>

            <span>
              <img src={checked} alt="Icone de check" />
              <p>Horários flexíveis</p>
            </span>

            <span>
              <img src={checked} alt="Icone de check" />
              <p>Mesma qualidade de atendimento</p>
            </span>

            <span>
              <img src={checked} alt="Icone de check" />
              <p>Plataforma segura e confidencial</p>
            </span>
          </A.cardBody>
        </A.card>

        <A.card className='relogio'>
          <A.cardHeader className='cardClock'>
            <div className="firstContainer">
              <span>
                <img src={clock} alt="Icone de Relógio" />
              </span>
            </div>

            <div className="secondContainer">
              <h2>Horários Flexíveis</h2>
              <p>Oferecemos horários adaptados à sua rotina, incluindo opções durante a semana. Entre em contato para verificar disponibilidade e agendar sua consulta.</p>

              <img src={draJulianaHorario} alt="Icone da Dra. cartoon" />
              <button onClick={goTo}>Consultar Horários</button>
            </div>
          </A.cardHeader>
        </A.card>
      </A.cardDiv>
    </A.main>
  )
}
