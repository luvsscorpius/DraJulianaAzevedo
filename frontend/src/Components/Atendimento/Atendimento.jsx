import React from 'react'
import * as A from './Styles'
import location from '../../Assets/img/location.png'
import checked from '../../Assets/img/checked.png'
import clock from '../../Assets/img/clock.png'

export const Atendimento = () => {
  return (
    <A.main>
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

          <A.card>
            <A.cardHeader className='cardClock'>
              <span>
                <img src={clock} alt="Icone de Relógio" />
              </span>

              <h2>Horários Flexíveis</h2>
              <p>Oferecemos horários adaptados à sua rotina, incluindo opções durante a semana e aos sábados. Entre em contato para verificar disponibilidade e agendar sua consulta.</p>

              <button>Consultar Horários</button>
            </A.cardHeader>
          </A.card>
        </A.cardDiv>
    </A.main>
  )
}
