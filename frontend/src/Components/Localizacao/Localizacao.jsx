import React from 'react'
import * as L from './Styles'
import { Marker, Popup, MapContainer } from "react-leaflet"
import { TileLayer } from 'react-leaflet/TileLayer'
import { Icon } from 'leaflet'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import location from '../../Assets/img/locationGreen.png'
import telephone from '../../Assets/img/telephone.png'
import clockGreen from '../../Assets/img/clockGreen.png'
import draJulianaCartoon from "../../Assets/img/draJulianaCartoon.png"

export const Localizacao = () => {
    return (
        <L.main>
            <L.titleDiv>
                <h3>ONDE ESTAMOS</h3>
                <h2>Local de Atendimento</h2>
                <p>Os atendimentos presenciais são realizados em um espaço moderno e acolhedor, projetado para oferecer conforto e privacidade.</p>
            </L.titleDiv>

            <div className="firstContainer">
            <L.locationDiv>
                <div>
                    <MapContainer center={[-22.228402497927878, -45.93934999098994]} zoom={18} scrollWheelZoom={true}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[-22.228402497927878, -45.93934999098994]} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })} >
                            <Popup>
                                Pronto Clínica Luna <br />
                            </Popup>
                        </Marker>
                    </MapContainer>

                    <L.locationBody>
                    <h3>Pronto Clínica Luna</h3>

                    <L.cardContainer>
                        <L.card>
                            <span className='imgDiv'>
                                <img src={location} alt="ícone de localização" />
                            </span>

                            <span>
                                <h4>Endereço</h4>
                                <p>Rua Cel. Otávio Meyer, 223 - Centro<br />
                                    Pouso Alegre - MG <br />
                                    CEP: 37550-067 <br /></p>
                            </span>
                        </L.card>

                        <L.card>
                            <span className='imgDiv'>
                                <img src={telephone} alt="ícone de telefone" />
                            </span>

                            <span>
                                <h4>Contato</h4>
                                <p>(35) 9 9921-5198 <br />
                                financeiro@wsmedicinadotrabalho.com.br
                                </p>
                            </span>
                        </L.card>

                        <L.card>
                            <span className='imgDiv'>
                                <img src={clockGreen} alt="ícone de relógio" />
                            </span>

                            <span>
                                <h4>Horário de Atendimento</h4>
                                <p>Segunda a Sexta: 8h às 18h</p>
                            </span>
                        </L.card>
                    </L.cardContainer>

                    <button>Ver Rotas no Google Maps</button>
                </L.locationBody>
                </div>


            <div className="secondContainer">
                    <L.facilidadesDiv>
                        <h3>Facilidades do Local</h3>

                        <ul>
                            <li>Estacionamento disponível</li>
                            <li>Acessibilidade para cadeirantes</li>
                            <li>Sala de espera confortável</li>
                            <li>Consultório privativo</li>
                            <li>Localização central</li>
                            <li>Fácil acesso por transporte público</li>
                        </ul>
                    </L.facilidadesDiv>

                    <L.agendarConsulta>
                        <h3>Agende sua Consulta</h3>
                        <p>Entre em contato pelo WhatsApp e escolha a melhor data e horário para seu atendimento, seja presencial ou online.</p>
                        <img src={draJulianaCartoon} alt="icone cartoon da Dra." />
                        <button>Falar pelo WhatsApp</button>
                    </L.agendarConsulta>
                </div>
            </L.locationDiv>
            </div>

        </L.main>
    )
}
